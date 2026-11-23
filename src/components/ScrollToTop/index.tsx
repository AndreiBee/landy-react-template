import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { stripLanguage } from "../../common/utils/localize";

// Scroll to the top when the page changes, but not when only the language
// changes (/cs/about -> /en/about), so switching language keeps your place.
const ScrollToTop = () => {
  const { pathname } = useLocation();
  const page = stripLanguage(pathname);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return null;
};

export default ScrollToTop;
