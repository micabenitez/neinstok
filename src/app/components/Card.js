export default function Card({ color, text, textColor, borde }) {
    return (
        <div className={`w-72 h-64 rounded-[50px] bg-${color} flex flex-col items-center justify-center gap-6  shadow-[-30px_30px_80px_#0a0a0a,30px_-30px_80px_#262826]`}>
            <div className="w-8 h-8 bg-red-400 rounded-full"></div>
            <h3 className={`text-${textColor} font-bold text-2xl text-center`}>{text}</h3>
        </div>
    )
}
