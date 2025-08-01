import Shape from "./Shape";
import { rubik, poppins } from "../fonts";
import '@fontsource/rubik-one';
 
function About({ ref }) {
    return ( 
        <section ref={ref} className={`min-h-screen flex items-center justify-center ${poppins.variable} ${rubik.variable}`}>
            <div className="flex flex-col md:flex-row items-center justify-center">
                <div className="w-full md:w-3/6 flex justify-center">
                    <Shape />
                </div>
                <div className="w-full md:w-1/2 text-white p-4 flex flex-col items-start text-center tracking-wider">
                    <h1 className="text-3xl tracking-wide my-3 font-rubikOne">¿Quién soy?</h1>
                    <p className="max-w-lg font-raleway font-medium text-left text-md">Me llamo Nicolas, alias "Neinstok", Productor musical y especialista en mezcla y mastering. Desde 2021, me dedico a construir canciones desde cero hasta su lanzamiento, asegurando un sonido profesional y competitivo. Mi misión es transformar tu visión en una producción de alta calidad, lista para competir con los éxitos del momento.</p>
                    <button className="bg-[#ff0000] px-6 py-1 rounded-xl w-fit mt-5 font-poppins font-bold uppercase text-sm">Más sobre mí</button>
                </div>
            </div>
        </section>
    );
}

export default About;