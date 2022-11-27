import Est from '../assets/Est-03.svg'
import Flor from '../assets/flor-02.svg'
import Moon from '../assets/moon-04.svg'
export default function MenuApp (props, {setActive, setActiveCV}){
    return(
            <ul className={`font-poke flex ${props.direction} mb-8 self-center`}>
                <li onClick={()=>{props.setActiveCV(true); props.setActive(false)}} className={`flex ${props.directionLi} items-center`}><p>CV</p><img className='w-2/12 hover:rotate-180' src={Est} alt='Estrella'/></li>
                <li onClick={()=>{props.setActive(true); props.setActiveCV(false)}} className={`flex ${props.directionLi} items-center`}><p>About me</p><img className='w-2/12 hover:rotate-180' src={Flor} alt='Flor'/></li>
                <li className={`flex ${props.directionLi} items-center`}><p>Quien sabe</p><img className='w-2/12 hover:rotate-180' src={Moon} alt='Luna'/></li>
            </ul>
    )
}