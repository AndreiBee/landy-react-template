import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import { I18nextProvider } from "react-i18next";
import "antd/dist/antd.css";

import Router from "./router";
import i18n from "./translation";

import CookieBanner from './components/CookieBanner';

const App = () => (
  <I18nextProvider i18n={i18n}>
    <BrowserRouter>
      <CookieBanner />
      <Router />
    </BrowserRouter>
  </I18nextProvider>
);

ReactDOM.render(<App />, document.getElementById("root"));
