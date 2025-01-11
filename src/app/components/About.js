import { Raleway } from "next/font/google";

export default function About() {
    return (
        <>
            <section id="about" className="bg-white h-96 text-black md:relative md:h-[28rem] md:mt-48">
                <div className="h-full flex flex-col items-center justify-around p-5 sm:p-9 md:w-2/5 md:ml-28 md:p-12 md:items-start">
                    <h2 className="font-semibold text-xl">¿Quiénes somos?</h2>
                    <p className={`text-center tracking-wide md:text-justify`}>
                        Somos un equipo dedicado a crear música de alta calidad. Nuestra meta es ayudar a artistas y proyectos a alcanzar su máximo potencial a través de servicios de producción, mezcla y mastering de instrumentales.
                        Con experiencia en la industria, nos comprometemos a mejorar con cada proyecto y a colaborar estrechamente contigo.
                    </p>
                    <button type="submit" className="bg-[#ff0000] text-white text-sm tracking-wide font-bold p-2 w-28 md:w-48">CONTACTAR</button>
                </div>
                <div className="clip hidden md:block"></div>
            </section>
        </>
    )
} 