
export default function ListChoice (){
    return(
        <div className="flex flex-col w-full h-4/6 items-center text-lg sm:text-3xl font-mono gap-16">
            <h3 className="uppercase text-center text-xl sm:text-4xl">Every journy begins with a choice!</h3>
            <ul className="flex flex-col sm:flex-row justify-between w-full ">
                <li className="w-1/3 text-rojo text-end hover:animate-pulse">Developing<span>⤸</span></li>
                <li className="w-1/3 text-rojo hover:animate-pulse"><a><span>⤹</span>History</a></li>
            </ul>
        </div>
    )
}
