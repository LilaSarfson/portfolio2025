
import LinkProj from './LinkProj'
export default function ProjectDev (props){

    return(
        <>
        <div className={`flex ${props.direction} ${props.border} justify-center gap-4 p-6 2xl:w-5/6 m-auto border-solid border-rosa border-y-4`}>
            <img className='xl:w-2/3 2xl:w-3/6 brightness-50 hover:brightness-100' src={`/${props.imagen}`}></img>    
            <div className="font-mono text-end w-3/6 h-1/3 self-start">
                <LinkProj
                title={props.title}
                demo={props.demo}
                github={props.github}
                />
                <p className='2xl:text-lg'>{props.description}</p>
                <ul className="flex flex-row gap-6 justify-end text-white">
                   {props.tecno.map((tecno, index)=>{
                    return( <li key={index}><span className='text-rosa'>✿</span>{tecno}</li>)
                   })}  
                </ul>
            </div>
        </div>
    </>  
    )
}