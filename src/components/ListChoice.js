export default function ListChoice (){
    return(
        <>
            <ul className="flex flex-row justify-around w-full lg:h-4/6 items-center xl:text-xl 2xl:text-2xl font-mono">
                <li className="w-1/3 text-rojo text-end">Developing<span>⤸</span></li>
                <li className="font-mono uppercase xl:text-2xl text-center 2xl:text-4xl">Every journy begins with a choice!</li>
                <li className="w-1/3 text-rojo"><span>⤹</span>History</li>
            </ul>
        </>
    )
}



//    <a href='#programacion'><p className="hover:animate-pulse">Developer <span className='hover:text-rojo'> ←</span></p></a> 
//   <p className="font-pompi font-bold border-dashed border-black border-2 p-2 normal-case">Every journy begins with a choice!</p>
//   <p className="hover:animate-pulse"><span className="hover:text-verde">→</span>Historian</p>