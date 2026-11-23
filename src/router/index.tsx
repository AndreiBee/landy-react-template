import { lazy, Suspense, useEffect } from "react";
import { Switch, Route, Redirect, useLocation, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Footer from "../components/Footer";
import Header from "../components/Header";
import routes from "./config";
import ScrollToTop from "../components/ScrollToTop";
import { Language, preferredLanguage } from "../translation";
import { localizePath } from "../common/utils/localize";

// Create the lazy page components once, not on every render.
const pages = routes.map((route) => ({
  ...route,
  Component: lazy(() => import(`../pages/${route.component}`)),
}));

const NotFound = lazy(() => import("../pages/NotFound"));

const LANG_ROOT = "/:lang(cs|en)";

/** Keeps i18n in step with the URL (for example after Back/Forward). */
const LanguageSync = () => {
  const { lang } = useParams<{ lang: Language }>();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language !== lang) i18n.changeLanguage(lang);
  }, [lang, i18n]);

  return null;
};

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
  return <Redirect to={`${localizePath(preferredLanguage(), path)}${search}${hash}`} />;
};

const Router = () => {
  return (
    <Suspense fallback={null}>
      <Header />
      <ScrollToTop />
      <Switch>
        <Route path={LANG_ROOT}>
          <LanguageSync />
          <Switch>
            {pages.map(({ key, path, Component }) => (
              <Route
                key={key}
                path={path === "/" ? LANG_ROOT : `${LANG_ROOT}${path}`}
                exact
                strict={false}
                component={Component}
              />
            ))}
            <Route component={NotFound} />
          </Switch>
        </Route>
        <Route component={UnprefixedPath} />
      </Switch>
      <Footer />
    </Suspense>
  );
};

export default Router;
