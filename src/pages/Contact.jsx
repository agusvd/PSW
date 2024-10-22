import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import logo from '../assets/logo.png';

export default function Contact() {
    const controlsForm = useAnimation();
    const controlsImage = useAnimation();
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
            controlsImage.start({
                opacity: 1,
                x: 0,
                transition: { duration: 0.8, type: "spring", bounce: 0.3, delay: 0.2 },
            });
        } else {
            controlsForm.start({ opacity: 0, x: -100 });
            controlsImage.start({ opacity: 0, x: 100 });
        }
    }, [inView, controlsForm, controlsImage]);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <motion.section id="contact" className="relative overflow-hidden" ref={ref}>
            <div className="relative z-10 flex flex-col md:flex-row justify-center items-center md:justify-between md:items-center gap-8 md:gap-0">
                {/* Formulario de contacto */}
                <motion.div initial={{ opacity: 0, x: -100 }} animate={controlsForm} className="w-full md:w-1/2 flex justify-center items-center">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6 justify-center items-center w-[90%] md:w-[500px] p-8">
                        <motion.div initial={{ opacity: 0, x: -100 }} animate={controlsForm} className="w-full text-start">
                            <h2 className="text-3xl font-semibold text-[#134B70] mb-2">
                                Contáctanos
                            </h2>
                            <p className="text-gray-500">
                                Completa el formulario y nos pondremos en contacto contigo.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 gap-4 w-full">
                            {/* Animación al hacer hover en los inputs */}
                            <motion.input required whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} placeholder="Nombre" type="text" className="py-3 px-4 border-2 col-span-2 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-lg" />
                            <motion.input required whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} placeholder="Apellido" type="text" className="py-3 px-4 border-2 col-span-2 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-lg" />
                            <motion.input required whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} placeholder="Correo" type="email" className="py-3 px-4 border-2 col-span-2 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-lg" />
                            <motion.input required whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} placeholder="Número" type="number" className="py-3 px-4 border-2 col-span-2 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-lg" />
                            <motion.textarea required whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} placeholder="Mensaje..." className="border-2 py-3 px-4 col-span-2 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-lg" />
                        </div>
                        <motion.button whileHover={{ scale: 1.1, backgroundColor: "#508C9B" }} transition={{ duration: 0.1 }} className="w-full py-3 rounded-lg text-white bg-[#134B70] hover:bg-[#508C9B] active:bg-[#0A3A4E] duration-500 ease-in-out">
                            Enviar
                        </motion.button>
                    </form>
                </motion.div>
                {/* Imagen animada */}
                <motion.div initial={{ opacity: 0, x: 100 }} animate={controlsImage} className="w-full md:w-1/2 overflow-hidden flex justify-center items-center">
                    <img className="rounded-xl h-full w-full object-cover" src="https://images.unsplash.com/photo-1574781330855-d0db8cc6a79c?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Background" />
                    <div className="absolute top-4 left-4 z-20">
                        <motion.img src={logo} className="h-16" alt="Logo" whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 1 }} />
                    </div>
                </motion.div>

            </div>
        </motion.section>
    );
}
