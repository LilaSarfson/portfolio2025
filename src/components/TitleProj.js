export default function TitleProj (props){
    return(
        <div className='flex flex-row h-1/6 gap-4 justify-end w-full items-center'>
        <ul className="flex flex-row font-pompi text-xl">
                <a href={props.github}><li>code /</li></a>
                <a href={props.demo}><li>demo</li></a>
        </ul>
        <h3 className="text-3xl font-mono font-bold">{props.title}</h3>
</div>  
    )
}