import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function ProductCard({ name, image, description, url, className }) {
    const { t } = useTranslation();
    return (
        <Link to={`/${url}`} className={`${className} group relative block shadow-md rounded-md`}>
            <div className="relative h-[350px] sm:h-[450px]">
                <img
                    src={image}
                    alt={name}
                    className="absolute inset-0 h-full w-full object-cover rounded-md duration-300 transition-all ease-in-out"
                />
                
            </div>

            <div className="absolute inset-0 flex flex-col items-start justify-end p-6 bg-black/30 backdrop-blur-none group-hover:backdrop-blur-sm duration-300 transition-all ease-in-out">
                <h3 className="text-2xl font-primary text-white">{name}</h3>

                <p className="mt-1.5 text-pretty text-xs text-white">
                    {description}
                </p>

                <span
                    className="mt-3 inline-block bg-[#134B70] rounded-md font-primary px-5 py-3 text-xs font-medium  tracking-wide text-white "
                >
                    {t('buttoncatalog')}
                </span>
            </div>
        </Link>
    )
}