import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import Marquee from "./ui/marquee";
import { useTranslation } from "react-i18next";

// Productos
const reviews = [
    {
        id: 1,
        name: "Centolla",
        image: "https://www.subpesca.cl/portal/616/articles-811_foto.jpg",
        url: 'centolla'
    },
    {
        id: 2,
        name: "Centollón",
        image: "https://www.subpesca.cl/portal/616/articles-812_foto.jpg",
        url: 'centolla'
    },
    {
        id: 3,
        name: "Erizo de mar",
        image: "https://cooperativa.cl/noticias/site/artic/20171015/imag/foto_0000000120171015094224.jpg",
        url: 'centolla'
    },
    {
        id: 4,
        name: "Ostión del Sur",
        image: "https://www.aqua.cl/wp-content/uploads/2022/02/Ostiones-2-Cr%C3%A9dito-Instituto-Milenio-SECOS-scaled.jpg",
        url: 'centolla'
    },
    {
        id: 5,
        name: "Huepo",
        image: "https://www.subpesca.cl/portal/617/articles-94134_galeria_00.jpg",
        url: 'centolla'
    },
    {
        id: 6,
        name: "Congrio",
        image: "https://www.emdepes.cl/wp-content/uploads/2017/12/congrioWeb.jpg",
        url: 'centolla'
    },
    {
        id: 7,
        name: "Merluza Austral",
        image: "https://puromar.cl/wp-content/uploads/2024/09/merluza-asustral-venta-pescados-mariscos-concepcion-chiguayante-talcahuano-san-pedro-puromar.jpg",
        url: 'centolla'
    }
];

// Función para mezclar los elementos del array de forma aleatoria
const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
};

// Mezcla los productos de forma aleatoria antes de asignarlos a las filas
const firstRow = shuffleArray(reviews.slice());
const secondRow = shuffleArray(reviews.slice());

const ReviewCard = ({
    url,
    image,
    name,
}) => {
    return (
        <Link to={url} className={cn("relative h-44 w-64 cursor-pointer overflow-hidden rounded-xl group")}>
            <div className="flex h-44 w-64">
                <div className="inset-0 hover:bg-black/50 absolute h-full w-full rounded-xl bg-black/30 backdrop-blur-none hover:backdrop-blur-sm">
                    <h3 className="font-primary text-white fixed p-2">{name}</h3>
                </div>
                <img className="rounded-xl h-full w-full" src={image} />
            </div>
        </Link>
    );
};

export default function HeroStart() {
    const { t, i18n } = useTranslation();

    return (
        <section id="home" className="flex flex-col gap-2 justify-center items-center pb-10">
            <div className="flex flex-col items-center justify-center gap-4 mx-6 sm:mx-0">
                <h3 className="text-3xl text-center md:text-6xl text-[#134B70] font-primary sm:mx-10 md:mx-[60px] lg:mx-[80px] xl:mx-[100px] 2xl:mx-[200px] md:pb-16 lg:pb-24">
                    {t('hero1')}
                </h3>
            </div>
            <div className="w-screen">
                <div className="relative flex flex-col items-center justify-center overflow-hidden">
                    <Marquee pauseOnHover className="[--duration:30s]">
                        {firstRow.map((review) => (
                            <ReviewCard key={review.id} {...review} />
                        ))}
                    </Marquee>
                    <Marquee reverse pauseOnHover className="[--duration:30s]">
                        {secondRow.map((review) => (
                            <ReviewCard key={review.id} {...review} />
                        ))}
                    </Marquee>
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/12 bg-gradient-to-r from-[#EEEEEE]"></div>
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/12 bg-gradient-to-l from-[#EEEEEE]"></div>
                </div>
            </div>
        </section>
    );
};
