import Est from '../assets/Est-03.svg'
import Flor from '../assets/flor-02.svg'
import Moon from '../assets/moon-04.svg'
import CV from '../assets/LilaCV.pdf'
export default function FooterApp (props){
    return(
        //blur o amarillo el bg ?
            <ul className={`font-pompi backdrop-blur-sm mb-0 font-bold flex self-center w-full justify-center ${props.direction} fixed bottom-0 xl:text-2xl 2xl:text-3xl`}>
                <a href={CV} target='_blanck'><li className={`flex ${props.directionLi} items-center justify-center`}><img className='xl:w-1/12 2xl:w-2/12 hover:rotate-180' src={Est} alt='Estrella'/><p className='hover:underline decoration-lila'>Watch Cv.</p></li></a>

                <a href='#about'><li className={`flex ${props.directionLi} items-center justify-center`}><img className='xl:w-1/12 2xl:w-2/12 hover:rotate-180' src={Flor} alt='Flor'/><p className='hover:underline decoration-rojo'>About me.</p></li></a>

                <a href='#contact'><li className={`flex ${props.directionLi} items-center justify-center`}><img className='xl:w-1/12 2xl:w-2/12  hover:rotate-180' src={Moon} alt='Luna'/><p className='hover:underline decoration-verde'>Contact.</p></li></a>
            </ul>
            
    )
}