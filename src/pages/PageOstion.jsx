import React from 'react';
import ProductPage from '../components/ProductPage';

const PageOstion = () => {
    const productName = "Ostión";
    const scientificName = "Argopecten purpuratus";
    const productDescription = "El ostión es un producto de alta calidad, extraído en los fiordos con ventisqueros de la Patagonia Chilena, conocido por su sabor delicado y su textura firme.";
    const howItsObtained = "Se extrae en los fiordos con ventisqueros de la Patagonia Chilena, garantizando un ambiente natural y limpio.";
    const plantProcesses = [
        { title: "Recepción", description: "Se verifica que los ostiones lleguen vivos a la planta para garantizar su frescura." },
        { title: "Proceso", description: "Se retiran las valvas y se extrae el ostión, desechando las vísceras. Luego se lavan, congelan mediante I.Q.F. y se calibran según tamaño." },
        { title: "Presentación", description: "Se presenta crudo y congelado, utilizando la tecnología I.Q.F." },
        { title: "Clasificación", description: "Clasificación en unidades por kilo: 10/20, 20/30, 30/40, 40/50." },
        { title: "Empaque", description: "Los ostiones se empacan en bolsas de 500 gr / 1 lb y cajas de 2 kg / 5 lb, o en cajas más grandes de 10 kg / 20 lb." }
    ];
    const exportMarkets = "Los ostiones de Patagonia se exportan principalmente a mercados como Estados Unidos y Brasil, cumpliendo con los más altos estándares de calidad y trazabilidad.";
    const benefits = [
        { title: "Delicioso y nutritivo", description: "El ostión es una excelente fuente de proteínas y minerales, además de ser bajo en calorías.", icon: "/iconos/nutritivo.svg" },
        { title: "Frescura garantizada", description: "Los ostiones son procesados y congelados rápidamente para asegurar su frescura.", icon: "/iconos/frescura.svg" },
        { title: "Pesca sostenible", description: "Las prácticas de extracción respetan el ecosistema marino de la Patagonia.", icon: "/iconos/sostenible.svg" }
    ];
    const imageGallery = [
        "https://example.com/ostion1.jpg",
        "https://example.com/ostion2.jpg",
        "https://example.com/ostion3.jpg"
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

export default PageOstion;
