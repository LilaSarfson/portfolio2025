
import '../style/utils.css'
export default function ProfileApp (props){
    return(
        <div >
            <div className='flex flex-col sm:flex-row'>
                <div className='text-4xl'>
                    <h2 className='font-pompi sm:text-6xl self-start'>Hi! mi name is,</h2>
                    <h1 className='font-narko text-6xl sm:text-9xl uppercase self-start'>Lila</h1>
                    <h1 className='font-narko text-6xl sm:text-9xl uppercase self-start'>Sarfson</h1>
                </div>
           <img className='w-7/12 sm:w-5/12 m-auto' src={props.src} />
            </div>
            <p className="font-pompi text-4xl sm:text-6xl">I'm a web developer and historician but, <span className="underline decoration-rojo">currently<br/>I love more the first one.</span></p>
         </div>
    )
}