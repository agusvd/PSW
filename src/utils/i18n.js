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
            "ingles": "Ingles",
            "hero1": "From the depths of Magallanes to the world, offering the best products of quality.",
            "why": "Why choose us?",
            "why1": "Internationally certified products",
            "why2": "Direct relations with fishing industries",
            "why3": "Experience in large commercial transactions",
            "why4": "We meet the highest quality standards",
            "why5": "Focused on sustainability",
            "why6": "With more than 15 years of experience",
            "cert1": "Quality management",
            "cert2": "Hazard control and critical points",
            "contactb1": "Interested in our products?",
            "contactb2": "Contact us and discover how we can help you obtain the best seafood products.",
            "contactb3": "Contact us",
            "about1": "Comercial Patagonia South West Eirl is dedicated to the production, marketing and export of seafood from the Magallanes region. Founded in 2008 in Punta Arenas by Rodrigo Castillo Mansilla, who has worked in the industry since 1999.",
            "about2": "Objetive",
            "about3": "We focus on producing high-quality products for markets in Europe, the United States, Japan, South Korea and China, guaranteeing certifications and supervising each stage of the process at Magallanes' fishing plants.",
            "contact1": "Contact us",
            "contact2": "Complete the form, and we will get in touch with you.",
            "form1": "First name",
            "form2": "Last name",
            "form3": "Email",
            "form4": "Phone",
            "form5": "Message",

        },
    },
    es: {
        "translation": {
            "idioma": "Idioma",
            "inicio": "Inicio",
            "nosotros": "Nosotros",
            "contacto": "Contacto",
            "catalogo": "Catalogo",
            "español": "Español",
            "ingles": "English",
            "hero1": "Desde las profundidades de Magallanes al mundo ofreciendo los mejores productos y de calidad",
            "why": "¿Por qué elegirnos?",
            "why1": "Productos certificados internacionalmente",
            "why2": "Relaciones directas con industrias pesqueras",
            "why3": "Experiencia en grandes transacciones comerciales",
            "why4": "Cumplimos con los más altos estándares de calidad",
            "why5": "Enfocados en la sostenibilidad",
            "why6": "Con más de 15 años de experiencia",
            "cert1": "Gestión de calidad",
            "cert2": "Control de peligros y puntos críticos",
            "contactb1": "¿Interesado en nuestros productos?",
            "contactb2": "Contacta con nosotros y descubre cómo podemos ayudarte a obtener los mejores productos del mar.",
            "contactb3": "Contáctanos",
            "about1": "Comercial Patagonia South West Eirl se dedica a la elaboración, comercialización y exportación de productos del mar desde la región de Magallanes. Fundada en 2008 en Punta Arenas por Rodrigo Castillo Mansilla, quien ha trabajado en la industria desde 1999.",
            "about2": "Objetivo",
            "about3": "Nos enfocamos en elaborar productos de alta calidad para mercados en Europa, Estados Unidos, Japón, Corea del Sur y China, garantizando certificaciones y supervisando cada etapa del proceso en las plantas pesqueras de Magallanes.",
            "contact1": "Contáctanos",
            "contact2": "Completa el formulario y nos pondremos en contacto contigo.",
            "form1": "Nombre",
            "form2": "Apellido",
            "form3": "Correo",
            "form4": "Telefono",
            "form5": "Mensaje",
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