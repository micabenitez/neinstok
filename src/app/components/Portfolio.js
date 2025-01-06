import Gallery from "./Gallery";

export default function Portfolio() {
    return (
        <section id="portfolio" className="md:relative bg-white h-[44rem] text-black md:h-[40-rem]">
            <div className="bg-[#f4f4f4] z-10 h-full p-8 sm:p-12 flex gap-5 flex-col justify-around md:p-14 md:w-[35rem] md:h-[50rem] md:absolute md:-top-12 md:left-[7rem] md:gap-6">
                <div className="flex flex-col gap-3 sm:gap-6 items-center md:items-start">
                    <h2 className="my-3 text-5xl tracking-wider sm:text-6xl sm:tracking-wide md:text-8xl md:-ml-1">Portafolio</h2>
                    <p className="tracking-wide text-justify md:w-[28rem]">En <span className="text-[#ff0000] font-bold">neinstok</span>, creemos en el poder de la innovación para impulsar el crecimiento de nuestros clientes.</p>
                    <p className="tracking-wide text-justify sm:tracking-wide md:text-justify md:w-[28rem]">Nuestro portafolio es un testimonio de nuestra capacidad para desarrollar soluciones personalizadas y efectivas.
                        Explora nuestros proyectos y descubre cómo hemos ayudado a transformar ideas en resultados de alta calidad</p>
                    <button type="submit" className="bg-black mt-3 text-white text-sm w-[6rem] font-bold sm:w-[8rem] p-2 md:w-[10rem]">VER MÁS</button>
                </div>
                <div className="relative pb-[56.25%] h-0 overflow-hidden py-7">
                    <iframe className="absolute top-0 left-0 w-full h-full py-4" src="https://www.youtube.com/embed/0Ub09ZX2Qws?si=_upcBwELnMGuK0yb" title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            </div>

            <div className="hidden md:absolute md:w-full md:h-[40rem] md:flex md:items-center">
                <Gallery />
                {/* <div className="relative flex w-full bg-black -z-0 animate-loopScroll "> 
                    <div key={3} className="bg-orange-400 w-[40rem] h-[35rem] top-0 triangle absolute"></div>
                    <div key={1} className="bg-red-500 w-[40rem] h-[35rem] left-[21rem] triangle-reverse absolute"></div>
                    <div key={2} className="bg-orange-400 w-[40rem] h-[35rem] left-[42rem] triangle absolute"></div>
                    <div key={6} className="bg-red-500 w-[40rem] h-[35rem] -left-[21rem] triangle-reverse absolute"></div>
                    <div key={4} className="bg-orange-400 w-[40rem] h-[35rem] -left-[42rem] triangle absolute"></div>
                </div>
                <div className="relative flex w-full bg-black -z-0 animate-loopScroll">
                    <div key={8} className="bg-red-500 w-[40rem] h-[35rem] left-[24rem] triangle-reverse absolute"></div>
                    <div key={7} className="bg-orange-400 w-[40rem] h-[35rem] left-[84rem] top-0 triangle absolute"></div>
                    <div key={10} className="bg-red-500 w-[40rem] h-[35rem] left-[105rem] triangle-reverse absolute"></div>
                    <div key={9} className="bg-orange-400 w-[40rem] h-[35rem] left-[126rem] triangle absolute"></div>
                    <div key={11} className="bg-red-500 w-[40rem] h-[35rem] left-[147rem] triangle-reverse absolute"></div>
                </div> */}
            </div>
        </section>
    )
} 