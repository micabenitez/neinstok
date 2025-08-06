function Footer() {
return (
    <footer className="text-white px-10 py-6">
        <div className="flex flex-row justify-between p-6">
            <div className="flex justify-center items-center">
                <svg width={64} height={64} className="">
                    <use href="/assets/sprite.svg#logo" />
                </svg>

                <svg width={56} height={56} className="">
                    <use href="/assets/sprite.svg#line" />
                </svg>
                <p className="text-left max-w-48 text-balance">
                    Tu música es importante. La tratamos con el respeto y la calidad que
                    merece.
                </p>
            </div>

            {/* Redes sociales y contacto */}
            <div className="flex flex-col items-start gap-3">
                <div className="flex flex-col items-start">
                    <p className="font-bold">Contacto</p>
                    <p className="text-lg">neinstok@gmail.com</p>
                </div>

                <div className="flex justify-center gap-4">
                    <svg width={28} height={28} className="bg-white p-1 rounded-full">
                        <use href="/assets/sprite.svg#spotify" />
                    </svg>
                    <svg
                        width={28}
                        height={28}
                        aria-hidden="true"
                        className="bg-white p-1 rounded-full"
                    >
                        <use href="/assets/sprite.svg#tiktok" />
                    </svg>
                    <svg
                        width={28}
                        height={28}
                        aria-hidden="true"
                        className="bg-white p-1 rounded-3xl"
                    >
                        <use href="/assets/sprite.svg#instagram" />
                    </svg>
                    <svg
                        width={28}
                        height={28}
                        aria-hidden="true"
                        className="bg-white p-1 rounded-full"
                    >
                        <use href="/assets/sprite.svg#soundcloud" />
                    </svg>
                    <svg
                        width={28}
                        height={28}
                        aria-hidden="true"
                        className="bg-white p-1 rounded-full"
                    >
                        <use href="/assets/sprite.svg#youtube" />
                    </svg>
                </div>
            </div>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between p-6 items-start md:items-center md:mt-4">
            <p>Developed by neinstok</p>
            <p className="">© 2025 neinstok - Todos los derechos reservados </p>
            <p>Términos y condiciones</p>
        </div>
    </footer>
);
}

export default Footer;
