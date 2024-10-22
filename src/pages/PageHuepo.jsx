import React from 'react';
import ProductPage from '../components/ProductPage';

const PageHuepo = () => {
    const productName = "Huepo";
    const scientificName = "Ensis macha";
    const productDescription = "Pescada en los mares y canales australes de la región de Magallanes, esta merluza es valorada por su carne blanca y suave, ideal para una variedad de preparaciones.";
    const howItsObtained = "Arte de pesca buceo, en bancos naturales de las costas del Estrecho de Magallanes, entre otros sectores de la región de Magallanes Patagonia Austral.";
    const plantProcesses = [
        { title: "Recepción", description: "Verificación exhaustiva de ingreso vivos a línea de proceso" },
        { title: "Proceso", description: "Cocción al vapor. Enfriado y lavado" },
        { title: "Presentación", description: "cocido congelado, fresco enfriado" },
        { title: "Clasificación", description: "De acuerdo con las exigencias del cliente" },
        { title: "Empaque", description: "Envases de 1Kg / 2lb; 5Kg / 10lb Cajas de 10kg / 10lb" }
    ];
    const exportMarkets = "Mercados de USA – Brasil – Asia.";
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

export default PageHuepo;
