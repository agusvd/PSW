
import ProductCard from "../components/ProductCard";
// Datos de ejemplo para los productos
const productos = [
    {
        id: 1,
        name: "Centolla",
        image: "https://www.subpesca.cl/portal/616/articles-811_foto.jpg",
        description: "Centolla de Magallanes, famosa por su carne suave y jugosa, ideal para quienes buscan un sabor de mar auténtico y exclusivo.",
        url: 'centolla'
    },
    {
        id: 2,
        name: "Centollón",
        image: "https://www.subpesca.cl/portal/616/articles-812_foto.jpg",
        description: "El centollón, un crustáceo robusto y delicioso, es perfecto para preparar platos elegantes y de alta cocina.",
        url: 'centollon'
    },
    {
        id: 3,
        name: "Erizo de mar",
        image: "https://cooperativa.cl/noticias/site/artic/20171015/imag/foto_0000000120171015094224.jpg",
        description: "El erizo de mar, con su intenso sabor a mar, es un manjar muy apreciado en la gastronomía internacional, especialmente en la asiática.",
        url: 'centolla'
    },
    {
        id: 4,
        name: "Ostión del Sur",
        image: "https://www.aqua.cl/wp-content/uploads/2022/02/Ostiones-2-Cr%C3%A9dito-Instituto-Milenio-SECOS-scaled.jpg",
        description: "Ostión del sur, un molusco delicado con una textura suave y un sabor sutil, ideal para disfrutar en su versión más fresca o en preparaciones gourmet.",
        url: 'ostion'
    },
    {
        id: 5,
        name: "Huepo",
        image: "https://www.subpesca.cl/portal/617/articles-94134_galeria_00.jpg",
        description: "El huepo es una especie única de las costas chilenas, conocida por su carne firme y su sabor distintivo, perfecto para platos regionales.",
        url: 'centolla'
    },
    {
        id: 6,
        name: "Congrio",
        image: "https://www.emdepes.cl/wp-content/uploads/2017/12/congrioWeb.jpg",
        description: "El congrio, un pescado de carne blanca y delicada, es uno de los preferidos en la cocina chilena para sopas y guisos marinos.",
        url: 'centolla'
    },
    {
        id: 7,
        name: "Merluza Austral",
        image: "https://puromar.cl/wp-content/uploads/2024/09/merluza-asustral-venta-pescados-mariscos-concepcion-chiguayante-talcahuano-san-pedro-puromar.jpg",
        description: "La merluza austral, conocida por su versatilidad y carne magra, es ideal tanto para preparaciones sencillas como para platos más elaborados.",
        url: 'merluza-austral'
    }
];


export default function Catalog() {
    return (
        <section id="catalog" className="mx-4 p-6">
            <div className="pt-10 pb-10">
                <h1 className="text-6xl font-secondary font-bold text-[#134B70] pb-10 py-4 text-center">
                    Catalogo
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
