export default function ListChoice (){
    return(
        <>
            <ul className="flex flex-row justify-around w-full md:h-3/6 lg:h-4/6 items-center md:text-3xl lg:text-5xl font-pompi">
                <li><span>»</span>Developing</li>
                <li className="font-narko uppercase ">Every journy begins with a choice!</li>
                <li><p className="w-1/3 hover:text-rojo">History<span>«</span></p></li>
            </ul>
        </>
    )
}



//    <a href='#programacion'><p className="hover:animate-pulse">Developer <span className='hover:text-rojo'> ←</span></p></a> 
//   <p className="font-pompi font-bold border-dashed border-black border-2 p-2 normal-case">Every journy begins with a choice!</p>
//   <p className="hover:animate-pulse"><span className="hover:text-verde">→</span>Historian</p>