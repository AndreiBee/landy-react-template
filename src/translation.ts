import i18n from "i18next";

import translationEn from "./locales/en/translation.json";
import translationCs from "./locales/cs/translation.json";

export type Language = "en" | "cs";

const STORAGE_KEY = "lang";
export const SUPPORTED_LANGUAGES: Language[] = ["cs", "en"];
const SUPPORTED = SUPPORTED_LANGUAGES;

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

/** Where to send a visitor who arrives without a language in the URL. */
export const preferredLanguage = (): Language =>
  readStoredLanguage() ?? detectBrowserLanguage();

// The URL (/cs/..., /en/...) decides the language; otherwise use preference.
const languageInUrl = (): Language | null => {
  if (typeof window === "undefined") return null;
  const match = window.location.pathname.match(/^\/(cs|en)(?=\/|$)/);
  return match ? (match[1] as Language) : null;
};

export const initialLanguage: Language = languageInUrl() ?? preferredLanguage();

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

/** Switch language and remember the visitor's choice. Callers also change the URL. */
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
