
import '../style/utils.css'
export default function ProfileApp (props){
    return(
        <div className='text-center sm:text-start'>
            <div className='flex flex-col sm:flex-row sm:mt-0'>
                <div className='text-4xl sm:text-5xl 2xl:text-6xl'>
                    <h2 className='font-pompi self-start'>Hi! mi name is,</h2>
                    <h1 className='font-narko text-8xl 2xl:text-9xl uppercase self-start'>Lila</h1>
                    <h1 className='font-narko text-8xl 2xl:text-9xl uppercase self-start'>Sarfson</h1>
                </div>
           <img className='w-7/12 w-5/12 xl:w-4/12 m-auto' src={props.src} />
            </div>
            <p className="font-pompi text-4xl sm:text-5xl 2xl:text-6xl">I'm a web developer and historian but, <span className="underline decoration-rojo">currently<br/>I love more the first one.</span></p>
         </div>
    )
}