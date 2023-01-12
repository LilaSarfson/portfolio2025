import Hello from '../assets/hello.png'
export default function ContactView (){
    return(
        <section id='contact' className="m-auto w-4/6 h-2/3 flex flex-col justify-around items-center font-mono">
            <div className='flex flex-col justify-center items-center'>
                <h2 className='font-pompi font-bold underline decoration-verde text-5xl'>Contact.</h2>
                <div className='flex flex-row justify-center self-center gap-8 items-center'>
                    <div className='2xl:text-lg xl:text-lg'>                    
                        <p className='mb-2'>¿Te ha parecido interesante?<span className='text-verde font-bold'>¡</span>Hablemos<span className='text-verde font-bold'>!</span></p>
                        <address>
                        <p className='hover:underline decoration-wavy decoration-verde text-center'><a href='mailto:lilamandarina@hotmail.com' className='not-italic'>lilamandarina@hotmail.com →</a></p>
                        </address>
                    </div>
                    <img className='w-2/12' src={Hello}/>
                </div>
            </div>
            <p className='xl:text-xs'>©2023 Designed and built by Lila Sarfson</p>
        </section>    
    )
}
