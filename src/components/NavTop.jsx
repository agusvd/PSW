import { BiWorld } from "react-icons/bi";
import logo from '../assets/logo2.png';
import { Link, useLocation } from "react-router-dom";
import { Button } from "../components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../components/ui/dropdown-menu";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useState } from "react";
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from "../components/ui/drawer"

export default function NavTop() {

    const { t, i18n } = useTranslation();
    const location = useLocation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const languages = [
        { code: "es", lang: t('español') },
        { code: "en", lang: t('ingles') }
    ];

    const tabs = [
        { id: '/', label: t('inicio') },
        { id: '/about', label: t('nosotros') },
        { id: '/contact', label: t('contacto') },
        { id: '/catalog', label: t('catalogo') }
    ];

    const [activeTab, setActiveTab] = useState(location.pathname);

    return (
        <div className="flex justify-center items-center h-24 font-primary p-2 gap-10 sm:mb-10">
            <div className="flex items-center justify-between md:mx-20 w-full">
                {/* Logo */}
                <div>
                    <Link to='/'><img src={logo} className="h-20" alt="Logo" /></Link>
                </div>
                {/* menu grande */}
                <div className="hidden sm:flex gap-4 font-primary">
                    <div className="flex space-x-1">
                        {tabs.map((tab) => (
                            <Link to={tab.id} key={tab.id}>
                                <button onClick={() => setActiveTab(tab.id)}
                                    className={`relative rounded-xl px-3 py-1.5 text-lg ${activeTab === tab.id ? "text-white" : "text-gray-500 hover:text-[#134B70]"} transition-all duration-300`}
                                    style={{ WebkitTapHighlightColor: "transparent" }}>
                                    {activeTab === tab.id && (
                                        <motion.span layoutId="bubble"
                                            className="absolute inset-0 z-10 bg-[#134B70] rounded-full"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} />
                                    )}
                                    <span className="relative z-20">{tab.label}</span>
                                </button>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    {/* Language */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button className="group bg-gray-200 hover:bg-[#134B70] border-none px-3 py-1 flex items-center gap-2 rounded transition-all duration-300 ease-in-out  text-black hover:text-white active:scale-95">
                                <span className="hidden sm:inline">{t('idioma')}</span>
                                <BiWorld className="text-black group-hover:text-white transition-all duration-300 ease-in-out " size={30} />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            {languages.map((lng) => (
                                <DropdownMenuItem
                                    className={`${lng.code === i18n.language ? "font-bold bg-gray-200" : ""}`}
                                    key={lng.code}
                                    onClick={() => changeLanguage(lng.code)}>
                                    {lng.lang}
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                    {/* Mobile Menu */}
                    <div className="sm:hidden">
                        <Drawer>
                            <DrawerTrigger asChild>
                                <Button className="bg-[#134B70] rounded text-xl">Menu</Button>
                            </DrawerTrigger>
                            <DrawerContent>
                                <DrawerHeader>
                                    <DrawerTitle className="text-2xl">Menu</DrawerTitle>
                                    <DrawerDescription>Patagonia South West Eirl</DrawerDescription>
                                </DrawerHeader>
                                <div className="flex justify-around pt-2 pb-2 items-center space-y-1">
                                    {tabs.map((tab) => (
                                        <Link to={tab.id} key={tab.id}>
                                            <button
                                                onClick={() => setActiveTab(tab.id)}
                                                className={`relative rounded px-3 py-1.5 text-md ${activeTab === tab.id ? "text-white" : "text-gray-500 hover:text-[#134B70]"
                                                    } transition-all duration-300`}
                                                style={{ WebkitTapHighlightColor: "transparent" }}
                                            >
                                                {activeTab === tab.id && (
                                                    <motion.span
                                                        layoutId="bubble"
                                                        className="absolute inset-0 z-10 bg-[#134B70] rounded text-lg"
                                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                                    />
                                                )}
                                                <span className="relative z-20">{tab.label}</span>
                                            </button>
                                        </Link>
                                    ))}
                                </div>
                                <DrawerHeader>
                                    <DrawerTitle className="text-xl">{t('idioma')}</DrawerTitle>
                                </DrawerHeader>
                                <div className="flex justify-center gap-4 items-center pt-2 pb-2">
                                    {languages.map((lng) => (
                                        <button className={`${lng.code === i18n.language ? "bg-[#134B70] text-white" : " text-gray-500"} text-lg rounded p-2`}
                                            key={lng.code}
                                            onClick={() => changeLanguage(lng.code)}
                                        >
                                            {lng.lang}
                                        </button>
                                    ))}
                                </div>
                            </DrawerContent>
                        </Drawer>
                    </div>
                </div>

            </div>
        </div>
    );
}
