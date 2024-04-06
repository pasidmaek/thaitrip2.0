import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import th from "../../assets/localization/th_TH.json";
import en from "../../assets/localization/en_US.json";

export const languageResources = {
 en: { translation: en },
 th: { translation: th },
};

const i18n = i18next.createInstance();

i18n.use(initReactI18next).init({
 compatibilityJSON: "v3",
 lng: "en",
 fallbackLng: "th",
 resources: languageResources,
 interpolation: {
  escapeValue: false,
 },
});

export default i18next;
