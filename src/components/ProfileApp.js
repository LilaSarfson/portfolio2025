import perfil from '../assets/perfil1910.svg'
import '../style/utils.css'
export default function ProfileApp (){
    return(
        <div className='flex flex-col items-center mt-2.5'>
            <h1 className='text-5xl font-title uppercase'>Lila Sarfson</h1>
            <img className='w-8/12' src={perfil} />
        </div>
    )
}