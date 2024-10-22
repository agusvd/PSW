import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';
export default function ContactBanner() {
    return (
        <div className="bg-[#134B70] text-white flex flex-col justify-center items-center text-center h-screen">
            <h2 className="text-4xl font-bold mb-4">¿Interesado en nuestros productos?</h2>
            <p className="text-xl mb-6">Contacta con nosotros y descubre cómo podemos ayudarte a obtener los mejores productos del mar.</p>
            <Link to="/contact">
                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="bg-white text-[#134B70] px-6 py-3 rounded-lg font-bold shadow-lg">
                    Contáctanos
                </motion.button>
            </Link>
        </div>
    );
}