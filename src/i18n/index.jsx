import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationsInEng from "../locales/en/translation.json";
import translationsInHin from "../locales/hi/translation.json";
import translationsInGerman from "../locales/de/translation.json";
import translationsInItalian from "../locales/it/translation.json";
import translationsInJap from "../locales/ja/translation.json";

// translations
const resources = {
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
