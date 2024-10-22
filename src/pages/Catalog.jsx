
import ProductCard from "../components/ProductCard";
import { useTranslation } from "react-i18next";

export default function Catalog() {
    const { t } = useTranslation();
    const productos = [
        {
            id: 1,
            name: t('product1'),
            image: "https://www.subpesca.cl/portal/616/articles-811_foto.jpg",
            description: t('desc1'),
            url: 'centolla'
        },
        {
            id: 2,
            name: t('product2'),
            image: "https://www.subpesca.cl/portal/616/articles-812_foto.jpg",
            description: t('desc2'),
            url: 'centollon'
        },
        {
            id: 3,
            name: t('product3'),
            image: "https://cooperativa.cl/noticias/site/artic/20171015/imag/foto_0000000120171015094224.jpg",
            description: t('desc3'),
            url: 'erizos-de-mar'
        },
        {
            id: 4,
            name: t('product4'),
            image: "https://www.aqua.cl/wp-content/uploads/2022/02/Ostiones-2-Cr%C3%A9dito-Instituto-Milenio-SECOS-scaled.jpg",
            description: t('desc4'),
            url: 'ostion'
        },
        {
            id: 5,
            name: t('product5'),
            image: "https://www.subpesca.cl/portal/617/articles-94134_galeria_00.jpg",
            description: t('desc5'),
            url: 'huepo'
        },
        {
            id: 6,
            name: t('product6'),
            image: "https://www.emdepes.cl/wp-content/uploads/2017/12/congrioWeb.jpg",
            description: t('desc6'),
            url: 'congrio'
        },
        {
            id: 7,
            name: t('product7'),
            image: "https://puromar.cl/wp-content/uploads/2024/09/merluza-asustral-venta-pescados-mariscos-concepcion-chiguayante-talcahuano-san-pedro-puromar.jpg",
            description: t('desc7'),
            url: 'merluza-austral'
        }
    ];

    return (
        <section id="catalog" className="mx-4 p-6">
            <div className="pt-10 pb-10">
                <h1 className="text-6xl font-secondary font-bold text-[#134B70] pb-10 py-4 text-center">
                    {t('catalog1')}
                </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {productos.map((product, index) => (
                    <ProductCard
                        key={product.id}
                        name={product.name}
                        image={product.image}
                        description={product.description}
                        url={product.url}
                        className={index === 0 ? "xl:col-span-1" :
                            index === 1 ? "xl:col-span-1" :
                                index === 2 ? "xl:col-span-1" :
                                    index === 3 ? "xl:col-span-1" :
                                        index === 4 ? "xl:col-span-2" :
                                            index === 5 ? "xl:col-span-2 span" :
                                                "xl:col-span-1 md:col-span-2"}
                    />
                ))}
            </div>
        </section>
    );
}
