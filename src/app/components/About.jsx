function About({ ref }) {
    return ( 
        <section ref={ref} className="w-full p-6 mt-6">
            <div className="flex justify-center gap-6 ">
                <div className="w-96 h-96 bg-amber-400"></div>
                <div className="text-white flex flex-col text-left p-6">
                    <h1 className="text-3xl font-bold my-6">¿Quién soy?</h1>
                    <p className="w-[500px]">Me llamo Nicolas, alias “Neinstok”, Productor musical y especialista en mezcla y mastering. Desde 2021, me dedico a construir canciones desde cero hasta su lanzamiento, asegurando un sonido profesional y competitivo. Mi misión es transformar tu visión en una producción de alta calidad, lista para competir con los éxitos del momento.</p>
                    <button className="bg-red-500 px-6 py-1 rounded-xl w-fit mt-4">MAS SOBRE MI</button>
                </div>
            </div>
        </section>
    );
}

export default About;