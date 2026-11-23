import i18n from "i18next";

import translationEn from "./locales/en/translation.json";
import translationCs from "./locales/cs/translation.json";

export type Language = "en" | "cs";

const STORAGE_KEY = "lang";
const SUPPORTED: Language[] = ["en", "cs"];

const isSupported = (value: unknown): value is Language =>
  typeof value === "string" && SUPPORTED.includes(value as Language);

const readStoredLanguage = (): Language | null => {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return isSupported(stored) ? stored : null;
  } catch {
    return null;
  }
};

// Walk the visitor's preferred languages in order: the first Czech/Slovak or
// English entry wins. Anyone else (or no match) gets English.
// Keep in sync with the inline script in public/index.html.
const detectBrowserLanguage = (): Language => {
  const languages =
    typeof navigator !== "undefined"
      ? navigator.languages?.length
        ? navigator.languages
        : [navigator.language]
      : [];
  for (const lang of languages) {
    if (/^(cs|sk)(-|$)/i.test(lang || "")) return "cs";
    if (/^en(-|$)/i.test(lang || "")) return "en";
  }
  return "en";
};

export const initialLanguage: Language =
  readStoredLanguage() ?? detectBrowserLanguage();

const syncDocumentLanguage = (lang: string) => {
  if (typeof document !== "undefined") {
    document.documentElement.lang = lang;
  }
};

i18n.init({
  debug: false,
  lng: initialLanguage,
  fallbackLng: "en",
  supportedLngs: SUPPORTED,

  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },

  resources: {
    en: {
      translations: translationEn,
    },
    cs: {
      translations: translationCs,
    },
  },
  ns: ["translations"],
  defaultNS: "translations",
});

syncDocumentLanguage(initialLanguage);

i18n.on("languageChanged", (lang) => {
  syncDocumentLanguage(lang);
});

/** Switch language and remember the visitor's choice. */
export const setLanguage = (lang: Language) => {
  try {
    window.localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    // Storage can be unavailable (private mode); the switch still works.
  }
  i18n.changeLanguage(lang);
};

/** The current language, guaranteed to be one we have content for. */
export const getLanguage = (lang: string = i18n.language): Language =>
  isSupported(lang) ? lang : "en";

export default i18n;
