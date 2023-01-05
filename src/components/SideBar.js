import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
export default function SideBar (){
    return(
        <div className='w-2/6 h-full right-0 fixed flex flex-col'>
            <div className='w-full h-full flex flex-col justify-center items-end'>   
                <ul className='flex flex-col gap-6 xl:w-3/12 2xl:w-3/12 justify-around items-end'>
                        <li className='2xl:w-4/6'><a href='https://www.linkedin.com/in/lila-sarfson-4634251b6/' target='_blanck'>
                            <img className='lg:w-12/12 xl:w-4/12 m-auto hover:invert' src={linkedin} alt='linkedin'/></a></li>
                        <li className='2xl:w-4/6'><a href='https://github.com/LilaSarfson' target='_blanck'><img className='lg:w-12/12 xl:w-4/12 m-auto hover:invert' src={github} alt='github'/></a></li>
                </ul> 
            </div>      
        </div>
    )
}