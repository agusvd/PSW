import react from 'react'
import { Link } from "react-router-dom";
import logo2 from '../assets/logo2.png'


const Footer = () => {
    return (
        <footer className="relative bg-[#EEEEEE] pt-5 pb-5">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap text-left lg:text-left">
                    <div className="w-full lg:w-6/12 px-4 flex flex-col gap-2">
                        <div>
                            <img src={logo2} className="h-32" />
                        </div>
                        <div className="mt-6 lg:mb-0 mb-6">

                        </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                        <div className="flex flex-wrap items-top mb-6">
                            <div className="w-full lg:w-4/12 px-4 ml-auto">
                                <span className="block uppercase text-black text-sm font-semibold mb-2">Menu</span>
                                <ul className="list-unstyled">
                                    <li>
                                        <Link to='/#inicio' className="text-black hover:text-blueGray-800 font-semibold block pb-2 text-sm">Inicio</Link>
                                    </li>
                                    <li>
                                        <Link to='/#nosotros' className="text-black hover:text-blueGray-800 font-semibold block pb-2 text-sm">Nosotros</Link>
                                    </li>
                                    <li>
                                        <Link to='/catalog' className="text-black hover:text-blueGray-800 font-semibold block pb-2 text-sm">Catalogo</Link>
                                    </li>
                                    <li>
                                        <Link to='/#contacto' className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">Contacto</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full lg:w-4/12 px-4">
                                <span className="block uppercase text-black text-sm font-semibold mb-2">Otros recursos</span>
                                <ul className="list-unstyled">
                                    <li>
                                        <a className="text-black hover:text-blue-100 font-semibold block pb-2 text-sm" href="https://creative-tim.com/terms?ref=njs-profile">Terminos &amp; Condiciones</a>
                                    </li>
                                    <li>
                                        <a className="text-black hover:text-blue-100 font-semibold block pb-2 text-sm" href="https://creative-tim.com/privacy?ref=njs-profile">Politicas de privacidad</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-6">
                    <div className="flex flex-wrap items-center md:justify-between justify-center">
                        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                            <div className="text-sm text-black font-semibold py-1 gap-2 flex justify-center">
                                Copyright ©
                                <span>2024</span>
                                <Link to="" className="text-blueGray-500 hover:text-gray-300" target="_blank">Agustin Villarroel</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

