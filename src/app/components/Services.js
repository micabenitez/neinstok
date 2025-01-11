import Card from "./Card";
import posImg from "/public/posprod.svg"
import prodImg from "/public/prod.svg"
import adicionalesImg from "/public/adicionales.svg"

const textProd = ["Composición y arreglos", "Grabación en estudio","Sesiones de preproduccion"]
const textPosProd = ["Edición y cuantización", "Mezcla", "Masterización"]
const textAdic = ["Producción de jingles", "Asesoramiento técnico para locutores", "Consultoría musical"]

export default function Services() {
    return (
        <>
            <section id="services" className={`bg-[#181918] h-full px-6 py-10 sm:p-10 md:h-[38rem]`}>
                <div className="flex gap-6 flex-wrap items-center justify-center h-full md:justify-evenly ">
                    <Card color="white" text="Producción" textColor="black" srcImg={prodImg} services={textProd}/>
                    <Card color="[#ff0000]" text="Posproducción" textColor="white" srcImg={posImg} services={textPosProd}/>
                    <Card color="white" text="Adicionales" textColor="black" srcImg={adicionalesImg} services={textAdic}/>
                </div>
            </section>
        </>
    )
}