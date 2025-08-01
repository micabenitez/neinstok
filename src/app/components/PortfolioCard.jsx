import Image from "next/image";

function PortfolioCard({ imgSrc, title, description }) {
    return ( 
        <article 
            className="bg-gradient-to-b from-[#111317] to-[#1d2128] 
            text-white p-4 md:p-4 rounded-4xl font-bold text-center
            w-full max-w-xs md:max-w-sm mx-auto">
            <div className="flex flex-col items-center p-4">
                <figure className="w-full p-4">
                    <Image 
                        src={imgSrc}
                        alt="Portada de SKLFRAN"
                        width={400}
                        height={250}
                        className="rounded-2xl object-cover aspect-square mb-3"
                    />
                </figure>
                <h1 className="text-xl md:text-xl mb-4">{title}</h1>
                <p className="text-sm md:text-base text-gray-300">{description}</p>
            </div>
        </article>
    );
}

export default PortfolioCard;