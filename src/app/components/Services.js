import Card from "./Card";

export default function Services() {
    return (
        <>
            <section className="bg-black p-10">
                <h2 className="text-center text-3xl">Servicios</h2>
                <div className="flex justify-evenly">
                    <Card color="white" text="Producción" />
                    <Card color="white" text="Posproducción" />
                    <Card color="white" text="Adicionales" />
                </div>
            </section>
        </>
    )
}