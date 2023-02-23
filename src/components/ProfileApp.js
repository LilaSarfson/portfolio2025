
import '../style/utils.css'
export default function ProfileApp (props){
    return(
        <div className='text-center sm:text-center w-full'>
            <div className='flex flex-col sm:flex-row justify-center items-center sm:mt-0 sm:gap-12'>
                <div className='text-3xl sm:text-5xl 2xl:text-7xl'>
                    <h2 className='font-pompi self-start'>Hi! mi name is,</h2>
                    <h1 className='font-narko text-7xl sm:text-8xl 2xl:text-9xl uppercase'>Lila</h1>
                    <h1 className='font-narko text-7xl sm:text-8xl 2xl:text-9xl uppercase self-start'>Sarfson</h1>
                </div>
                <img className='w-5/12 xl:w-4/12 2xl:w-3/12' src={props.src} />
            </div>
            <p className="font-pompi text-3xl sm:text-5xl 2xl:text-7xl">I'm a web developer and historian but, <br/> <span className="underline decoration-rojo ">every journy begins with a choice!</span></p>
         </div>
    )
}