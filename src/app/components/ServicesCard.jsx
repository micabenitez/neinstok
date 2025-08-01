import Link from "next/link";

function ServicesCard({ icon: Icon, title }) {
    return (
        <article className="bg-gradient-to-b from-[#111317] to-[#1d2128]
         text-white rounded-3xl p-6 w-full max-w-72 text-center shadow-md min-h-96"
        >
           <div className="flex flex-col items-center justify-evenly h-full gap-6">
                <div className="flex flex-col items-center gap-4 py-4">
                    {Icon && <Icon />}
                    <h2 className="text-2xl font-semibold tracking-wider">{title}</h2>
                </div>

                <Link
                    href="#"
                    className="bg-[#ff0000] w-fit px-10 py-1 rounded-md text-white text-sm font-bold"
                >
                    VER MÁS
                </Link>
            </div>
        </article>
    );
}

export default ServicesCard;