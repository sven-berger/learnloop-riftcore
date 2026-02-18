import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import deDE from "./languages/de-DE";

const resources = {
  de: {
    translation: deDE,
  },
} as const;

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "de",
    supportedLngs: ["de"],
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
