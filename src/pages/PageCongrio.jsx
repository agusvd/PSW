import React from 'react';
import ProductPage from '../components/ProductPage';

const PageCongrio = () => {
    const idName = "conger-eel"
    const productName = "Congrio";
    const scientificName = "Genypterus blacodes";
    const productDescription = "Congrio dorado fruto de los mares australes de excelencia.";
    const howItsObtained = "Arte de pesca espinel en los canales profundos de la patagonia austral.";
    const plantProcesses = [
        { title: "Recepción", description: "Revisión de condiciones organolépticas para garantizar la frescura" },
        { title: "Proceso", description: "Lavado y preparacion para presentacion en filetes con y sin piel, HGT, HON. Congelación y UF." },
        { title: "Presentación", description: "De acuerdo al punto final, cajas de 10 a 20 kilos/libras" },
        { title: "Clasificación", description: "De acuerdo a la presentacion del producto son clasificados los filetes en gramos o libras de acuerdo a las indicaciones del cliente. Lo mismo para HGT y HON" },
        { title: "Empaque", description: "Filetes con o sin piel, YWP. Cajas de carton de 10 a 20 kilos/libras" }
    ];
    const exportMarkets = "Mercados de USA - Brasil - Asia.";
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

export default PageCongrio;
