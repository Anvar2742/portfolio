import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(initReactI18next)
    .use(LanguageDetector)
    .init({
        fallbackLng: "fr",
        // lng: getCurrentLang(),
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
                translation: {
                    title: "Hi, I'm Anvar",
                    label: "Select another language!",
                    about: "About",
                    home: "Home",
                },
            },
            fr: {
                translation: {
                    title: "Salut, c'est Anvar",
                    label: "Selecciona otro lenguaje!",
                    about: "Sobre mí",
                    home: "Inicio",
                },
            },
        },
    });

export default i18n;
