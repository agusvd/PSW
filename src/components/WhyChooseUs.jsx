export default function WhyChooseUs() {
    const features = [
        "Productos certificados internacionalmente",
        "Relaciones directas con industrias pesqueras",
        "Experiencia en grandes transacciones comerciales",
        "Cumplimos con los más altos estándares de calidad",
        "Enfocados en la sostenibilidad",
        "Con más de 15 años de experiencia",
    ];

    return (
        <div className="font-primary py-12">
            <h2 className="text-4xl font-bold text-[#134B70] text-center mb-6">¿Por qué elegirnos?</h2>
            <div className="flex justify-center gap-8 flex-wrap">
                {features.map((feature, index) => (
                    <div key={index}
                        className="relative shadow-md rounded-lg p-6 w-64 hover:scale-105 hover:shadow-xl transition-transform duration-300">
                        {feature}
                    </div>
                ))}
            </div>
        </div>
    );
}
