import Hello from '../assets/hello.png'
export default function ContactView (){
    return(
        <section id='contact' className="m-auto w-4/6 h-2/3 flex flex-col justify-center items-center">
           <h2 className='font-pompi font-bold underline decoration-verde text-5xl'>Contact.</h2>
            <div className='flex flex-row justify-center self-center gap-8 items-center'>
                <h3 className="font-mono font-bold uppercase xl:text-6xl xl:h-1/3 text-verde">Get in touch!</h3>
                <img className='w-2/12' src={Hello}/>
            </div>
            <p className='font-mono'>¿Te ha parecido interesante?¡Hablemos!</p>
            <address>
            <p className='font-mono hover:underline decoration-wavy decoration-verde'><a href='mailto:lilamandarina@hotmail.com' className='not-italic'>lilamandarina@hotmail.com →</a></p>
            </address>
        </section>    
    )
}