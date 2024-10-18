import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function NavDock() {
    const [isHidden, setIsHidden] = useState(false);
    const { scrollY } = useScroll();
    const lastYRef = useRef(0);
    const location = useLocation();
    const { t } = useTranslation();

    useMotionValueEvent(scrollY, "change", (y) => {
        const difference = y - lastYRef.current;
        if (Math.abs(difference) > 50) {
            setIsHidden(difference > 0);
            lastYRef.current = y;
        }
    });

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);

    const menu = [
        { url: "/#home", label: t("inicio") },
        { url: "/#about", label: t("nosotros") },
        { url: "/contact", label: t("contacto") },
        { url: "/catalog", label: t("catalogo") },
    ];

    return (
        <motion.div animate={isHidden ? "visible" : "hidden"} whileHover="visible" onFocusCapture={() => setIsHidden(false)} variants={{ hidden: { y: "-100%", }, visible: { y: "0%", }, }} transition={{ duration: 0.3 }} className="fixed top-0 z-30 flex right-0 left-0 justify-center pt-1 pb-1">
            <div className="flex justify-around items-center px-4 py-2 rounded-xl gap-8 bg-[#134B70]/80 h-[50px] text-[#EEEEEE]  border-none">
                {menu.map((item) => (
                    <Link to={item.url} className="text-xl hover:text-[#134B70] duration-300 transition-all font-primary w-full text-nowrap">
                        {item.label}
                    </Link>
                ))}
            </div>
            <motion.div animate={isHidden ? "hidden" : "hidden"} className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-1 w-24 bg-gray-300 rounded-full"></motion.div>
        </motion.div>
    );
}
