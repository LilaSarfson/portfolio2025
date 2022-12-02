import { Link } from "react-router-dom"
export default function ListChoice (){
    return(
        <div className="flex flex-row justify-around w-full h-3/6 items-center text-3xl font-narko uppercase">
            <a href='#programacion'><p className="hover:animate-pulse">Developer <span className='hover:text-rojo'> ←</span></p></a>
            <p className="font-pompi font-bold border-dashed border-black border-2 p-2 normal-case">Every journy begins with a choice!</p>
            <a href='/history'> <p className="hover:animate-pulse"><span className='hover:text-rojo'>→ </span>Historian</p> </a>
        </div>
    )
}