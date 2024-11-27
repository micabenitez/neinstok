import { Raleway } from "next/font/google";

export default function About() {
    return (
        <>
            <section className="bg-white h-[28rem] text-black relative mt-48">
                <div className="p-12 mx-10">
                    <div className={`flex flex-col ml-20 gap-6 w-2/5 p-5`}>
                        <h2 className="font-semibold text-xl">¿Quiénes somos?</h2>
                        <p className={`text-justify`}>
                            Somos un equipo dedicado a crear música de alta calidad. Nuestra meta es ayudar a artistas y proyectos a alcanzar su máximo potencial a través de servicios de producción, mezcla y mastering de instrumentales.
                            Con experiencia en la industria, nos comprometemos a mejorar con cada proyecto y a colaborar estrechamente contigo.
                        </p>
                        <button type="submit" className="bg-[#ff0000] text-white font-bold p-2 w-48">CONTACTAR</button>
                    </div>
                </div>
                <div className="clip"></div>
            </section>
        </>
    )
} 