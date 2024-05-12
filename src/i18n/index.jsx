import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationsInArabic from "../locales/ar/translation.json";
import translationsInEng from "../locales/en/translation.json";
import translationsInHin from "../locales/hi/translation.json";
import translationsInGerman from "../locales/de/translation.json";
import translationsInItalian from "../locales/it/translation.json";
import translationsInJap from "../locales/ja/translation.json";
import translationsInFrench from "../locales/fr/translation.json";
import translationsInTel from "../locales/te/translation.json";
import translationsInMar from "../locales/mr/translation.json";
import translationsInKan from "../locales/kn/translation.json";
import translationsInUrdu from "../locales/ur/translation.json";

// translations
const resources = {
  ar: {
    translation: translationsInArabic,
  },
  en: {
    translation: translationsInEng,
  },
  hi: {
    translation: translationsInHin,
  },
  de: {
    translation: translationsInGerman,
  },
  it: {
    translation: translationsInItalian,
  },
  ja: {
    translation: translationsInJap,
  },
  fr: {
    translation: translationsInFrench,
  },
  te: {
    translation: translationsInTel,
  },
  mr: {
    translation: translationsInMar,
  },
  kn: {
    translation: translationsInKan,
  },
  ur: {
    translation: translationsInUrdu,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources, // resources are impo. to load translations for the languages
    lng: localStorage.getItem("lang"), // It acts as default language. When the site loads, content is shown in this lang.
    debug: true,
    fallbackLng: "de", // use de if selected language is not available
    interpolation: {
      escapeValue: false,
    },
    ns: "translation", // namespaces help to divide huge translations into multiple small files
    defaultNS: "translation",
  });

export default i18n;
