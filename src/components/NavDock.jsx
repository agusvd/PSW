import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Dock, DockIcon } from "./ui/dock";

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
        <motion.div animate={isHidden ? "hidden" : "visible"} whileHover="visible" onFocusCapture={() => setIsHidden(false)} variants={{ hidden: { y: "85%", }, visible: { y: "0%", }, }} transition={{ duration: 0.3 }} className="fixed bottom-0 z-30 flex right-0 left-0 justify-center pt-1 pb-1">
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 h-1 w-24 bg-gray-300 rounded-full"></div>
            <TooltipProvider>
                <Dock direction="middle" className="gap-8 bg-[#134B70]/60 text-[#EEEEEE] *:transition-colors *:duration-300 border-none ">
                    {menu.map((item) => (
                        <DockIcon key={item.label} className="hover:*:text-[#134B70]">
                            <Link to={item.url} className="">
                                {item.label}
                            </Link>
                        </DockIcon>
                    ))}
                </Dock>
            </TooltipProvider>
        </motion.div>
    );
}
