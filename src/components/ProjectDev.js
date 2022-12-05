import drop from '../assets/dropZone.png'
import TitleProj from './TitleProj'
export default function ProjectDev (props){

    return(
        <>
        <TitleProj
        title={props.title}
        demo={props.demo}
        github={props.github}
        />
        <div className={`flex ${props.direction} justify-center`}>
            <img className='w-2/3 grayscale hover:grayscale-0' src={drop}></img>    
            <div className="font-mono text-end w-3/6 h-1/3 self-start">
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