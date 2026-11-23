/**
 * Runs after `vite build`. For every page in src/router/pages.json
 * and every language it writes a static HTML file (e.g. build/en/about.html)
 * with the right <html lang>, title, description, Open Graph tags, canonical
 * and hreflang links, so search engines and link previews see the correct
 * language without running JavaScript. It also writes:
 *   - build/404.html      served by Netlify with a real 404 status
 *   - build/sitemap.xml   both languages, linked with hreflang
 *   - build/_redirects    old links (/about) -> /cs/about with a 301
 *
 * Plain Node, no dependencies. Usage: node scripts/generate-pages.js [buildDir]
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const BUILD = path.resolve(ROOT, process.argv[2] || process.env.BUILD_PATH || "build");
const SITE_URL = "https://arvion.cz";
const LANGUAGES = ["cs", "en"];
const DEFAULT_LANGUAGE = "cs"; // where old, unprefixed links point
const OG_LOCALE = { cs: "cs_CZ", en: "en_US" };
const TODAY = new Date().toISOString().slice(0, 10);

const readJson = (file) => JSON.parse(fs.readFileSync(path.join(ROOT, file), "utf8"));
const pages = readJson("src/router/pages.json");
const meta = readJson("src/content/PageMetaContent.json");
// Strip tags a previous run added, so running the script twice is harmless.
const template = fs
  .readFileSync(path.join(BUILD, "index.html"), "utf8")
  .replace(/<link rel="(canonical|alternate)"[^>]*data-rh="true"[^>]*>/g, "")
  .replace(/<meta name="robots"[^>]*data-rh="true"[^>]*>/g, "");

const escapeAttr = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const escapeText = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;");

const localizePath = (lang, p) => (p === "/" ? `/${lang}/` : `/${lang}${p}`);
const urlFor = (lang, p) => `${SITE_URL}${localizePath(lang, p)}`;

/** Replace the content="" of a tag that matches attr="value". */
const setContent = (html, attr, value, content) => {
  const re = new RegExp(`(<meta[^>]*\\s${attr}="${value}"[^>]*\\scontent=")[^"]*(")`);
  if (!re.test(html)) throw new Error(`Template is missing <meta ${attr}="${value}">`);
  return html.replace(re, (_, start, end) => `${start}${escapeAttr(content)}${end}`);
};

const render = ({ lang, title, description, url, links }) => {
  let html = template;
  html = html.replace(/<html lang="[^"]*"/, `<html lang="${lang}"`);
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeText(title)}</title>`);
  html = setContent(html, "name", "description", description);
  html = setContent(html, "property", "og:title", title);
  html = setContent(html, "property", "og:description", description);
  html = setContent(html, "property", "og:url", url);
  html = setContent(html, "property", "og:locale", OG_LOCALE[lang]);
  html = setContent(
    html,
    "property",
    "og:locale:alternate",
    OG_LOCALE[lang === "cs" ? "en" : "cs"]
  );
  html = setContent(html, "property", "twitter:title", title);
  html = setContent(html, "property", "twitter:description", description);
  // The build minifies index.html (comments removed), so append before </head>.
  if (!html.includes("</head>")) throw new Error("Template is missing </head>");
  return html.replace("</head>", () => `${links.join("")}</head>`);
};

const alternateLinks = (pagePath) => [
  ...LANGUAGES.map(
    (l) => `<link rel="alternate" hreflang="${l}" href="${urlFor(l, pagePath)}" data-rh="true" />`
  ),
  `<link rel="alternate" hreflang="x-default" href="${SITE_URL}/" data-rh="true" />`,
];

const write = (relative, content) => {
  const file = path.join(BUILD, relative);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, content);
};

const written = [];

// 1. One HTML file per page and language.
for (const page of pages) {
  const texts = meta[page.key];
  if (!texts) throw new Error(`No entry for "${page.key}" in PageMetaContent.json`);
  for (const lang of LANGUAGES) {
    const url = urlFor(lang, page.path);
    const links = page.noIndex
      ? [`<meta name="robots" content="noindex, follow" data-rh="true" />`]
      : [`<link rel="canonical" href="${url}" data-rh="true" />`, ...alternateLinks(page.path)];
    const file = page.path === "/" ? `${lang}/index.html` : `${lang}${page.path}.html`;
    write(file, render({ lang, ...texts[lang], url, links }));
    written.push(file);
  }
}

// 2. The bare domain: the app sends visitors to /cs/ or /en/ by preference.
//    It is the hreflang x-default; English metadata for link previews.
write(
  "index.html",
  render({
    lang: "en",
    ...meta.home.en,
    url: `${SITE_URL}/`,
    links: alternateLinks("/"),
  })
);

// 3. Netlify serves 404.html with a real 404 status; the app shows its 404 page.
write(
  "404.html",
  render({
    lang: "en",
    ...meta.notFound.en,
    url: `${SITE_URL}/`,
    links: [`<meta name="robots" content="noindex" data-rh="true" />`],
  })
);

// 4. Sitemap with both languages linked to each other.
const indexable = pages.filter((p) => !p.noIndex);
const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
  ...indexable.flatMap((page) =>
    LANGUAGES.map((lang) =>
      [
        "  <url>",
        `    <loc>${urlFor(lang, page.path)}</loc>`,
        ...LANGUAGES.map(
          (l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${urlFor(l, page.path)}" />`
        ),
        `    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}/" />`,
        `    <lastmod>${TODAY}</lastmod>`,
        "  </url>",
      ].join("\n")
    )
  ),
  "</urlset>",
  "",
].join("\n");
write("sitemap.xml", sitemap);

// 5. Netlify rules. Explicit rewrites make /en/about serve en/about.html
//    whatever the site's "pretty URLs" setting is. Old links get a 301.
//    No catch-all: unknown paths fall through to 404.html with status 404.
const redirects = [
  "# Generated by scripts/generate-pages.js - do not edit by hand.",
  "",
  "# Pages in each language (Netlify matches with and without a trailing slash;",
  "# /cs/ and /en/ are served from cs/index.html and en/index.html directly)",
  ...pages
    .filter((page) => page.path !== "/")
    .flatMap((page) =>
      LANGUAGES.map((lang) => `/${lang}${page.path}  /${lang}${page.path}.html  200`)
    ),
  "",
  "# Old links from before language prefixes",
  `/home  /${DEFAULT_LANGUAGE}/  301`,
  ...pages
    .filter((p) => p.path !== "/")
    .map((p) => `${p.path}  /${DEFAULT_LANGUAGE}${p.path}  301`),
  "",
].join("\n");
write("_redirects", redirects);

console.log(
  `generate-pages: wrote ${written.length} pages, index.html, 404.html, sitemap.xml and _redirects to ${path.relative(ROOT, BUILD) || BUILD}`
);
