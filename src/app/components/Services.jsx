import ServicesCard from "./ServicesCard";
import { ProduccionIcon, MasteringIcon, MezclaIcon } from "../../../public/icons";
import '@fontsource/rubik-one';

function Services({ ref }) {
    return ( 
        <section ref={ref} className="min-h-screen py-20">
            <h1 className="text-white text-center text-5xl font-rubikOne tracking-widest">Servicios</h1>
            <p className="text-center text-white mt-5">Soluciones de audio para tu proyecto</p>
            <div className="flex flex-wrap justify-center gap-10 py-16 px-4">
                <ServicesCard icon={ProduccionIcon} title={"Producción"} />               
                <ServicesCard icon={MezclaIcon} title={"Mezcla"} />               
                <ServicesCard icon={MasteringIcon} title={"Mastering"} />               
            </div>
        </section>
    );
}

export default Services;