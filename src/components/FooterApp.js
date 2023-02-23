import Est from '../assets/Est-03.svg'
import Flor from '../assets/flor-02.svg'
import Moon from '../assets/moon-04.svg'
import CV from '../assets/PDFs/CV.pdf'
export default function FooterApp (){
    return(
            <ul className='font-pompi backdrop-blur-sm mb-0 flex self-center w-full justify-center flex-row fixed bottom-0 text-md xl 2xl:text-2xl'>
                <a href={CV} target='_blanck'><li className='flex flex-row items-center justify-center'><img className='w-2/12 hover:rotate-180' src={Est} alt='Estrella'/><p className='hover:underline decoration-lila'>Watch Cv.</p></li></a>

                <a href='#about'><li className='flex flex-row items-center justify-center'><img className='w-2/12 hover:rotate-180' src={Flor} alt='Flor'/><p className='hover:underline decoration-rojo'>About me.</p></li></a>

                <a href='#contact'><li className='flex flex-row items-center justify-center'><img className='w-2/12  hover:rotate-180' src={Moon} alt='Luna'/><p className='hover:underline decoration-verde'>Contact.</p></li></a>
            </ul>
            
    )
}

