import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import { HelmetProvider } from "react-helmet-async";
import { ConfigProvider } from "antd";
import "antd/dist/reset.css";

import Router from "./router";
import i18n from "./translation";
import { Styles } from "./styles/styles";

// antd 5 sets its own font, size and colour on components like Row and Col.
// Match the site's look (and antd 4's defaults the design was built on).
const antdTheme = {
  token: {
    fontFamily: "'Motiva Sans Light', sans-serif",
    fontSize: 14,
    colorText: "rgba(0, 0, 0, 0.85)",
  },
};

// notification.success() etc. render outside the React tree; give them the
// same theme so the contact form's pop-ups use the site font.
ConfigProvider.config({
  holderRender: (children) => <ConfigProvider theme={antdTheme}>{children}</ConfigProvider>,
});

const App = () => (
  <StrictMode>
    <HelmetProvider>
      <ConfigProvider theme={antdTheme}>
        <I18nextProvider i18n={i18n}>
          <Styles />
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </I18nextProvider>
      </ConfigProvider>
    </HelmetProvider>
  </StrictMode>
);

createRoot(document.getElementById("root") as HTMLElement).render(<App />);
