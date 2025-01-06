import Image from "next/image";
import Link from "next/link";
import menu from "/public/menu.svg"

export default function Header() {
    return (
        <header>
            <nav className="h-13 md:my-5 md:mx-28 md:relative md:flex md:items-center justify-between md:rounded-full bg-white">
                <div className="flex items-center justify-between p-3">
                    <svg className="md:ml-8 md:w-8 md:h-8" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 2749.4 2828.4"><g id="Capa_2" data-name="Capa 2"><g id="Capa_1-2" data-name="Capa 1"><path fill="#ff0000" d="M2749.4,1374.4V1027.8a268.4,268.4,0,0,0-78.6-189.7L2520,687.4,2291.2,458.5l-.3-.3L1911.3,78.6A268.4,268.4,0,0,0,1721.6,0h-694A268.2,268.2,0,0,0,837.9,78.6L687.4,229,458.2,458.2l-229,229L78.6,837.9A268.2,268.2,0,0,0,0,1027.6v346.8l.2.3H0v916.1l.3.3H0v268.5c0,239,288.9,358.7,457.9,189.7h0l.3-.3h0l458-457.9.2-.3h.1V1374.7h-.3l.2-.3h.1l458-458,.2-.2.2.2,458,458,.2.3h-.2v916.1l.3.3,458,457.9.3.3h0c168.9,169,457.9,49.3,457.9-189.7V2291.1h-.3l.3-.3V1374.7" /></g></g></svg>
                    <Image className="md:hidden" src={menu} width={30} height={30} alt="menu"/>
                </div>
                <ul className="hidden md:flex gap-5 p-4 text-base tracking-widest text-black mr-4">
                    <li className="hover:text-[#ff0000]"><Link href="">Servicios</Link></li>
                    <li className="hover:text-[#ff0000]"><Link href="#portfolio">Portafolio</Link></li>
                    <li className="hover:text-[#ff0000]"><Link href="">Acerca de</Link></li>
                    <li className="hover:text-[#ff0000]"><Link href="">Contacto</Link></li>
                </ul>
            </nav>
        </header>
    )
}