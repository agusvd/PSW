import { BiWorld } from "react-icons/bi";
import logo from '../assets/logo2.png'
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslation } from "react-i18next";

export default function NavTop() {
    const languages = [
        { code: "es", lang: "Spanish" },
        { code: "en", lang: "English" }
    ]
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
        console.log('click')
    }

    const { t, i18n } = useTranslation();
    const location = useLocation();
    return (
        <div className="bg-white flex justify-center items-center h-24 font-primary px-8 py-10 gap-10 mb-10">
            <div className="flex items-center justify-start w-full">
                <div className="">
                    <Link to='/'><img src={logo} className="h-20" /></Link>
                </div>
            </div>
            <div className="hidden sm:visible sm:flex gap-4 font-primary">
                <Link to='/#home' className={`${location.pathname.includes('/') && location.hash.includes('#home') ? 'font-semibold text-[#134B70]' : 'text-black'} hover:text-[#134B70] transition-all duration-300 text-lg text-nowrap`}>
                    {t('inicio')}
                </Link>
                <Link to='/#about' className={`${location.hash.includes('#about') ? 'font-semibold text-[#134B70]' : 'text-black'}  hover:text-[#134B70] transition-all duration-300 text-lg text-nowrap `}>
                    {t('nosotros')}
                </Link>
                <Link to='/contact' className={`${location.pathname.includes('/contact') ? 'font-semibold text-[#134B70]' : 'text-black'}  hover:text-[#134B70] transition-all duration-300 text-lg text-nowrap`}>
                    {t('contacto')}
                </Link>
                <Link to='/catalog' className={`${location.pathname.includes('/catalog') ? 'font-semibold text-[#134B70]' : 'text-black'} hover:text-[#134B70] transition-all duration-300 text-lg text-nowrap`}>
                    {t('catalogo')}
                </Link>
            </div>


            <div className="flex justify-end gap-5 items-center w-full">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button className="hover:bg-black border-none px-3 py-1 flex items-center gap-2 rounded transition-all bg-[#134B70] text-white active:scale-95 font-primary">
                            {t('idioma')}<BiWorld size={30} />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        {languages.map((lng) => (
                            <DropdownMenuItem
                                className={`${lng.code === i18n.language ? "font-bold bg-gray-200" : ""
                                    }`}
                                key={lng.code}
                                onClick={() => changeLanguage(lng.code)}
                            >
                                {lng.lang}
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
}
