import Image from "next/image";
import img from "../s2.webp"

export default function Gallery() {
    return (
        <div className="w-full h-[33rem] gap-8 flex flex-shrink-0 overflow-hidden">
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