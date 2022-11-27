// import Est from '../assets/Est-03.svg'
export default function CardProject (props) {
    return(
        <div>
            <div className="w-5/6 h-3/6 flex flex-row items-center gap-4 border-4 rounded-bl-full rounded-tl-full border-dashed border-black p-8 border-black bg-white m-auto">
                <div className={`${props.colour} rounded-full border-full w-10 h-10 self-center`}></div>
                <h3 className="font-poke">{props.titulo}</h3>
                <span className="rotate-90">></span>
                <p className="font-phrase">{props.description}</p>
            </div>
        </div>
    )
}{/* <hr className=" border-4 border-solid border-verde w-1/12 rounded-full"/>
<hr className=" border-4 border-solid border-rojo w-2/12 rounded-full"/>
<hr className=" border-4 border-solid border-azul-css w-2/12 rounded-full"/> */}