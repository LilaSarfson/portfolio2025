
import { Link } from "react-router-dom"
import '../style/utils.css'
export default function ProfileApp (props){
    return(
        <div>
            <div className='flex flex-row'>
                <div>
                <h2 className="font-pompi text-4xl self-start">Hi! mi name is,</h2>
                <h1 className={`font-narko ${props.fontSize} uppercase self-start`}>Lila</h1>
                <h1 className={`font-narko ${props.fontSize} uppercase self-start`}>Sarfson</h1>
                </div>
            <Link to='/'><img className='w-10/12 m-auto' src={props.src} /></Link>
            </div>
            <p className="font-pompi text-3xl">I'm a web developer and historician but, <span className="underline decoration-rojo">currently<br/>I love more the first one.</span></p>
         </div>
    )
}