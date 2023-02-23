import { useState } from "react"
export default function ListChoice (props){
const [historyon, setHistoryOn] = useState(false)
     const displayOn = () =>{
        setHistoryOn(true)
        return historyon
     }

    return(
            <ul className="flex flex-col sm:flex-row justify-center items-center m-auto h-1/3 w-2/3 gap-1 sm:gap-2 text-xl sm:text-2xl 2xl:text-3xl font-rale">
                <li className=" hover:animate-pulse border-solid border-2 border-rojo  text-rojo p-2"><a href="#developer">Developing</a></li>
                <li onClick={()=>props.displayToParent(displayOn())} className="hover:animate-pulse  border-solid border-2 border-black p-2"><a href='#historian' > History</a> </li>
            </ul>
    )
}
