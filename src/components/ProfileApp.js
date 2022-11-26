import perfil from '../assets/perfil1910.svg'
import { Link } from "react-router-dom"
import '../style/utils.css'
export default function ProfileApp (){
    return(
        <div className='flex flex-col items-center'>
            <h1 className='text-6xl font-title uppercase text-center'>Lila Sarfson</h1>
           <Link to='/'><img className='w-10/12 m-auto' src={perfil} /></Link>
        </div>
    )
}