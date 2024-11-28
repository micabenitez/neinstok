import Image from "next/image";
import logo from "/public/logo.svg"
import ig from  "/public/instagram.svg"
import youtube from "/public/youtube.svg"
import tiktok from "/public/tiktok.svg"
import spotify from "/public/spotify.svg"
import scloud from "/public/scloud.svg"
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="h-80 flex flex-col justify-center bg-white p-40 gap-5">
            <div className="flex justify-between">
                <div className="flex gap-14">
                    <Image src={logo} width={90} height={90} alt="logo" />
                    <p className="text-black w-[25rem] p-6 border-l-4 border-l-black">Conocemos la relevancia que tiene para ti que tu proyecto sea de la más alta profesionalidad.</p>
                </div>
                <div className="text-black flex flex-col gap-2">
                    <p className="font-bold">Contacto</p>
                    <p>neinstok.contact@gmail.com</p>
                    <ul className="flex justify-evenly gap-3">
                        <li><Link href="https://www.instagram.com/neinstok/" target="_blank"><Image src={ig} width={30} height={30} alt="logo"/></Link></li>
                        <li><Link href="https://www.youtube.com/@neinstok" target="_blank"><Image src={youtube} width={30} height={30} alt="logo"/></Link></li>
                        <li><Link href="https://www.tiktok.com/@neinstok" target="_blank"><Image src={tiktok} width={30} height={30} alt="logo"/></Link></li>
                        <li><Link href="https://open.spotify.com/user/31hibu64e2pexrgbibvtrippjpii" target="_blank"><Image src={spotify} width={30} height={30} alt="logo"/></Link></li>
                        <li><Link href="https://soundcloud.com/nicolas-benitez-384743529" target="_blank"><Image src={scloud} width={30} height={30} alt="logo"/></Link></li>                        
                    </ul>
                </div>
            </div>
            <div>
                <ul className="flex justify-between tracking-wide">
                    <li><p className="text-center mt-10 text-black">Developed by mica</p></li>
                    <li><p className="text-center mt-10 text-black">© 2024 neinstok - Todos los derechos reservados.</p></li>
                    <li><Link href="#" ><p className="text-center mt-10 text-black">Términos y condiciones</p></Link></li>
                </ul>
            </div>
        </footer>
    )
}
