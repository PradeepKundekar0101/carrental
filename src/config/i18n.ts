import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslations from "../../public/locale/en/translation.json";
import frTranslations from "../../public/locale/fr/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslations },
    fr: { translation: frTranslations },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
