import { Raleway } from "next/font/google";
import Card from "./Card";
import posImg from "/public/posprod.svg"
import prodImg from "/public/prod.svg"
import adicionalesImg from "/public/adicionales.svg"

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
                    <Card color="white" text="Producción" textColor="black" srcImg={prodImg} />
                    <Card color="#181918" text="Posproducción"   textColor="white" srcImg={posImg} />
                    <Card color="white" text="Adicionales" textColor="black" srcImg={adicionalesImg} />
                </div>
            </section>
        </>
    )
}