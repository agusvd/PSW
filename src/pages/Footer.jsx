import React from 'react';
import { Link } from "react-router-dom";
import logo2 from '../assets/logo2.png';

const Footer = () => {
    return (
        <footer className="bg-[#EEEEEE] pt-5 pb-5">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between">
                    {/* Logo Section */}
                    <div className="w-full lg:w-6/12 flex flex-col items-center lg:items-start mb-6 lg:mb-0">
                        <img src={logo2} className="h-24 lg:h-32" alt="Logo" />
                    </div>

                    {/* Menu Section */}
                    <div className="w-full lg:w-6/12 flex flex-col lg:flex-row justify-around">
                        <div className="mb-6 lg:mb-0">
                            <span className="block uppercase text-black text-sm font-semibold mb-4">Menu</span>
                            <ul className="list-none">
                                <li>
                                    <Link to='/#inicio' className="text-black hover:text-gray-700 font-semibold block pb-2 text-sm">Inicio</Link>
                                </li>
                                <li>
                                    <Link to='/#nosotros' className="text-black hover:text-gray-700 font-semibold block pb-2 text-sm">Nosotros</Link>
                                </li>
                                <li>
                                    <Link to='/catalog' className="text-black hover:text-gray-700 font-semibold block pb-2 text-sm">Catálogo</Link>
                                </li>
                                <li>
                                    <Link to='/#contacto' className="text-black hover:text-gray-700 font-semibold block pb-2 text-sm">Contacto</Link>
                                </li>
                            </ul>
                        </div>

                        {/* Additional Resources */}
                        <div>
                            <span className="block uppercase text-black text-sm font-semibold mb-4">Otros recursos</span>
                            <ul className="list-none">
                                <li>
                                    <a href="https://creative-tim.com/terms?ref=njs-profile" className="text-black hover:text-gray-700 font-semibold block pb-2 text-sm">Términos &amp; Condiciones</a>
                                </li>
                                <li>
                                    <a href="https://creative-tim.com/privacy?ref=njs-profile" className="text-black hover:text-gray-700 font-semibold block pb-2 text-sm">Políticas de Privacidad</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom Section */}
                <div className="border-t border-gray-300 mt-6 pt-4">
                    <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between">
                        <div className="text-sm text-black font-semibold text-center lg:text-left">
                            &copy; 2024
                            <Link to="/" className="text-blue-500 hover:text-blue-300 ml-1">Agustin Villarroel</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
