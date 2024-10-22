import React from 'react';
import ProductPage from '../components/ProductPage';

const PageCentollon = () => {

    // Definir los datos del producto Centollón
    const productName = "Centollón";
    const productDescription = "El centollón es un crustáceo capturado en los fiordos y canales de la región de Magallanes, Patagonia Austral. Es reconocido por su calidad y sabor únicos.";
    const scientificName = "Paralomis granulosa";

    const howItsObtained = "El centollón se captura utilizando trampas en las aguas frías y profundas de la región de Magallanes.";

    const plantProcesses = [
        { title: "Recepción", description: "Se revisan todos los ejemplares para verificar que ingresen vivos a la línea de proceso." },
        { title: "Proceso", description: "Eviscerado, lavado, amarre, cocción, enfriado, lavado, escurrido, congelación." },
        { title: "Presentación", description: "Entero – Patas/Pinzas – Carne." },
        { title: "Clasificación", description: "Para Entero y Patas/Pinzas (de acuerdo con lo que solicite el cliente). Carne (1 Lb; 5 Lb)." },
        { title: "Empaque", description: "Se realiza bajo estricto control y rapidez cuidando la temperatura del producto." },
    ];

    const exportMarkets = "Producto con trazabilidad, cumpliendo con los requisitos de la autoridad sanitaria chilena, apto para los mercados de EE.UU., Europa y Asia.";

    const benefits = [
        { title: "Alta Calidad", description: "Producto fresco y cuidadosamente procesado.", icon: "/path-to-icon-1.png" },
        { title: "Valor Nutricional", description: "Alto en proteínas y bajo en grasas.", icon: "/path-to-icon-2.png" },
        { title: "Sabor Único", description: "Su textura suave y sabor son ideales para todo tipo de platos.", icon: "/path-to-icon-3.png" },
    ];

    const imageGallery = [

    ];

    return (
        <ProductPage
            productName={productName}
            scientificName={scientificName}  // Asegúrate de agregar este nuevo prop
            productDescription={productDescription}
            howItsObtained={howItsObtained}
            plantProcesses={plantProcesses}
            exportMarkets={exportMarkets}
            benefits={benefits}
            imageGallery={imageGallery}
        />
    );
}

export default PageCentollon;
