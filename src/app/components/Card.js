export default function Card({ color, text }) {
    return (
        <div className={`w-72 h-64 rounded-3xl bg-${color}`}>
            <h3 className="text-black">{text}</h3>
        </div>
    )
}