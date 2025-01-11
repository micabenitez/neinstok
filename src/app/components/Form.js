export default function Form() {
    return (
        <section id="contacto" className="h-full md:h-[38rem] mb-0 w-full mx-0 relative bg-cover bg-fixed bg-no-repeat bg-[url('https://img.freepik.com/free-photo/electric-guitar-notepad-music-speaker-table-room-top-view_169016-52223.jpg?t=st=1734551016~exp=1734554616~hmac=bc739ff79904e3823ab5d03ad7ab8b3c92c5e6891421e4807ecf98f1d33cf583&w=740')]">
			<div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
            <form className="h-full text-sm w-full flex flex-col z-10 relative md:w-[40rem] gap-2 p-7 m-auto tracking-widest box-border justify-center">
                <h1 className="text-center text-3xl md:text-4xl font-semibold">Contacto</h1>
                <label className="mb-0">Nombre </label>
                <input className="rounded-xl mt-0 h-8 p-2" type="text" placeholder="Ingrese su nombre" />
                <label className="mt-1">Email </label>
                <input className="rounded-xl mt-0 h-8 p-2" type="email" placeholder="Email" />
                <label className="mt-1">Asunto</label>
                <input className="rounded-xl mt-0 h-8 p-2" type="text" placeholder="Asunto" />
                <label className="mt-1">Mensaje</label>
                <textarea className="rounded-xl mt-0 p-2" placeholder="Mensaje" rows={4}></textarea>
                <button className="border-none text-center w-full bg-black rounded-full p-2 outline-none mt-3" type="submit">Enviar</button>
            </form>
		</section>
    )
}