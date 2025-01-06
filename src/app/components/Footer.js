import Image from "next/image";
import logo from "/public/logo.svg"
import ig from "/public/instagram.svg"
import youtube from "/public/youtube.svg"
import tiktok from "/public/tiktok.svg"
import spotify from "/public/spotify.svg"
import scloud from "/public/scloud.svg"
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="h-full flex flex-col justify-center gap-5 px-2 py-6 sm:p-6 bg-white md:h-80 md:p-40 md:gap-5">
            <div className="flex flex-col justify-around md:flex-row md:justify-between">
                <div className="hidden md:flex md:gap-14">
                    <Image src={logo} width={90} height={90} alt="logo" />
                    <p className="text-black w-[25rem] p-6 border-l-4 border-l-black">Conocemos la relevancia que tiene para ti que tu proyecto sea de la más alta profesionalidad.</p>
                </div>
                <div className="text-black flex flex-col-reverse sm:justify-around md:flex-col gap-4 sm:gap-2 md:items-start">
                    <div className="flex md:flex-col justify-center gap-1"> 
                        <h3 className="hidden md:block"><strong>Contacto</strong></h3>
                        <p>neinstok.contact@gmail.com</p>
                    </div>

                    <div className="self-center">
                        <ul className="flex md:justify-evenly gap-3 md:gap-4">
                            <li><Link href="https://www.instagram.com/neinstok/" target="_blank"><Image src={ig} width={30} height={30} alt="logo" /></Link></li>
                            <li><Link href="https://www.youtube.com/@neinstok" target="_blank"><Image src={youtube} width={30} height={30} alt="logo" /></Link></li>
                            <li><Link href="https://www.tiktok.com/@neinstok" target="_blank"><Image src={tiktok} width={30} height={30} alt="logo" /></Link></li>
                            <li><Link href="https://open.spotify.com/user/31hibu64e2pexrgbibvtrippjpii" target="_blank"><Image src={spotify} width={30} height={30} alt="logo" /></Link></li>
                            <li><Link href="https://soundcloud.com/nicolas-benitez-384743529" target="_blank"><Image src={scloud} width={30} height={30} alt="logo" /></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <ul className="flex flex-col sm:tracking-wide gap-1 md:flex-row md:justify-between">
                    <li><Link href="#" ><p className="text-center md:mt-10 text-black">Términos y condiciones</p></Link></li>
                    <li><p className=" text-center text-black md:mt-10">Developed by Micaela Benitez</p></li>
                    <li><p className="text-center text-black md:mt-10"> neinstok ©2025. Todos los derechos reservados.</p></li>
                </ul>
            </div>
        </footer>
    )
}
