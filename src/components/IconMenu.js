import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
export default function IconMenu (){
    return(
        <div className='ml-20 w-full h-full fixed flex justify-end'>
            <div className=' flex flex-col w-4/12 h-4/6 items-center'>
                <div className='h-2/6 border-l-4 border-solid border-black'></div>  
                <ul className='flex flex-col border-solid border-4 rounded-md border-black gap-6 w-2/12 justify-around p-2'>
                        <li><a href='https://www.linkedin.com/in/lila-sarfson-4634251b6/' target='_blanck'><img className='md:w-10/12 lg:w-6/12 m-auto hover:invert' src={linkedin} alt='linkedin'/></a></li>
                        <li><a href='https://github.com/LilaSarfson' target='_blanck'><img className='md:w-10/12 lg:w-6/12 m-auto hover:invert' src={github} alt='github'/></a></li>
                </ul>
            </div>
        </div>
    )
}