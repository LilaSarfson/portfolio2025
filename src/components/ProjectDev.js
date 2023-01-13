
import LinkProj from './LinkProj'
export default function ProjectDev (props){

    return(
        <>
        <div className={`flex ${props.direction} ${props.gradient} flex-col h-6/12 gap-4 p-6 w-full m-auto drop-shadow-md`}>
            <img className='w-full xl:w-3/6 h-1/3  brightness-50 hover:brightness-100' src={`/${props.imagen}`}></img>    
            <div className="font-mono text-end w-full xl:w-3/6 h-1/3 self-start xl:text-sm">
                <LinkProj
                title={props.title}
                demo={props.demo}
                github={props.github}
                />
                <p className='2xl:text-lg'>{props.description}</p>
                    <ul className="flex flex-row gap-6 justify-end mt-6 flex-wrap">
                    {props.tecno.map((tecno, index)=>{
                        return( <li className='bg-white lg:p-1 xl:p-2 rounded-sm duration-150 hover:-translate-y-4' key={index}><span className='text-rosa'>✿</span>{tecno}</li>)
                    })}  
                    </ul>
            </div>
        </div>
    </>  
    )
}
