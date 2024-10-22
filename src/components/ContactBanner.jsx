import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

export default function ContactBanner() {
    const { t } = useTranslation();
    return (
        <div className="bg-[#134B70] text-white flex flex-col justify-center items-center text-center h-screen">
            <h2 className="text-4xl font-bold mb-4">{t('contactb1')}</h2>
            <p className="text-xl mb-6">{t('contactb2')}.</p>
            <Link to="/contact">
                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="bg-white text-[#134B70] px-6 py-3 rounded-lg font-bold shadow-lg text-nowrap">
                    {t('contactb3')}
                </motion.button>
            </Link>
        </div>
    );
}