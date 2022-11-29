import Est from '../assets/Est-03.svg'
import Flor from '../assets/flor-02.svg'
import Moon from '../assets/moon-04.svg'
export default function MenuApp (props, {setActiveCV}){
    return(
            <ul className={`font-pompi font-bold flex ${props.direction} mb-8 self-center`}>
                <li onClick={()=>{props.setActiveCV(true)}} className={`flex ${props.directionLi} items-center justify-center`}><img className='w-2/12 hover:rotate-180' src={Est} alt='Estrella'/><p className='hover:underline decoration-lila'>Watch Cv.</p></li>
                <li className={`flex ${props.directionLi} items-center justify-center`}><img className='w-2/12 hover:rotate-180' src={Flor} alt='Flor'/><p className='hover:underline decoration-rojo'>About me.</p></li>
                <li className={`flex ${props.directionLi} items-center justify-center`}><img className='w-2/12 hover:rotate-180' src={Moon} alt='Luna'/><p className='hover:underline decoration-verde'>Contact.</p></li>
            </ul>
    )
}