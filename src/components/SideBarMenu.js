import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import home from '../assets/up-arrow.png'
export default function SideBarMenu (props) {
    return(

        <div className={`${props.estado} z-10 flex flex-col fixed right-0 items-center h-full`}>
            {/* El menu perse */}
                <div class="ml-6 flex w-16 flex-col items-center h-full">
                  <div className='bg-black h-full w-0.5'></div>

                    <div class="border-2 border-solid border-black">
                        <ul>
                            <li class="p-5">
                            <a href='https://www.linkedin.com/in/lila-sarfson-4634251b6/' target='_blanck'>
                                        <img className='h-6 w-6 cursor-pointer text-gray-500 transition-all hover:invert' src={linkedin} alt='linkedin'/></a>
                            </li>
                            <li class="p-5">
                            <a href='https://www.linkedin.com/in/lila-sarfson-4634251b6/' target='_blanck'>
                                        <img className='h-6 w-6 cursor-pointer text-gray-500 transition-all hover:invert' src={github} alt='linkedin'/></a>
                            </li>
                            <li class="p-5">
                            <a href='https://www.linkedin.com/in/lila-sarfson-4634251b6/' target='_blanck'>
                                        <img className='h-6 w-6 cursor-pointer text-gray-500 transition-all hover:invert' src={home} alt='linkedin'/></a>
                            </li>
                        </ul>
                    </div>
                <div className='bg-black h-full w-0.5'></div>
            </div>
        </div>
    )
}