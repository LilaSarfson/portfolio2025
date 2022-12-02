import { Link } from "react-router-dom"
export default function ListChoice (){
    return(
        <div className="flex flex-row justify-around w-full h-3/6 items-center text-3xl font-narko uppercase">
        <Link to='/developer'><p className=" hover:animate-pulse">Developer <span className='hover:text-rojo'> ←</span></p></Link>
        <p className="font-pompi font-bold border-solid border-rojo border-2 bg-white p-2">Every journy begins with a choice!</p>
           <Link to='/history'> <p className="hover:animate-pulse"><span className='hover:text-rojo'>→ </span>Historian</p> </Link>
        </div>
    )
}