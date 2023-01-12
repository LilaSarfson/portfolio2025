
export default function ListChoice (){
    return(
        <>
            <ul className="flex flex-row justify-around w-full h-4/6 items-center text-2xl font-mono">
                <li className="w-1/3 text-rojo text-end hover:animate-pulse">Developing<span>⤸</span></li>
                <li className="uppercase xl:text-2xl text-center 2xl:text-4xl">Every journy begins with a choice!</li>
                <li className="w-1/3 text-rojo hover:animate-pulse"><a><span>⤹</span>History</a></li>
            </ul>
        </>
    )
}
