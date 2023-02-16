import {    
    Link
  } from "react-router-dom";
export default function ListChoice (){
    return(
        <div className="flex flex-col w-full h-full items-center text-lg text-xl 2xl:text-3xl font-rale gap-4 sm:gap-16">
            <h3 className="uppercase text-center text-2xl 2xl:text-4xl">Every journy begins with a choice!</h3>
            <ul className="flex flex-col sm:flex-row justify-around w-full items-center text-center gap-4 sm:gap-0">
                <li className="w-1/3 text-rojo hover:animate-pulse"><a href="#developer">Developing<span>⤸</span></a></li>
             <li className="w-1/3 text-rojo hover:animate-pulse"><a href='#historian' ><span>⤹</span>History</a> </li>
            </ul>
        </div>
    )
}
