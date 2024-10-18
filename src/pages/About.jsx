import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';

export default function About() {

    const controlsText = useAnimation();
    const controlsImage = useAnimation();
    const { ref, inView } = useInView({
        threshold: 0.2,
    });
    useEffect(() => {
        if (inView) {
            controlsText.start({
                opacity: 1,
                x: 0,
                transition: { duration: 0.8, type: "spring", bounce: 0.3 },
            });
            controlsImage.start({
                opacity: 1,
                x: 0,
                transition: { duration: 0.8, type: "spring", bounce: 0.3, delay: 0.2 },
            });
        } else {
            controlsText.start({ opacity: 0, x: -100 });
            controlsImage.start({ opacity: 0, x: 100 });
        }
    }, [inView, controlsText, controlsImage]);

    return (
        <motion.section id="about" className="bg-white p-2 rounded-t-3xl shadow-sm" ref={ref}>
            <div id="about-section" className="flex flex-col md:flex-row items-center gap-12 p-12">
                <motion.div
                    className="md:w-1/2 text-[#134B70]"
                    initial={{ opacity: 0, x: -100 }}
                    animate={controlsText}
                    transition={{ duration: 0.8 }}>
                    <h2 className="text-5xl font-secondary font-bold mb-4">Patagonia South West Eirl</h2>
                    <p className="text-[#508C9B] text-lg text-start font-primary">
                        Nuestra empresa, Comercial Patagonia South West Eirl, se dedica
                        principalmente a la elaboración, comercialización y exportación de
                        productos del mar provenientes de la región de Magallanes. Fundada
                        en 2008 en Punta Arenas por Rodrigo Castillo Mansilla, quien ha
                        adquirido vasta experiencia en el rubro desde 1999.
                    </p>
                </motion.div>
                <motion.div
                    className="md:w-1/2"
                    initial={{ opacity: 0, x: 100, scale: 0.7, rotate: 5 }}
                    animate={controlsImage}
                    transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
                    whileHover={{ scale: 0.95, rotate: 0 }}>
                    <img
                        src="https://images.unsplash.com/photo-1574781330855-d0db8cc6a79c?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Acerca de Magallánica"
                        className="rounded-lg shadow-lg"
                    />
                </motion.div>
            </div>

            {/* Objetivo Section */}
            <div id="objetivo-section" className="flex flex-col md:flex-row items-center gap-12">
                <motion.div
                    className="md:w-1/2 order-1 md:order-2 text-[#134B70]"
                    initial={{ opacity: 0, x: -100 }}
                    animate={controlsText}
                    transition={{ duration: 0.8 }}>
                    <h2 className="text-5xl font-bold mb-4 font-secondary">Objetivo</h2>
                    <p className="text-[#508C9B] text-lg text-start font-primary">
                        Elaborar productos de alta calidad para los mercados de Europa,
                        Estados Unidos, Japón, Corea del Sur y China, siempre cumpliendo
                        con las exigencias de certificación. Supervisamos cada etapa del
                        proceso en las plantas pesqueras de Magallanes para asegurar la
                        seguridad y calidad que nuestros clientes esperan.
                    </p>
                </motion.div>
                <motion.div
                    className="md:w-1/2"
                    initial={{ opacity: 0, x: 100, scale: 0.7, rotate: 5 }}
                    animate={controlsImage}
                    transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
                    whileHover={{ scale: 0.9, rotate: 0 }}
                >
                    <img src="https://images.unsplash.com/photo-1606756790138-261d2b21cd75?q=80&w=2865&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Objetivo Magallánica" className="rounded-lg shadow-lg" />
                </motion.div>
            </div>
        </motion.section>
    );
}
