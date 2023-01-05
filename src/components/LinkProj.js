export default function LinkProj (props){
    return(
    <div className='flex flex-row h-1/6 gap-2 justify-end w-full items-center mb-4'>
        <ul className="flex flex-row font-pompi xl:text-xl 2xl:text-2xl w-1/3 self-end">
                <li className="text-rosa hover:font-bold"><a href={props.github} target='_blanck'><p>code</p></a></li>
                <p>/</p>
                <li className="text-rosa hover:font-bold"><a href={props.demo} target='_blanck'><p>demo</p></a></li>
        </ul>
        <h3 className="xl:text-3xl 2xl:text-4xl font-mono font-bold">{props.title}</h3>
    </div>  
    )
}

