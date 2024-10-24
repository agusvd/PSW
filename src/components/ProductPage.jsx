import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import NavTop from '../components/NavTop';
import Footer from '../pages/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "../components/ui/carousel"

const ProductPage = ({ idName, productName, scientificName, productDescription, howItsObtained, plantProcesses, exportMarkets, benefits, imageGallery }) => {
    return (
        <section id={idName} className='font-primary'>
            <NavTop />
            <div className='z-50 fixed bottom-0 right-0 p-4'>
                <Link to='/'>
                    Volver
                </Link>
            </div>
            {/* Header */}
            <section className="container mx-auto p-6 mt-10 text-center">
                <h1 className="text-5xl font-bold text-[#134B70]">{productName}</h1>
                <p className="text-xl text-gray-500 italic mb-4">{scientificName}</p>
                <p className="text-gray-600 text-lg mt-4">{productDescription}</p>
            </section>

            {/* How it's Obtained */}
            <section className="container mx-auto p-6 mt-10">
                <Card className="p-6">
                    <CardHeader>
                        <CardTitle className="text-3xl font-bold text-[#134B70] mb-4">¿Cómo se obtiene?</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-600 text-lg">{howItsObtained}</p>
                    </CardContent>
                </Card>
            </section>

            {/* Plant Processes */}
            <section className="container mx-auto p-6 mt-10">
                <Card className="p-6">
                    <CardHeader>
                        <CardTitle className="text-3xl font-bold text-[#134B70] mb-4">Procesos en Planta</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="list-disc pl-6 text-gray-600 text-lg">
                            {plantProcesses.map((process, index) => (
                                <li key={index}><strong>{process.title}:</strong> {process.description}</li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            </section>

            {/* Export Markets */}
            <section className="container mx-auto p-6 mt-10">
                <Card className="p-6">
                    <CardHeader>
                        <CardTitle className="text-3xl font-bold text-[#134B70] mb-4">Exportación</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-600 text-lg mb-4">{exportMarkets}</p>
                        <Badge className="bg-green-600 text-white">Trazabilidad Certificada</Badge>

                        {/* Tooltip Usage */}
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <Badge className="bg-[#134B70] text-white ml-2 cursor-pointer">Mercados Internacionales</Badge>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Mercados disponibles: EE.UU., UE, Asia</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </CardContent>
                </Card>
            </section>

            {/* Benefits */}
            <section className="container mx-auto p-6 mt-10">
                <h2 className="text-3xl font-bold text-[#134B70] text-center mb-6">Beneficios</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            className="bg-white shadow-md rounded-lg p-6 text-center"
                            whileHover={{ scale: 1.05 }}
                        >
                            <img src={benefit.icon} alt={benefit.title} className="w-16 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-[#134B70]">{benefit.title}</h3>
                            <p className="text-gray-600 text-lg">{benefit.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Image Gallery */}
            <section className="container mx-auto p-6 mt-10">
                <Carousel className="w-full max-w-sm">
                    <CarouselContent className="-ml-1">
                        {imageGallery.map((image, index) => (
                            <CarouselItem key={index} className="b">
                                <div className="p-1">
                                    <Card>
                                        <CardContent className="flex aspect-square items-center justify-center p-6">
                                            <img
                                                src={image}
                                                alt={`Imagen ${index + 1}`}
                                                className="object-cover w-full h-full rounded-md"
                                            />
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </section>

            <Footer />
        </section>
    );
};

export default ProductPage;
