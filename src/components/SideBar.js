import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import home from '../assets/up-arrow.png'
export default function SideBar (props){
    return(
        <div className={`${props.estado} m-auto`}>
            <ul className={`flex ${props.justi}`}>
                 <li class="p-5">
                     <a href='https://www.linkedin.com/in/lila-sarfson-4634251b6/' target='_blanck'>
                    <img className='h-6 w-6 cursor-pointer transition-all hover:invert' src={linkedin} alt='linkedin'/></a>
                </li>
                <li class="p-5">
                    <a href='https://github.com/LilaSarfson' target='_blanck'>
                         <img className='h-6 w-6 cursor-pointer text-gray-500 transition-all hover:invert' src={github} alt='github'/></a>
                </li>
                <li class="p-5">
                    <a href='/' target='_blanck'>
                    <img className='h-6 w-6 cursor-pointer text-gray-500 transition-all hover:invert' src={home} alt='home'/></a>
                </li>
             </ul>
        </div>
    )
}

// md:w-6/12 2xl:w-3/12
        // <div className={`${props.estado} ${props.tamano} ${props.position} m-auto`}>
        //     <div className={`w-full h-full flex flex-col justify-center ${props.itemsDirection}`}>   
        //         <ul className={`flex ${props.direccion} gap-6 h-2/6 justify-start`}>
        //                 <li><a href='https://www.linkedin.com/in/lila-sarfson-4634251b6/' target='_blanck'>
        //                     <img className='w-3/12 xl:w-2/12 2xl:w-10p m-auto hover:invert' src={linkedin} alt='linkedin'/></a></li>
        //                 <li><a href='https://github.com/LilaSarfson' target='_blanck'>
        //                     <img className='w-3/12 xl:w-2/12 2xl:w-10p m-auto hover:invert' src={github} alt='github'/></a></li>
        //                 <li className={`${props.estadoHome}`}><a href='/'>
        //                     <img className='w-3/12 xl:w-2/12 2xl:w-10p m-auto hover:invert' src={home} alt='home'/></a></li>   
        //         </ul> 
        //     </div>      
        // </div>