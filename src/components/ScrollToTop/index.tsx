import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Posun na vrchol stránky
  }, [pathname]); // Spustí se vždy, když se změní cesta

  return null; // Tato komponenta nic nevykresluje
};

export default ScrollToTop;
