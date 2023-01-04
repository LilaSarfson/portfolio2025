export default function ListChoice (){
    return(
        <>
            <ul className="flex flex-row justify-around w-full 6 lg:h-4/6 items-center lg:text-xl font-mono">
                <li className="w-1/3 text-rojo text-end">Developing<span>⤸</span></li>
                <li className="font-mono uppercase lg:text-2xl text-center">Every journy begins with a choice!</li>
                <li className="w-1/3 text-rojo"><span>⤹</span>History</li>
            </ul>
        </>
    )
}



//    <a href='#programacion'><p className="hover:animate-pulse">Developer <span className='hover:text-rojo'> ←</span></p></a> 
//   <p className="font-pompi font-bold border-dashed border-black border-2 p-2 normal-case">Every journy begins with a choice!</p>
//   <p className="hover:animate-pulse"><span className="hover:text-verde">→</span>Historian</p>