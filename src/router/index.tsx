import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import routes from "./config";
import ScrollToTop from "../components/ScrollToTop";

// Create the lazy page components once, not on every render.
const pages = routes.map((route) => ({
  ...route,
  Component: lazy(() => import(`../pages/${route.component}`)),
}));

const NotFound = lazy(() => import("../pages/NotFound"));

const Router = () => {
  return (
    <Suspense fallback={null}>
      <Header />
      <ScrollToTop />
      <Switch>
        {pages.map(({ component, path, exact, Component }) => (
          <Route key={component} path={path} exact={exact} component={Component} />
        ))}
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Suspense>
  );
};

export default Router;
