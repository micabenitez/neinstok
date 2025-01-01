import { Raleway } from "next/font/google";
import Card from "./Card";
import posImg from "/public/posprod.svg"
import prodImg from "/public/prod.svg"
import adicionalesImg from "/public/adicionales.svg"
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';

export default function Services() {
    return (
        <>
            <section className={`bg-[#181918] h-full p-10 md:h-[38rem]`}>
                <div className="flex gap-6 flex-wrap items-center justify-center h-full md:justify-evenly ">
                    <Card color="white" text="Producción" textColor="black" srcImg={prodImg} />
                    <Card color="[#ff0000]" text="Posproducción" textColor="white" srcImg={posImg} />
                    <Card color="white" text="Adicionales" textColor="black" srcImg={adicionalesImg} />
                </div>

            </section>
        </>
    )
}