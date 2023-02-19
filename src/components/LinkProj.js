export default function LinkProj (props){
    return(
    <div className='flex flex-row h-1/6 gap-2 justify-end w-full items-center mb-4 font-narko'>
        <ul className="flex flex-row xl:text-lg 2xl:text-xl w-1/3 self-end">
                <li className="font-bold hover:text-white"><a href={props.github} target='_blanck'><p>code</p></a></li>
                <p>/</p>
                <li className="hover:text-white font-bold"><a href={props.demo} target='_blanck'><p>demo</p></a></li>
        </ul>
        <h3 className="text-xl xl:text-3xl 2xl:text-4xl  font-bold">{props.title}</h3>
    </div>  
    )
}

