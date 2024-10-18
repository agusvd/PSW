import i18n from "i18next";
import { initReactI18next } from "react-i18next";


const resources = {
    en: {
        "translation": {
            "idioma": "Language",
            "inicio": "Home",
            "nosotros": "About us",
            "contacto": "Contact",
            "catalogo": "Catalog"
        }
    },
    es: {
        "translation": {
            "idioma": "Idioma",
            "inicio": "Inicio",
            "nosotros": "Nosotros",
            "contacto": "Contacto",
            "catalogo": "Catalogo"
            
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