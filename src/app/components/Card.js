import Image from "next/image";
import prodImg from "/public/posprod.svg"

export default function Card({ color, text, textColor, srcImg }) {
    return (
        <div className={`w-72 h-64 rounded-[50px] bg-${color} flex flex-col items-center justify-center gap-6  shadow-[-30px_30px_80px_#0a0a0a,30px_-30px_80px_#262826]`}>
            <Image src={srcImg} width={50} height={50} alt="logo" />
            <h3 className={`text-${textColor} font-bold text-2xl text-center`}>{text}</h3>
        </div>
    ) 
}
