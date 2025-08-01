import { Rubik } from "next/font/google";
import Header from "./Header";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ['700'],
});


function Hero() {
    const VIDEO_SRC = "../video.mp4";
    
    return ( 
        <section className="relative text-white min-h-screen">
            <Header />
            
            {/* Background video container */}
            <div className="absolute inset-0 w-full h-full"> 
                <video 
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                    src={VIDEO_SRC}
                    className="h-full w-full object-cover"
                    aria-hidden="true"
                />
            </div>
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
                <h1 className={`text-6xl md:text-8xl font-bold mb-4 text-center ${rubik.className} tracking-wider `}>
                    neinstok
                </h1>
                <p className="text-base md:text-lg mb-6 text-center font-raleway">
                    Tu sonido, único. El proceso, simple.
                </p>
                <button 
                    className="bg-red-500 px-8 py-2 text-md font-bold rounded-lg 
                             hover:bg-red-600 transition-colors duration-300"
                    aria-label="Ver más información"
                >
                    VER MÁS   
                </button>
            </div>
        </section>
    );
}

export default Hero;