export default function LinkProj (props){
    return(
    <div className={`flex ${props.demo ? 'flex-row' : 'flex-col'} h-1/6 gap-2 justify-end w-full items-center mb-4 font-rale`}>
        <h3 className="text-3xl 2xl:text-4xl uppercase font-bold font-narko">{props.title}</h3>
        { props.demo ? 
            <ul className="flex flex-row xl:text-lg w-1/3 self-end">
                <li className="hover:text-white"><a href={props.github} target='_blanck'><p>code</p></a></li>
                <p>/</p>
                <li className="hover:text-white "><a href={props.demo} target='_blanck'><p>demo</p></a></li>
            </ul>
            :
            <a href={props.github} target='_blanck'><p className="hover:text-white">&lt;code/&gt;</p></a>
        }
      
    </div>  
    )
}
