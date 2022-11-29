import Pdf from '../assets/LilaCV.pdf'
export default function ButtonCv(props){
    return(
        <button className={`border-4 ${props.active ? 'block' : 'hidden'} animate-bounce rounded-xl border-dashed border-black p-8 border-black bg-white text-center w-6/6 font-poke`}><a href={Pdf} target="_blank">{props.title}</a></button>
    )
}