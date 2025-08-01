import Link from "next/link";
import PortfolioCard from "./PortfolioCard";
import '@fontsource/rubik-one';


function Portfolio({ ref }) {
    return ( 
        <section ref={ref} className="min-h-screen px-4 md:px-16 py-20 text-white text-center">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-5xl mb-4 font-rubikOne tracking-widest">Portafolio</h1>
                <p className="mt-5 text-lg text-gray-300">
                    Explora mis proyectos de producción musical y diseño sonoro
                </p>
                <div className="flex flex-col md:flex-row gap-6 justify-center mt-10 w-full">
                    <PortfolioCard 
                        imgSrc="/img/foto-skl.jpg"
                        title="SKLFRAN"
                        description="Grabación y Producción Vocal"
                    />
                    <PortfolioCard 
                        imgSrc="/img/portada-candela.jpg"
                        title="CANDELA"
                        description="Producción, Mezcla y Mastering"
                    />
                </div>
                <Link 
                    href="#" 
                    className="inline-block uppercase bg-[#ff0000] hover:bg-red-700 transition-colors duration-300 px-11 py-2 mt-16 rounded-md font-semibold"
                >
                    Ver mis trabajos
                </Link>
            </div>
        </section>
    );
}

export default Portfolio;