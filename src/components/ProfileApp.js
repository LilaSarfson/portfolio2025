
import '../style/utils.css'
export default function ProfileApp (props){
    return(
        <div>
            <div className='flex flex-row'>
                <div>
                    <h2 className='font-pompi xl:text-4xl 2xl:text-6xl self-start'>Hi! mi name is,</h2>
                    <h1 className='font-narko xl:text-8xl  2xl:text-9xl uppercase self-start'>Lila</h1>
                    <h1 className='font-narko xl:text-8xl  2xl:text-9xl uppercase self-start'>Sarfson</h1>
                </div>
           <img className='xl:w-5/12 m-auto' src={props.src} />
            </div>
            <p className="font-pompi xl:text-4xl 2xl:text-6xl">I'm a web developer and historician but, <span className="underline decoration-rojo">currently<br/>I love more the first one.</span></p>
         </div>
    )
}