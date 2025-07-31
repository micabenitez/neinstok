function Card() {
    return (
        <div 
            className="w-64 h-80 rounded-4xl 
            bg-gradient-to-b from-[#111317] via-[#1d2128] 
            flex flex-col items-center justify-evenly p-6"
            >
                <div className="text-white text-xl font-bold flex flex-col items-center gap-3">
                   <svg width={72} height={72} className="bg-white p-1 rounded-full">
                        <use href="/assets/sprite.svg#spotify" />
                    </svg>
                    <p>Produccion</p>
                </div>
                <button className="bg-red-500 w-fit px-6 rounded-md text-white text-md font-bold">VER MÁS</button>
        </div>
    );
}

export default Card;