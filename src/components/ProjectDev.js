
import LinkProj from './LinkProj'
export default function ProjectDev (props){

    return(
        <>
        <div className={`flex ${props.direction} ${props.gradient} justify-center gap-4 p-6 2xl:w-5/6 m-auto drop-shadow-md`}>
            <img className='xl:w-3/6 2xl:w-3/6 brightness-50 hover:brightness-100' src={`/${props.imagen}`}></img>    
            <div className="font-mono text-end w-3/6 h-full self-start">
                <LinkProj
                title={props.title}
                demo={props.demo}
                github={props.github}
                />
                <p className='2xl:text-lg'>{props.description}</p>
                    <ul className="flex flex-row gap-6 justify-end 2xl:mt-48">
                    {props.tecno.map((tecno, index)=>{
                        return( <li className='bg-white p-2 rounded-sm duration-150 hover:-translate-y-4' key={index}><span className='text-rosa'>✿</span>{tecno}</li>)
                    })}  
                    </ul>
            </div>
        </div>
    </>  
    )
}
// ${props.border-color}