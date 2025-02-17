import Est from '../assets/Est-03.svg'
import Flor from '../assets/flor-02.svg'
import Moon from '../assets/moon-04.svg'
import CV from '../assets/PDFs/CV.pdf'
export default function FooterApp (){
    return(
        <div className='backdrop-blur-sm mb-0 fixed bottom-0 flex flex-col justify-center w-full h-2/12'>
            <ul className='font-pompi flex self-center w-full md:w-1/3 justify-around flex-row text-md xl 2xl:text-2xl font-bold  mb-8'>
                <a href='#about'><li className='flex flex-row items-center justify-center'><img className='h-6 w-6 hover:rotate-180' src={Est} alt='Estrella'/><p className='hover:underline decoration-lila'>About me.</p></li></a>

                <a href={CV} target='_blanck'><li className='flex flex-row items-center justify-center'><img className='h-6 w-6 hover:rotate-180' src={Flor} alt='Flor'/><p className='hover:underline decoration-rojo'>Watch Cv.</p></li></a>

                <a href='#contact'><li className='flex flex-row items-center justify-center'><img className='h-6 w-6 hover:rotate-180' src={Moon} alt='Luna'/><p className='hover:underline decoration-verde'>Contact.</p></li></a>
            </ul>
        </div>    
    )
}

