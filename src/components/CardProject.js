import ButtonOpenProj from "./ButtonOpenProj"
export default function CardProject (props) {
    return(
        <div className="flex flex-col w-5/6 rounded-bl-full rounded-tl-full border-dashed border-4 border-black border-black bg-white">
            <div className="flex flex-row gap-4">
                <div className={`${props.colour} rounded-full border-white border-solid border-2 w-10 h-10 self-center`}></div>
                <h3 className="font-poke">{props.titulo}</h3>
                <ButtonOpenProj/>
            </div>
             {/* <div className="w-full text-center">
                <p>Nose que</p>
            </div> */}
        </div>
    )
}