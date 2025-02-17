
import HeaderDev from './HeaderDev'
export default function ProjectDev (props){

    return(
        <>
        <div className={`flex ${props.gradient} ${props.gradientdark} flex-col xl:flex-row gap-4 p-4 xl:w-full m-auto drop-shadow-md`}>
            <img className='xl:w-2/6 w-2/8 h-4/12 rounded-md brightness-50 hover:brightness-100' 
            src={require(`../assets/projects/${props.imagen}`)}
            alt={props.alt}></img>    
            <div className="font-rale w-full self-center xl:text-md">
                <HeaderDev
                title={props.title}
                demo={props.demo}
                github={props.github}
                />
                <p className='2xl:text-lg tracking-wide '>{props.description}</p>
                    <ul className="flex flex-row gap-6 mt-6 flex-wrap dark:blancoRoto">
                    {props.tecno.map((tecno, index)=>{
                        return( <li className=' border-rosa dark:border-purpura border-2 p-1 rounded-sm duration-150 hover:-translate-y-4' key={index}><span className='text-rosa'>✿</span>{tecno}</li>)
                    })}  
                    </ul>
            </div>
        </div>
    </>  
    )
}
