import Hello from '../assets/hello.png'
import SideBar from '../components/SideBar'
export default function ContactView (){
    return(
        <section id='contact' className="z-0 motion-safe:animate-fadeIn m-auto w-5/6 sm:w-4/6 h-2/3 sm:h-4/6 justify-around flex flex-col items-center font-rale">
            <div className='flex flex-col justify-center items-center h-3/6'>
                <h2 className='font-pompi font-bold underline decoration-verde text-4xl mb-4'>Contact.</h2>
                <div className='flex flex-col lg:flex-row justify-center self-center gap-8 items-center'>
                    <div className='2xl:text-xl text-center'>                    
                        <p className='mb-2'>¿Te ha parecido interesante?<span className='text-verde font-bold'>¡</span>Hablemos<span className='text-verde font-bold'>!</span></p>
                        <div className='items-center'>
                             <SideBar  estado='block lg:hidden' justi='justify-center'/>
                        </div>
                        <address>
                        <p className='hover:underline decoration-wavy decoration-verde text-center'><a href='mailto:lilamandarina@hotmail.com' className='not-italic'>lilamandarina@hotmail.com →</a></p>
                        </address>
                    </div>
                    <img className='w-2/12' src={Hello}/>
                </div>
            </div>
            <div className='relative w-full'>
                <p className='text-center text-sm w-full absolute bottom-0'>©2023 Designed and built by Lila Sarfson</p>
            </div>
        </section>    
    )
}
