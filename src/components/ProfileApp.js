
import '../style/utils.css'
export default function ProfileApp (props){
    return(
        <div>
            <div className='flex flex-row'>
                <div>
                    <h2 className='font-pompi md:text-4xl lg:text-4xl self-start'>Hi! mi name is,</h2>
                    <h1 className='font-narko md:text-8xl lg:text-8xl uppercase self-start'>Lila</h1>
                    <h1 className='font-narko md:text-8xl lg:text-8xl uppercase self-start'>Sarfson</h1>
                </div>
           <img className='lg:w-5/12 m-auto' src={props.src} />
            </div>
            <p className="font-pompi lg:text-4xl">I'm a web developer and historician but, <span className="underline decoration-rojo">currently<br/>I love more the first one.</span></p>
         </div>
    )
}