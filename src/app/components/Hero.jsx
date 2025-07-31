import Header from "./Header";

function Hero() {
    return ( 
        <div className="relative text-white min-h-screen">
            <Header />
            <div className="absolute inset-0 bg-blue-100"/>
            <div className="absolute inset-0 bg-black opacity-50 " />

            <div className="relative z-10 flex flex-col items-center justify-center py-40 h-full">
                <h1 className="text-8xl font-bold mb-4">neinstok</h1>
                <p className="text-lg mb-4">Tu sonido, único. El proceso, simple.</p>
                <button className="bg-red-500 px-8 py-1 text-md font-bold rounded-lg hover:bg-red-600 transition-colors">
                    VER MÁS   
                </button>
            </div>

        </div>
    );
}

export default Hero;