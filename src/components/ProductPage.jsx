import React from 'react';
import NavTop from '../components/NavTop';
import Footer from '../pages/Footer'
import NavDock from '../components/NavDock';
import { motion } from 'framer-motion';

const SeafoodProductPage = ({ productName, productDescription, howItsObtained, plantProcesses, exportMarkets, benefits, imageGallery }) => {
    return (
        <div>
            <NavTop />
            <NavDock />

            {/* Header */}
            <section className="container mx-auto p-6 mt-10 text-center">
                <h1 className="text-4xl font-bold text-[#134B70]">{productName}</h1>
                <p className="text-gray-600 text-lg mt-4">{productDescription}</p>
            </section>

            {/* How it's Obtained */}
            <section className="container mx-auto p-6 mt-10">
                <h2 className="text-3xl font-bold text-[#134B70] mb-4">¿Cómo se obtiene?</h2>
                <p className="text-gray-600 text-lg mb-4">{howItsObtained}</p>
            </section>

            {/* Plant Processes */}
            <section className="container mx-auto p-6 mt-10">
                <h2 className="text-3xl font-bold text-[#134B70] mb-4">Procesos en Planta</h2>
                <ul className="list-disc pl-6 text-gray-600 text-lg">
                    {plantProcesses.map((process, index) => (
                        <li key={index}><strong>{process.title}:</strong> {process.description}</li>
                    ))}
                </ul>
            </section>

            {/* Export Markets */}
            <section className="container mx-auto p-6 mt-10">
                <h2 className="text-3xl font-bold text-[#134B70] mb-4">Exportación</h2>
                <p className="text-gray-600 text-lg mb-4">{exportMarkets}</p>
            </section>

            {/* Benefits */}
            <section className="container mx-auto p-6 mt-10">
                <h2 className="text-3xl font-bold text-[#134B70] text-center mb-6">Beneficios</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            className="bg-white shadow-md rounded-lg p-6 text-center"
                            whileHover={{ scale: 1.05 }}
                        >
                            <img src={benefit.icon} alt={benefit.title} className="w-16 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-[#134B70]">{benefit.title}</h3>
                            <p className="text-gray-600 text-lg">{benefit.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Image Gallery */}
            <section className="container mx-auto p-6 mt-10">
                <h2 className="text-3xl font-bold text-[#134B70] text-center mb-6">Galería de Imágenes</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {imageGallery.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`${productName} image ${index + 1}`}
                            className="rounded-lg shadow-lg w-full h-64 object-cover"
                        />
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default SeafoodProductPage;
