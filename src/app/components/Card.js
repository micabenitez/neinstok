import Image from "next/image";

export default function Card() {
    
    return (
        <div className="flex flex-col justify-between border-2 border-black rounded-3xl w-44 h-72 p-3 m-5 bg-black">
            <div className="w-14 h-14 border-2 rounded-full bg-white"></div>
            <h3 >Produccion</h3>
        </div>
    )
}