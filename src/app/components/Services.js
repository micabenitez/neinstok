import { Raleway } from "next/font/google";
import Card from "./Card";
import posImg from "/public/posprod.svg"
import prodImg from "/public/prod.svg"
import adicionalesImg from "/public/adicionales.svg"

export default function Services() {
    return (
        <>
            <section className={`bg-[#181918] h-[38rem] p-10 flex flex-col gap-10`}>
                <div className="flex flex-wrap justify-evenly mt-24 items-center">
                    <Card color="white" text="Producción" textColor="black" srcImg={prodImg} />
                    <Card color="[#ff0000]" text="Posproducción" textColor="white" srcImg={posImg} />
                    <Card color="white" text="Adicionales" textColor="black" srcImg={adicionalesImg} />
                </div>
            </section>
        </>
    )
}