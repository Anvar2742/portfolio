import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./en.json";
import fr from "./fr.json";

i18n.use(initReactI18next)
    .use(LanguageDetector)
    .init({
        fallbackLng: "fr",
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
                translation: en,
            },
            fr: {
                translation: fr,
            },
        },
    });

export default i18n;
