
import LinkProj from './LinkProj'
export default function ProjectDev (props){

    return(
        <>
        <div className={`flex ${props.direction} justify-center gap-4 p-6`}>
            <img className='w-2/3 brightness-50 hover:brightness-100 border-solid border-pink border-4' src={`../assets/${props.imagen}`}></img>    
            <div className="font-mono text-end w-3/6 h-1/3 self-start">
                <LinkProj
                title={props.title}
                demo={props.demo}
                github={props.github}
                />
                <p>{props.description}</p>
                <ul className="flex flex-row gap-6 justify-end text-white">
                   {props.tecno.map((tecno, index)=>{
                    return( <li key={index}>{tecno}</li>)
                   })}  
                </ul>
            </div>
        </div>
    </>  
    )
}