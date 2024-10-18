import React from 'react';
import ProductPage from '../components/ProductPage';
import NavTop from '../components/NavTop';
import NavDock from '../components/NavDock';

const PageCentolla = () => {
    const productName = "Centolla de Magallanes";
    const productDescription = "Una joya gastronómica del extremo sur de Chile, conocida por su delicada y exquisita carne, ideal para platos gourmet.";
    const howItsObtained = "La centolla se captura en las costas de la región de Magallanes usando trampas especializadas que permiten una pesca sostenible.";
    const plantProcesses = [
        { title: "Recepción", description: "Las centollas capturadas son transportadas y revisadas para asegurar su frescura." },
        { title: "Clasificación", description: "Se clasifican según tamaño y calidad." },
        { title: "Procesamiento", description: "Dependiendo del destino, pueden procesarse como centolla entera, patas/pinzas o carne de centolla." },
        { title: "Congelación", description: "Las centollas son congeladas rápidamente para mantener su frescura." },
        { title: "Empaque", description: "Se empaquetan bajo condiciones controladas para su exportación." }
    ];
    const exportMarkets = "Los productos de centolla de Magallanes se exportan a mercados como Estados Unidos, Europa y Asia, asegurando estándares de calidad y trazabilidad.";
    const benefits = [
        { title: "Saludable", description: "Alta en proteínas y baja en grasas, ideal para una dieta equilibrada.", icon: "/iconos/saludable.svg" },
        { title: "Sostenible", description: "Pesca respetuosa con el medio ambiente y las temporadas de captura.", icon: "/iconos/sostenible.svg" },
        { title: "Gourmet", description: "Ideal para platos de alta cocina, por su delicado sabor y textura.", icon: "/iconos/gourmet.svg" }
    ];
    const imageGallery = [
        "https://www.subpesca.cl/portal/616/articles-814_foto.jpg",
        "https://www.subpesca.cl/portal/616/articles-814_foto.jpg",
        "https://www.subpesca.cl/portal/616/articles-814_foto.jpg"
    ];

    return (

        <ProductPage
            productName={productName}
            productDescription={productDescription}
            howItsObtained={howItsObtained}
            plantProcesses={plantProcesses}
            exportMarkets={exportMarkets}
            benefits={benefits}
            imageGallery={imageGallery}
        />

    );
}

export default PageCentolla;
