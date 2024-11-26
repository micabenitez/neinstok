import { Raleway } from "next/font/google";
import Card from "./Card";

const raleway = Raleway({
    weight: '500',
    subsets: ['latin'],
})

export default function Services() {
    return (
        <>
            <section className={`bg-[#181918] h-[28rem] p-10 flex flex-col gap-10 ${raleway.className} `}>
                <h2 className="text-center text-3xl">Servicios</h2>
                <div className="flex justify-evenly">
                    <Card color="white" text="Producción" textColor="black" borde="none" />
                    <Card color="#181918" text="Posproducción"   textColor="white" borde="white"/>
                    <Card color="white" text="Adicionales" textColor="black" borde="none" />
                </div>
            </section>
        </>
    )
}