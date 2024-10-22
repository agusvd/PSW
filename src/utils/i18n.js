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
            "español": "Español",
            "ingles": "English",
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
            "catalog1": "Catalog",
            "product1": "King crab",
            "desc1": "Patagonian king crab, famous for its soft and juicy meat, ideal for those seeking an authentic and exclusive seafood flavor.",
            "product2": "Southern King Crab",
            "desc2": "The southern king crab, a robust and delicious crustacean, is perfect for preparing elegant and gourmet dishes.",
            "product3": "Sea Urchins",
            "desc3": "Sea urchin, with its intense ocean flavor, is a delicacy highly valued in international cuisine, especially in Asian gastronomy.",
            "product4": "Southern Scallop",
            "desc4": "The southern scallop, a delicate mollusk with a soft texture and subtle flavor, is ideal to enjoy fresh or in gourmet preparations.",
            "product5": "Razor Clam",
            "desc5": "The razor clam is a unique species from the Chilean coast, known for its firm meat and distinctive flavor, perfect for regional dishes.",
            "product6": "Conger Eel",
            "desc6": "Conger eel, a fish with delicate white meat, is a favorite in Chilean cuisine for soups and seafood stews.",
            "product7": "Southern Hake",
            "desc7": "Southern hake, known for its versatility and lean meat, is ideal for both simple preparations and more elaborate dishes.",
            "buttoncatalog": "Information"

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
            "catalog1": "Catálogo",
            "product1": "Centolla",
            "desc1": "Centolla de Magallanes, famosa por su carne suave y jugosa, ideal para quienes buscan un sabor de mar auténtico y exclusivo.",
            "product2": "Centollón",
            "desc2": "El centollón, un crustáceo robusto y delicioso, es perfecto para preparar platos elegantes y de alta cocina.",
            "product3": "Erizos de mar",
            "desc3": "El erizo de mar, con su intenso sabor a mar, es un manjar muy apreciado en la gastronomía internacional, especialmente en la asiática.",
            "product4": "Ostión del sur",
            "desc4": "Ostión del sur, un molusco delicado con una textura suave y un sabor sutil, ideal para disfrutar en su versión más fresca o en preparaciones gourmet.",
            "product5": "Huepo",
            "desc5": "El huepo es una especie única de las costas chilenas, conocida por su carne firme y su sabor distintivo, perfecto para platos regionales.",
            "product6": "Congrio",
            "desc6": "El congrio, un pescado de carne blanca y delicada, es uno de los preferidos en la cocina chilena para sopas y guisos marinos.",
            "product7": "Merluza Austral",
            "desc7": "La merluza austral, conocida por su versatilidad y carne magra, es ideal tanto para preparaciones sencillas como para platos más elaborados.",
            "buttoncatalog": "Información"
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