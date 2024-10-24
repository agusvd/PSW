import React from 'react';
import ProductPage from '../components/ProductPage';

const PageMerluzaA = () => {
    const idName = "southern-hake"
    const productName = "Merluza Austral";
    const scientificName = "Merluccius australis";
    const productDescription = "Pescada en los mares y canales australes de la región de Magallanes, esta merluza es valorada por su carne blanca y suave, ideal para una variedad de preparaciones.";
    const howItsObtained = "Se pesca en los mares y canales australes de la región de Magallanes, Patagonia Austral.";
    const plantProcesses = [
        { title: "Recepción", description: "Se revisa exhaustivamente la t° y las condiciones organolépticas para garantizar la frescura del producto." },
        { title: "Proceso", description: "Lavado y descamado para presentación en filete con piel y HGT. Congelación I.Q.F." },
        { title: "Presentación", description: "Filetes con piel y sin piel, así como HGT, dependiendo de las especificaciones del cliente." },
        { title: "Clasificación", description: "Los filetes son clasificados por peso, en gramos o libras, según solicitud del cliente." },
        { title: "Empaque", description: "Se empaca IWP, en cajas de cartón de 10 kg o 20 lbs, asegurando el mantenimiento adecuado de la temperatura." }
    ];
    const exportMarkets = "Mercados, EE.UU. – Brasil..";
    const benefits = [
        { title: "Alto valor nutritivo", description: "Fuente rica en proteínas y ácidos grasos omega-3, ideal para una dieta saludable.", icon: "/iconos/nutritivo.svg" },
        { title: "Pesca sostenible", description: "Se realiza bajo estrictas normativas que aseguran la sostenibilidad de las poblaciones marinas.", icon: "/iconos/sostenible.svg" },
        { title: "Versátil", description: "Perfecta para una variedad de platos debido a su sabor delicado y textura firme.", icon: "/iconos/versatil.svg" }
    ];
    const imageGallery = [
        "https://example.com/merluza1.jpg",
        "https://example.com/merluza2.jpg",
        "https://example.com/merluza3.jpg"
    ];

    return (
        <ProductPage
            idName={idName}
            productName={productName}
            scientificName={scientificName}
            productDescription={productDescription}
            howItsObtained={howItsObtained}
            plantProcesses={plantProcesses}
            exportMarkets={exportMarkets}
            benefits={benefits}
            imageGallery={imageGallery}
        />
    );
}

export default PageMerluzaA;
