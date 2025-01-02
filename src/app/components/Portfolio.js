export default function Portfolio() {
    return (
        <section id="portfolio" className="md:relative bg-white h-[44rem] text-black md:h-[40-rem]">
            <div className="bg-[#f4f4f4] p-12 flex gap-5 flex-col justify-around md:p-16 md:w-[36rem] md:h-[49rem] md:absolute md:-top-12 md:left-[7rem] md:gap-6">
                <div className="flex flex-col gap-6 items-center md:items-start">
                    <h2 className="text-6xl tracking-wide md:text-8xl md:-ml-1">Portafolio</h2>
                    <p className="text-justify tracking-wider md:text-justify md:w-[28rem]">En <span className="text-[#ff0000] font-bold">neinstok</span>, creemos en el poder de la innovación para impulsar el crecimiento de nuestros clientes.</p>
                    <p className="text-justify tracking-wide md:text-justify md:w-[28rem]">Nuestro portafolio es un testimonio de nuestra capacidad para desarrollar soluciones personalizadas y efectivas.
                        Explora nuestros proyectos y descubre cómo hemos ayudado a transformar ideas en resultados de alta calidad</p>
                    <button type="submit" className="bg-black text-white font-bold w-[8rem] p-2 md:w-[10rem]">VER MÁS</button>
                </div>
                <div className="relative pb-[56.25%] h-0 overflow-hidden py-7">
                    <iframe className="absolute top-0 left-0 w-full h-full py-4" src="https://www.youtube.com/embed/0Ub09ZX2Qws?si=_upcBwELnMGuK0yb" title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            </div>
        </section>
    )
} 