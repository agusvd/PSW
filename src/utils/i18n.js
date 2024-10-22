import i18n from "i18next";
import { initReactI18next } from "react-i18next";


const resources = {
    en: {
        "translation": {
            "idioma": "Language",
            "inicio": "Home",
            "nosotros": "About us",
            "contacto": "Contact",
            "catalogo": "Catalog",
            "español": "Spanish",
            "ingles": "English",
            "hero1": "From the depths of Magallanes to the world, offering the best products of quality.",
        }
    },
    es: {
        "translation": {
            "idioma": "Idioma",
            "inicio": "Inicio",
            "nosotros": "Nosotros",
            "contacto": "Contacto",
            "catalogo": "Catalogo",
            "español": "Español",
            "ingles": "Ingles",
            "hero1": "Desde las profundidades de Magallanes al mundo ofreciendo los mejores productos y de calidad",
        }
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "es",

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;