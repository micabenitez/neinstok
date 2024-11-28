import Image from "next/image";
import acustic from "/public/acustic.svg"
import waves from "/public/waves.svg"
import fabfilter from "/public/fabfilter.svg"
import arturia from "/public/arturia.svg"
import ik from "/public/ik.svg"
import Link from "next/link";

export default function Tools() {
    return (
        <section className="h-[45rem] bg-[#ff0000] flex flex-col justify-center items-center p-32 gap-20 mt-5">
            <div className="w-[50rem] flex items-center justify-evenly mt-7">
                <svg xmlns="http://www.w3.org/2000/svg" width="250" height="300" viewBox="0 0 2749.4 2828.4"><g id="Capa_2" data-name="Capa 2"><g id="Capa_1-2" data-name="Capa 1">
                    <path fill="#ffff" d="M2749.4,1374.4V1027.8a268.4,268.4,0,0,0-78.6-189.7L2520,687.4,2291.2,458.5l-.3-.3L1911.3,78.6A268.4,268.4,0,0,0,1721.6,0h-694A268.2,268.2,0,0,0,837.9,78.6L687.4,229,458.2,458.2l-229,229L78.6,837.9A268.2,268.2,0,0,0,0,1027.6v346.8l.2.3H0v916.1l.3.3H0v268.5c0,239,288.9,358.7,457.9,189.7h0l.3-.3h0l458-457.9.2-.3h.1V1374.7h-.3l.2-.3h.1l458-458,.2-.2.2.2,458,458,.2.3h-.2v916.1l.3.3,458,457.9.3.3h0c168.9,169,457.9,49.3,457.9-189.7V2291.1h-.3l.3-.3V1374.7" /></g></g></svg>
                <p className="text-white font-bold text-xl w-80">Nuestra pasión por la música y la tecnología se fusionan en cada proyecto que realizamos.</p>
            </div>
            <div className="">
                <ul className="flex gap-20 items-center">
                    <li><Link href="https://www.acustica-audio.com/" target="_blank"><Image src={acustic} width={85} height={85} alt="acustic"/></Link></li>
                    <li><Link href="https://www.waves.com/" target="_blank"><Image src={waves} width={85} height={85} alt="acustic"/></Link></li>
                    <li><Link href="https://www.fabfilter.com/" target="_blank"><Image src={fabfilter} width={60} height={60} alt="acustic"/></Link></li>
                    <li><Link href="https://www.arturia.com/"  target="_blank"><Image src={arturia} width={60} height={60} alt="acustic"/></Link></li>
                    <li><Link href="https://www.ikmultimedia.com/" target="_blank"><Image src={ik} width={60} height={60} alt="acustic"/></Link></li>                    
                </ul>
            </div>
        </section>
    )
}