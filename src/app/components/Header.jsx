function Header({ handleScrollToSection, navVisible }) {
    return ( 
        <nav className={`fixed top-0 left-0 w-full p-2 z-50 transition-transform duration-300 ${navVisible ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="container mx-auto flex justify-around items-center bg-red-500 rounded-full w-1/2 ">
                <div className="text-white text-lg font-bold p-1">
                    <svg width={36} height={36} className="inline-block align-middle">
                        <use href="/assets/sprite.svg#logo" />
                    </svg>
                </div>
                <div className="space-x-4">
                    <a href="/" className="text-gray-300 hover:text-white">Home</a>
                    <button onClick={() => handleScrollToSection('portfolio')}>Portfolio</button>
                    <button onClick={() => handleScrollToSection('services')}>Servicios</button>
                    <button onClick={() => handleScrollToSection('about')}>Acerca de</button>
                    <button onClick={() => handleScrollToSection('contact')}>Contacto</button>
                </div>
            </div>
        </nav>
    );
}

export default Header;