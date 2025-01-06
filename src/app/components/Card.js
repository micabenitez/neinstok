import Image from "next/image";

export default function Card({ color, text, textColor, srcImg, services }) {
    return (
        <>
            <div className={`relative group overflow-hidden w-72 h-72 sm:w-80 sm:h-80 md:w-80 md:h-96 rounded-[25px] bg-${color} flex flex-col items-center justify-center gap-6 md:shadow-[-30px_30px_80px_#0a0a0a,30px_-30px_80px_#262826]`}>
                <Image src={srcImg} width={50} height={50} alt="logo" />
                <h3 className={`text-${textColor} font-bold text-2xl text-center`}>{text}</h3>
                
                <div className={`absolute group-hover:-translate-y-full transition-transform duration-700 ease-in-out -bottom-full w-72 h-72 sm:w-80 sm:h-80 md:w-80 md:h-96 rounded-[25px] bg-${color} md:p-8`}>
                    <div className="h-full flex flex-col justify-between">
                        <Image src={srcImg} width={70} height={50} alt="logo" />
                        <div className=" md:flex flex-col justify-end">
                            <h3 className={`text-${textColor} font-bold text-2xl`}>{text}</h3>
                            <ul className="list-disc p-4">
                                {
                                    services.map((service, index) => (
                                        <li className={`hover:text-${textColor} hover:cursor-default text-${textColor} key=${index}`}>{service}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
