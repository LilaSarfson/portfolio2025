import Est from '../assets/Est-03.svg'
import Flor from '../assets/flor-02.svg'
import Moon from '../assets/moon-04.svg'
export default function MenuApp (props){
    return(
            <ul className={`font-pompi bg-amarillo mb-0 font-bold flex ${props.direction} fixed bottom-0 left-40  self-center`}>
                <li className={`flex ${props.directionLi} items-center justify-center`}><img className='w-2/12 hover:rotate-180' src={Est} alt='Estrella'/><p className='hover:underline decoration-lila'>Watch Cv.</p></li>

                <a href='#about'><li className={`flex ${props.directionLi} items-center justify-center`}><img className='w-2/12 hover:rotate-180' src={Flor} alt='Flor'/><p className='hover:underline decoration-rojo'>About me.</p></li></a>

                <a href='#contact'><li className={`flex ${props.directionLi} items-center justify-center`}><img className='w-2/12 hover:rotate-180' src={Moon} alt='Luna'/><p className='hover:underline decoration-verde'>Contact.</p></li></a>
            </ul>
    )
}