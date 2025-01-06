import Image from "next/image";
import img from "../s2.webp"

export default function Gallery() {
    return (
        <div className="hidden md:w-full md:h-[33rem] md:gap-8 md:flex md:flex-shrink-0 md:overflow-hidden">
            <div className="flex gap-8 items-center flex-shrink-0 w-full h-full animate-loopScroll">
                <Image src={img} alt="" className="bg-orange-500 w-[40rem] h-[33rem]"/>
                <Image src={img} alt="" className="bg-orange-500 w-[40rem] h-[33rem]"/>
                <Image src={img} alt="" className="bg-orange-500 w-[40rem] h-[33rem]"/>

            </div>
            <div className="flex gap-8 items-center flex-shrink-0 w-full h-full animate-loopScroll">
                <Image src={img} alt="" className="bg-orange-500 w-[40rem] h-[33rem] "/>
                <Image src={img} alt="" className="bg-orange-500 w-[40rem] h-[33rem] "/>
                <Image src={img} alt="" className="bg-orange-500 w-[40rem] h-[33rem]"/>               
            </div>
        </div>
    )
}