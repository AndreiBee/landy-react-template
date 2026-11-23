import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PageMetaContent from "../../content/PageMetaContent.json";
import routes from "../../router/config";
import { getLanguage, SUPPORTED_LANGUAGES } from "../../translation";
import { localizePath } from "../../common/utils/localize";

// Keep this in sync with scripts/generate-pages.js, which writes the same
// tags into the static HTML of each page at build time.
const SITE_URL = "https://arvion.cz";

export type PageKey = keyof typeof PageMetaContent;

interface PageMetaProps {
  page: PageKey;
  noIndex?: boolean;
}

const PageMeta = ({ page, noIndex = false }: PageMetaProps) => {
  const { i18n } = useTranslation();
  const { pathname } = useLocation();
  const lang = getLanguage(i18n.language);
  const { title, description } = PageMetaContent[page][lang];
  const route = routes.find((r) => r.key === page);
  const urlFor = (l: typeof lang) =>
    route ? `${SITE_URL}${localizePath(l, route.path)}` : `${SITE_URL}${pathname}`;
  const url = urlFor(lang);
  const indexable = !noIndex && !route?.noIndex && Boolean(route);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {indexable ? (
        <link rel="canonical" href={url} />
      ) : (
        <meta name="robots" content="noindex, follow" />
      )}
      {indexable &&
        SUPPORTED_LANGUAGES.map((l) => (
          <link key={l} rel="alternate" hrefLang={l} href={urlFor(l)} />
        ))}
      {indexable && <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/`} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:locale" content={lang === "cs" ? "cs_CZ" : "en_US"} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
    </Helmet>
  );
};

export default PageMeta;
