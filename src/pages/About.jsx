import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";

export default function About() {
    const { t } = useTranslation()
    const controlsText = useAnimation();
    const controlsImage = useAnimation();
    const { ref, inView } = useInView({ threshold: 0.2 });

    useEffect(() => {
        if (inView) {
            controlsText.start({
                opacity: 1, x: 0, 
                transition: { duration: 0.8, type: "spring", bounce: 0.3 },
            });
            controlsImage.start({
                opacity: 1, x: 0, 
                transition: { duration: 0.8, type: "spring", bounce: 0.3, delay: 0.2 },
            });
        } else {
            controlsText.start({ opacity: 0, x: -100 });
            controlsImage.start({ opacity: 0, x: 100 });
        }
    }, [inView, controlsText, controlsImage]);

    return (
        <motion.section id="about" ref={ref} className="px-6 py-12">
            <div className="container mx-auto flex flex-col gap-16">
                {/* Sección Empresa */}
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <motion.div
                        className="md:w-1/2 text-[#134B70]"
                        initial={{ opacity: 0, x: -100 }}
                        animate={controlsText}
                    >
                        <h2 className="text-4xl md:text-5xl font-secondary font-bold mb-4">
                            Patagonia South West Eirl
                        </h2>
                        <p className="text-lg text-[#508C9B] font-primary">
                            {t('about1')}
                        </p>
                    </motion.div>
                    <motion.div
                        className="md:w-1/2"
                        initial={{ opacity: 0, x: 100, scale: 0.7, rotate: 5 }}
                        animate={controlsImage}
                        whileHover={{ scale: 0.95, rotate: 0 }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1574781330855-d0db8cc6a79c?q=80&w=2970"
                            alt="Productos del mar"
                            className="rounded-lg shadow-lg"
                        />
                    </motion.div>
                </div>

                {/* Sección Objetivo */}
                <div className="flex flex-col-reverse md:flex-row items-center gap-12">
                    <motion.div
                        className="md:w-1/2 text-[#134B70]"
                        initial={{ opacity: 0, x: -100 }}
                        animate={controlsText}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 font-secondary">
                            {t('about2')}
                        </h2>
                        <p className="text-lg text-[#508C9B] font-primary">
                            {t('about3')}
                        </p>
                    </motion.div>
                    <motion.div
                        className="md:w-1/2"
                        initial={{ opacity: 0, x: 100, scale: 0.7, rotate: 5 }}
                        animate={controlsImage}
                        whileHover={{ scale: 0.9, rotate: 0 }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1606756790138-261d2b21cd75?q=80&w=2865"
                            alt="Objetivo de la empresa"
                            className="rounded-lg shadow-lg"
                        />
                    </motion.div>
                </div>

                {/* Mapa de Google Maps */}
                <div className="w-full h-96">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.2587123780515!2d-70.91001758466722!3d-53.163832179927554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbcdee3d09b3de66b%3A0x7461d3f66f8dd7cf!2sPunta%20Arenas%2C%20Regi%C3%B3n%20de%20Magallanes%20y%20de%20la%20Ant%C3%A1rtica%20Chilena%2C%20Chile!5e0!3m2!1ses!2sus!4v1698010250738!5m2!1ses!2sus"
                        width="100%"
                        height="100%"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </motion.section>
    );
}
