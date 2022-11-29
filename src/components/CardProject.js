import { useState } from "react"
export default function CardProject (props) {
    return(
        <div className="font-poke flex flex-col items-center justify-center w-3/12 h-2/6 border-4 border-dashed border-black bg-white">
           <div className={`${props.colour} rounded-full w-20 h-20 self-center`}></div>
            <h3>{props.titulo}</h3>
            <ul className="flex flex-row">
                <li className="m-0">
                    <div className="w-10 h-2 bg-rojo m-auto"></div>
                    <p>10%</p>
                    <p className="font-pompi font-bold text-center hidden">Soy una descripcion provisional de proyecto. No se muy bien que poner pero estaria bien ocupar bastante</p>
                </li>
                <li>
                    <div className="w-5 h-2 bg-rojo m-0"></div>
                    <p>10%</p>
                </li>
            </ul>
        </div>
    )
}

{/* <div className="flex flex-col w-5/6 rounded-bl-full rounded-tl-full border-dashed border-4 border-black border-black bg-white dropdown relative">
            <div className="flex flex-row gap-4">
                <div className={`${props.colour} rounded-full border-white border-solid border-2 w-10 h-10 self-center`}></div>
                <h3 className="font-poke">{props.titulo}</h3>
                <button className="dropdown-toggle">Open</button>
            </div>
             <div className=" w-full text-center">
                <p>Nose que</p>
            </div> 
        </div> */}