import { Link } from "react-router-dom"
export default function ListChoice (){
    return(
        <div className="flex flex-row justify-around w-4/6 h-3/6 items-center text-3xl font-fredo uppercase">
        <Link to='/developer'><p className=" hover:animate-pulse">Developer <span className='hover:text-rojo font-pompi'> ←</span></p></Link>
        <p className="font-pompi font-bold underline decoration-rojo">Every journy begins with a choice!</p>
           <Link to='/history'> <p className="hover:animate-pulse"><span className='hover:text-rojo font-pompi'>→ </span>Historian</p> </Link>
        </div>
    )
}