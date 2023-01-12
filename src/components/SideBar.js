import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import home from '../assets/up-arrow.png'
export default function SideBar (){
    return(
        <div className='hidden md:w-1/12 xl:w-2/6 h-full right-0 fixed md:flex flex-col'>
            <div className='w-full h-full flex flex-col justify-center items-end'>   
                <ul className='flex flex-col gap-6 md:w-6/12 xl:w-1/12 2xl:w-3/12 h-2/6 items-end'>
                        <li className='2xl:w-4/6'><a href='https://www.linkedin.com/in/lila-sarfson-4634251b6/' target='_blanck'>
                            <img className='xl:w-12/12 2xl:w-4/12 m-auto hover:invert' src={linkedin} alt='linkedin'/></a></li>
                        <li className='2xl:w-4/6'><a href='https://github.com/LilaSarfson' target='_blanck'>
                            <img className='xl:w-12/12 2xl:w-4/12 m-auto hover:invert' src={github} alt='github'/></a></li>
                        <li className='2xl:w-4/6'><a href='/'>
                            <img className='xl:w-12/12 2xl:w-4/12 m-auto hover:invert' src={home} alt='home'/></a></li>   
                </ul> 
            </div>      
        </div>
    )
}