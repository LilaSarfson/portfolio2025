import drop from '../assets/dropZone.png'
export default function ProjectDev (props){
    return(
        <>
        <div className="flex flex-row h-1/6 gap-4 justify-end w-full items-center">
                <ul className="flex flex-row font-pompi text-xl">
                        <a href="google.es"><li>code /</li></a>
                        <a href="google.es"><li>demo</li></a>
                </ul>
                <h3 className="text-3xl font-mono font-bold">{props.title}</h3>
        </div>  
        <div className='flex flex-row justify-center'>
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