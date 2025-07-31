import Card from "./Card";

function Portfolio({ ref }) {
    return ( 
        <section ref={ref}>
            <h1 className="text-white text-center text-4xl">Portfolio</h1>
            <p className="text-center text-white mt-5">Explora mis proyectos de producción musical y diseño sonoro.</p>
            <div className="flex justify-center gap-20 mt-6">
                <Card />
                <Card />
            </div>
        </section>
    );
}

export default Portfolio;