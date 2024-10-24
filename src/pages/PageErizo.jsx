import React from 'react';
import ProductPage from '../components/ProductPage';

const PageErizo = () => {
    const idName = "sea-urchins"
    const productName = "Erizo de mar";
    const scientificName = "Loxechinus albus";    
    const productDescription = "El erizo de mar de las aguas más pristinas del mundo";
    const howItsObtained = "Arte de buseo, en las costas de los canales de la Region de Magallanes";
    const plantProcesses = [
        { title: "Recepción", description: "Revisión exhaustiva de frescura y confirmación de vida" },
        { title: "Proceso", description: "Se retira la cascara y el aparato digestivo, sacando con extremo cuidado las lenguas enteras para lavar, secar y ordenar en su envase final." },
        { title: "Presentación", description: "Erizo crudo, moldeado, volcado, congelado, y fresco - enfriado. Siempre de acuerdo a indicaciones del cliente" },
        { title: "Clasificación", description: "Se clasifica en el envase final de 100 gramos netos: AA - A - C (R). Volcado - moldeado" },
        { title: "Empaque", description: "Una vez congelado el producto moldeado o volcado se pasa en tarrinas o potes de 100 gramos netos y cajas de 6 kilos (60 moldes de 100 gramos)" }
    ];
    const exportMarkets = "Mercados de USA – Asia.";
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
            idName = {idName}
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

export default PageErizo;
