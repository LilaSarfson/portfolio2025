export default function ListChoice (){
    return(
        <>
            <ul className="flex flex-row justify-around w-full lg:h-4/6 items-center xl:text-xl 2xl:text-2xl font-mono">
                <li className="w-1/3 text-rojo text-end hover:animate-pulse">Developing<span>⤸</span></li>
                <li className="uppercase xl:text-2xl text-center 2xl:text-4xl">Every journy begins with a choice!</li>
                <li className="w-1/3 text-rojo hover:animate-pulse"><span>⤹</span>History</li>
            </ul>
        </>
    )
}
