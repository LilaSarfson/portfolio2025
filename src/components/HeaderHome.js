import perfil from '../assets/perfil1910.svg'
import perfilDark from '../assets/yook2.svg'
import '../style/utils.css'
export default function HeaderHome (){
    return(
        <div className='text-center sm:text-center w-full font-pompi text-3xl sm:text-5xl 2xl:text-6xl'>
            <div className='flex flex-col sm:flex-row justify-center items-center sm:mt-0 sm:gap-12'>
                <div>
                    <h2 className='self-start'>Hi! my name is,</h2>
                    <h1 className='font-narko text-7xl sm:text-8xl 2xl:text-9xl uppercase'>Lila</h1>
                    <h1 className='font-narko text-7xl sm:text-8xl 2xl:text-9xl uppercase self-start'>Sarfson</h1>
                </div>
                <img className='w-5/12 dark:hidden xl:w-4/12 2xl:w-3/12' src={perfil} alt='perfil'/>
                <img className='hidden dark:block w-5/12 xl:w-4/12 2xl:w-3/12' src={perfilDark} alt='perfil' />

            </div>
            <div className='w-2/3 m-auto'>
                <p>and I'm a big fan of 
                <span className="underline decoration-rojo "> creating things with code.</span></p>
            </div>
         </div>
    )
}