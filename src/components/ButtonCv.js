import Pdf from '../assets/LilaCV.pdf'
export default function ButtonCv(props, {setActive}){
    return(
        <button onClick={()=> {setActive(true)}} className={`border-4 animate-bounce rounded-xl border-dashed border-black p-8 border-black bg-white text-center w-6/6 font-poke`}><a href={Pdf} target="_blank">{props.title}</a></button>
    )
}