import { Link } from "react-router-dom"
export default function ListChoice (){
    return(
        <div className="flex flex-row justify-around h-3/6 items-center text-3xl">
        <Link to='/developer'><p className="font-poke hover:animate-pulse"><span className='hover:text-rojo'>>></span>Developer</p></Link>
           <Link to='/history'> <p className="font-poke hover:animate-pulse"><span className='hover:text-rojo'>>></span>Historian</p> </Link>
        </div>
    )
}