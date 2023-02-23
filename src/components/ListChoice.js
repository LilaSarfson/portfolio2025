import { useState } from "react"
export default function ListChoice (props){
const [historyon, setHistoryOn] = useState(false)
     const displayOn = () =>{
        setHistoryOn(true)
        return historyon
     }

    return(
            <ul className="flex flex-col sm:flex-row justify-center items-center m-auto  w-2/3 gap-3 sm:gap-2 text-lg sm:text-2xl 2xl:text-3xl font-rale">
                <li className=" hover:animate-bounce border-solid border-2 border-rojo  text-rojo p-2"><a href="#developer">Developing</a></li>
                <li onClick={()=>props.displayToParent(displayOn())} className="hover:animate-bounce border-solid border-2 border-black p-2"><a href='#historian' > History</a> </li>
            </ul>
    )
}
