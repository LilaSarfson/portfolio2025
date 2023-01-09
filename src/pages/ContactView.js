import Hello from '../assets/hello.png'
export default function ContactView (){
    return(
        <section id='contact' className="m-auto w-4/6 h-2/3 flex flex-col justify-center">
           <h2 className='font-pompi font-bold underline decoration-verde text-5xl'>Contact.</h2>
           <p className='font-mono 2xl:text-lg'>Do you like what did you see? Please let me know</p>
            <div className='flex flex-row justify-center self-center gap-8 items-center'>
                <h3 className="font-mono font-bold uppercase xl:text-6xl xl:h-1/3 text-center text-verde">Say hello!</h3>
                <img className='w-2/12' src={Hello}/>
            </div>
            <address>
            <p className='font-mono text-center hover:underline decoration-wavy decoration-verde'><a href='mailto:lilamandarina@hotmail.com' className='not-italic'>lilamandarina@hotmail.com →</a></p>
            </address>
        </section>    
    )
}