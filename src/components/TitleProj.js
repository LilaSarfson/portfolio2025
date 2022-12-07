export default function TitleProj (props){
    return(
    <div className='flex flex-row h-1/6 gap-2 justify-end w-full items-center mb-4'>
        <ul className="flex flex-row font-pompi text-xl w-1/3 self-end">
                <a href={props.github}><li className="hover:font-rosa">code</li></a>
                <p>/</p>
                <a href={props.demo}><li className="hover:font-rosa">demo</li></a>
        </ul>
        <h3 className="text-3xl font-mono font-bold">{props.title}</h3>
    </div>  
    )
}