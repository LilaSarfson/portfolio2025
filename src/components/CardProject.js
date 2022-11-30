import { useState } from "react"
export default function CardProject (props) {
    return(
        <div className="font-poke flex flex-col items-center justify-start w-3/12 h-1/6 border-4 border-dashed border-black bg-white">
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
