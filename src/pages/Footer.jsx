import React from 'react';
import { Link } from "react-router-dom";
import logo2 from '../assets/logo2.png';
import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation()
    const tabs = [
        { id: '/', label: t('inicio') },
        { id: '/about', label: t('nosotros') },
        { id: '/contact', label: t('contacto') },
        { id: '/catalog', label: t('catalogo') }
    ];
    return (
        <footer className="bg-gradient-to-b from-white to-[#eeeeee] pt-8 pb-6 font-primary">
            <div className="container mx-auto px-4">
                {/* Logo y Menú: Ordenados verticalmente en móvil */}
                <div className="flex flex-col md:flex-row justify-between items-center lg:items-start gap-8 mb-6">
                    {/* Logo */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                        <img src={logo2} className="h-24 lg:h-32 mx-auto lg:mx-0" alt="Logo" />
                    </div>

                    {/* Menús */}
                    <div className="flex flex-col lg:flex-row justify-around items-center lg:items-start gap-8">
                        {/* Menú Principal */}
                        <div>
                            <h3 className="uppercase text-[#134B70] text-sm font-semibold mb-4">Menú</h3>
                            <ul className="list-none space-y-2">
                                {tabs.map((tab) => (
                                    <li key={tab.id}>
                                        <Link to={tab.id} className="text-black hover:text-[#134B70] font-semibold block text-sm">
                                            {tab.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Sección Inferior */}
                <div className="border-t border-gray-300 mt-6 pt-4">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                        <p className="text-sm text-black font-semibold text-center">
                            &copy; 2024
                            <Link to="/" className="text-[#134B70] hover:text-white ml-1">
                                Agustin Villarroel
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
