import { useTranslation } from "react-i18next";
import { getLanguage, Language, SUPPORTED_LANGUAGES } from "../../translation";

const LANG_PREFIX = new RegExp(`^/(${SUPPORTED_LANGUAGES.join("|")})(?=/|$)`);

/** "/about" + "en" -> "/en/about"; "/" + "cs" -> "/cs/" */
export const localizePath = (lang: Language, path: string) =>
  path === "/" || path === "" ? `/${lang}/` : `/${lang}${path}`;

/** The language in a URL path, if it has one. */
export const languageFromPath = (pathname: string): Language | null => {
  const match = pathname.match(LANG_PREFIX);
  return match ? (match[1] as Language) : null;
};

/** "/en/about" -> "/about"; "/en/" -> "/" */
export const stripLanguage = (pathname: string) =>
  pathname.replace(LANG_PREFIX, "") || "/";

/** Returns a function that prefixes paths with the current language. */
export const useLocalizedPath = () => {
  const { i18n } = useTranslation();
  const lang = getLanguage(i18n.language);
  return (path: string) => localizePath(lang, path);
};
