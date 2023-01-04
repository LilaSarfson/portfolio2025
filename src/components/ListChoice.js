export default function ListChoice (){
    return(
        <>
            <ul className="flex flex-row justify-around w-full 6 lg:h-4/6 items-center lg:text-4xl font-pompi">
                <li className="w-1/3">Developing<span>⤸</span></li>
                <li className="font-narko uppercase lg:text-5xl text-center">Every journy begins with a choice!</li>
                <li className="w-1/3 hover:text-rojo"><span>⤹</span>History</li>
            </ul>
        </>
    )
}



//    <a href='#programacion'><p className="hover:animate-pulse">Developer <span className='hover:text-rojo'> ←</span></p></a> 
//   <p className="font-pompi font-bold border-dashed border-black border-2 p-2 normal-case">Every journy begins with a choice!</p>
//   <p className="hover:animate-pulse"><span className="hover:text-verde">→</span>Historian</p>