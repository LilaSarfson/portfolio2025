import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import home from '../assets/up-arrow.png'
export default function SideBar (props){
    return(
        <div className={`${props.estado} m-auto`}>
            <ul className={`flex ${props.justi}`}>
                 <li class="p-5">
                     <a href='https://www.linkedin.com/in/lila-sarfson-4634251b6/' target='_blanck'>
                    <img className='h-6 w-6' src={linkedin} alt='linkedin'/></a>
                </li>
                <li class="p-5">
                    <a href='https://github.com/LilaSarfson' target='_blanck'>
                         <img className='h-6 w-6  text-gray-500  ' src={github} alt='github'/></a>
                </li>
                <li class="p-5">
                    <a href='#top
                    '>
                    <img className='h-6 w-6  text-gray-500 ' src={home} alt='home'/></a>
                </li>
             </ul>
        </div>
    )
}
