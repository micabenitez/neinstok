export default function Portfolio() {
    return (
        <section className="relative bg-white h-[40rem] text-black">
            <div className="h-[47rem] w-[36rem] bg-[#f4f4f4] absolute -top-12 left-[7rem] p-16 flex flex-col justify-around">
                <div className="flex flex-col gap-6 p-1">
                    <h2 className="text-center text-8xl tracking-wide -ml-1">Portafolio</h2>
                    <p className="text-justify tracking-wider w-[28rem]">En <span className="text-[#ff0000] font-bold">neinstok</span>, creemos en el poder de la innovación para impulsar el crecimiento de nuestros clientes.
                        Nuestro portafolio es un testimonio de nuestra capacidad para desarrollar soluciones personalizadas y efectivas.
                        Explora nuestros proyectos y descubre cómo hemos ayudado a transformar ideas en resultados de alta calidad</p>
                    <button type="submit" className="bg-black text-white font-bold w-[10rem] p-2">VER MÁS</button>
                </div>
                <div className="py-8 ml-1">
                    <iframe width="450" height="250" src="https://www.youtube.com/embed/0Ub09ZX2Qws?si=_upcBwELnMGuK0yb" title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
        </section>
    )
} 