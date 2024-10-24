import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { useTranslation } from "react-i18next";
import logo from '../assets/logo.png';

export default function Contact() {
    const { t } = useTranslation();
    const controlsForm = useAnimation();
    const { ref, inView } = useInView({
        threshold: 0.2,
    });

    useEffect(() => {
        if (inView) {
            controlsForm.start({
                opacity: 1,
                x: 0,
                transition: { duration: 0.8, type: "spring", bounce: 0.3 },
            });
        } else {
            controlsForm.start({ opacity: 0, x: -100 });
        }
    }, [inView, controlsForm]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para enviar el formulario
    };

    return (
        <motion.section id="contact" className="relative" ref={ref}>
            <div className="relative z-10 flex flex-col justify-center items-center">
                {/* Formulario de contacto */}
                <motion.div initial={{ opacity: 0, x: -100 }} animate={controlsForm} className="w-full md:w-1/2 flex justify-center items-center">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6 justify-center items-center w-[90%] md:w-[500px] p-8 bg-gray-100 rounded-lg relative">
                        {/* Fondo con logo difuminado */}
                        <div className="absolute inset-0 pointer-events-none flex justify-center items-center">
                            <img
                                src={logo}
                                className="w-[350px] h-[350px] opacity-20 absolute"
                                style={{ filter: "blur(10px)" }}
                                alt="Logo Background"
                            />
                        </div>

                        {/* Contenido del formulario */}
                        <motion.div className="w-full text-start relative z-10">
                            <h2 className="text-3xl font-semibold text-[#134B70] mb-2">
                                {t('contact1')}
                            </h2>
                            <p className="text-gray-500">
                                {t('contact2')}
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 gap-4 w-full relative z-10">
                            {/* Animación al hacer hover en los inputs */}
                            <motion.input required whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} placeholder={t('form1')} type="text" className="py-3 px-4 border-2 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-lg" />
                            <motion.input required whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} placeholder={t('form2')} type="text" className="py-3 px-4 border-2 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-lg" />
                            <motion.input required whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} placeholder={t('form3')} type="email" className="py-3 px-4 border-2 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-lg" />
                            <motion.input required whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} placeholder={t('form4')} type="number" className="py-3 px-4 border-2 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-lg" />
                            <motion.textarea required whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} placeholder={t('form5')} className="border-2 py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-lg" />
                        </div>
                        <motion.button whileHover={{ scale: 1.1, backgroundColor: "#508C9B" }} transition={{ duration: 0.1 }} className="w-full py-3 rounded-lg text-white bg-[#134B70] hover:bg-[#508C9B] active:bg-[#0A3A4E] duration-500 ease-in-out relative z-10">
                            Enviar
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </motion.section>
    );
}
