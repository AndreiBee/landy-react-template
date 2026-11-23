import { ComponentType, lazy, Suspense, useEffect } from "react";
import { Routes, Route, Navigate, useLocation, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Footer from "../components/Footer";
import Header from "../components/Header";
import routes from "./config";
import ScrollToTop from "../components/ScrollToTop";
import { Language, preferredLanguage, SUPPORTED_LANGUAGES } from "../translation";
import { localizePath } from "../common/utils/localize";

type PageModule = { default: ComponentType };

// Vite bundles each page as its own chunk; this maps "Home" -> loader.
const pageModules = import.meta.glob<PageModule>("../pages/*/index.tsx");

const loadPage = (component: string) => {
  const loader = pageModules[`../pages/${component}/index.tsx`];
  if (!loader) throw new Error(`Page component "${component}" not found in src/pages`);
  return lazy(loader);
};

// Create the lazy page components once, not on every render.
const pages = routes.map((route) => ({ ...route, Component: loadPage(route.component) }));
const NotFound = loadPage("NotFound");

const isLanguage = (value: string | undefined): value is Language =>
  SUPPORTED_LANGUAGES.includes(value as Language);

/**
 * Paths without a language: "/" and old links such as "/about".
 * In production Netlify answers old links with a 301 (see
 * scripts/generate-pages.js); this covers the dev server and "/".
 */
const UnprefixedPath = () => {
  const { pathname, search, hash } = useLocation();
  const path = pathname === "/home" ? "/" : pathname.replace(/\/+$/, "") || "/";
  const known = routes.some((route) => route.path === path);

  if (!known) return <NotFound />;
  return <Navigate replace to={`${localizePath(preferredLanguage(), path)}${search}${hash}`} />;
};

/** Everything under /cs/ or /en/. */
const LanguageRoutes = () => {
  const { lang } = useParams();
  const { i18n } = useTranslation();
  const valid = isLanguage(lang);

  // Keep i18n in step with the URL (e.g. after Back/Forward across languages).
  useEffect(() => {
    if (valid && i18n.language !== lang) i18n.changeLanguage(lang);
  }, [valid, lang, i18n]);

  // "/:lang/*" also matches "/about"; treat a non-language first segment
  // as an unprefixed path.
  if (!valid) return <UnprefixedPath />;

  // Render the page only once i18n matches the URL. Otherwise a page that
  // mounts in the same update as the language change draws in the old
  // language and misses the change event.
  if (i18n.language !== lang) return null;

  return (
    <>
      <Routes>
        {pages.map(({ key, path, Component }) =>
          path === "/" ? (
            <Route key={key} index element={<Component />} />
          ) : (
            <Route key={key} path={path.slice(1)} element={<Component />} />
          )
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

const Router = () => {
  return (
    <Suspense fallback={null}>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/:lang/*" element={<LanguageRoutes />} />
        <Route path="*" element={<UnprefixedPath />} />
      </Routes>
      <Footer />
    </Suspense>
  );
};

export default Router;
