import Image from "next/image";
import acustic from "/public/acustic.svg"
import waves from "/public/waves.svg"
import fabfilter from "/public/fabfilter.svg"
import arturia from "/public/arturia.svg"
import ik from "/public/ik.svg"
import Link from "next/link";

export default function Tools() {
    return (
        <section className="h-full bg-[#ff0000] gap-2 p-7 flex flex-col justify-center items-center md:h-[40rem] md:p-32 md:gap-20 md:mt-5">
            <div className="flex items-center justify-center gap-6 h-40 md:w-[50rem] md:justify-evenly md:mt-7">
                <svg className="w-28 h-32 md:w-52 md:h-72" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2749.4 2828.4"><g id="Capa_2" data-name="Capa 2"><g id="Capa_1-2" data-name="Capa 1">
                    <path fill="#ffff" d="M2749.4,1374.4V1027.8a268.4,268.4,0,0,0-78.6-189.7L2520,687.4,2291.2,458.5l-.3-.3L1911.3,78.6A268.4,268.4,0,0,0,1721.6,0h-694A268.2,268.2,0,0,0,837.9,78.6L687.4,229,458.2,458.2l-229,229L78.6,837.9A268.2,268.2,0,0,0,0,1027.6v346.8l.2.3H0v916.1l.3.3H0v268.5c0,239,288.9,358.7,457.9,189.7h0l.3-.3h0l458-457.9.2-.3h.1V1374.7h-.3l.2-.3h.1l458-458,.2-.2.2.2,458,458,.2.3h-.2v916.1l.3.3,458,457.9.3.3h0c168.9,169,457.9,49.3,457.9-189.7V2291.1h-.3l.3-.3V1374.7" /></g></g></svg>
                <p className="text-white tracking-wide font-bold w-56 md:text-xl md:w-80">Nuestra pasión por la música y la tecnología se fusionan en cada proyecto que realizamos.</p>
            </div>
            <div className="w-full h-full">
                <ul className="flex items-center justify-between md:justify-evenly md:p-2 md:gap-20">
                    <li><Link href="https://www.acustica-audio.com/" target="_blank"><Image className="w-fit h-14 md:w-28 md:h-24" src={acustic} alt="acustic"/></Link></li>
                    <li><Link href="https://www.waves.com/" target="_blank"><Image className="w-fit h-14 md:w-28 md:h-24" src={waves} alt="acustic"/></Link></li>
                    <li><Link href="https://www.fabfilter.com/" target="_blank"><Image className="w-fit h-14 md:w-28 md:h-24" src={fabfilter} alt="acustic"/></Link></li>
                    <li><Link href="https://www.arturia.com/"  target="_blank"><Image className="w-14 h-14 md:w-28 md:h-24" src={arturia} alt="acustic"/></Link></li>
                    <li><Link href="https://www.ikmultimedia.com/" target="_blank"><Image className="w-14 h-14 md:w-28 md:h-24" src={ik} alt="acustic"/></Link></li>                    
                </ul>
            </div>
        </section>
    )
}