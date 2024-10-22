
export default function Certifications() {
    const certifications = [
        { name: "ISO 9001", img: "../src/assets/iso9001.png", description: "Gestión de calidad" },
        { name: "HACCP", img: "../src/assets/haccp.png", description: "Control de peligros y puntos críticos" },
    ]

    return (
        <div className="py-12">
            <h2 className="text-4xl font-bold text-center mb-8 text-[#134B70]">Certificaciones</h2>
            <div className="flex flex-wrap justify-center gap-8">
                {certifications.map((cert, index) => (
                    <div
                        key={index}
                        className="relative group bg-white shadow-md rounded-lg p-6 w-64 hover:scale-105 hover:shadow-xl transition-transform duration-300"
                    >
                        <img
                            src={cert.img}
                            alt={`${cert.name} logo`}
                            className="h-16 mx-auto mb-4 group-hover:opacity-90 transition-opacity duration-300"
                        />
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">{cert.name}</h3>
                        <p className="text-sm text-gray-500">{cert.description}</p>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent  opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-lg pointer-events-none">
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}