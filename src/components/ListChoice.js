import { useState } from "react"
export default function ListChoice (props){
const [historyon, setHistoryOn] = useState(false)
     const displayOn = () =>{
        setHistoryOn(true)
        return historyon
     }

    return(
            <ul className="flex flex-col items-center m-auto w-1/3 gap-1 sm:gap-2 text-lg sm:text-xl 2xl:text-2xl font-rale">
                <li className=" hover:animate-pulse hover:text-rojo"><a href="#developer">>> Developing</a></li>
                <li onClick={()=>props.displayToParent(displayOn())} className="hover:animate-pulse hover:text-rojo"><a href='#historian' >>> History</a> </li>
            </ul>
    )
}
