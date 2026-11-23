import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { stripLanguage } from "../../common/utils/localize";

/**
 * - New page: scroll to the top.
 * - Link with #section (e.g. /en/#services): scroll to that section, waiting
 *   briefly for lazily loaded pages to render it.
 * - Only the language changed (/cs/about -> /en/about): keep the position.
 */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  const page = stripLanguage(pathname);

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    const id = decodeURIComponent(hash.slice(1));
    let tries = 0;
    let timer: number;
    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (tries++ < 40) {
        timer = window.setTimeout(tryScroll, 50);
      }
    };
    tryScroll();
    return () => window.clearTimeout(timer);
  }, [page, hash]);

  return null;
};

export default ScrollToTop;
