import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import { HelmetProvider } from "react-helmet-async";
// Self-hosted font (bundled with the site, no request to Google's servers).
import "@fontsource-variable/plus-jakarta-sans/wght.css";

import Router from "./router";
import i18n from "./translation";
import { Styles } from "./styles/styles";

const App = () => (
  <StrictMode>
    <HelmetProvider>
      <I18nextProvider i18n={i18n}>
        <Styles />
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </I18nextProvider>
    </HelmetProvider>
  </StrictMode>
);

createRoot(document.getElementById("root") as HTMLElement).render(<App />);
