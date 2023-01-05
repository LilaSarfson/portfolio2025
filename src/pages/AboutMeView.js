import perfil from '../assets/perfil1910.svg'
export default function AboutMe (){
    return(
        <section className="h-full flex align-start justify-center flex-col w-4/6 m-auto gap-4 font-pompi " id='about'>
            <div className='flex flex-row lg:gap-8'>
                <div className=' flex flex-col md:gap-4 lg:gap-8 w-4/6'>
                    <h2 className="md:text-5xl lg:text-5xl w-3/6 underline decoration-lila font-bold">About me.</h2>
                    <p className="md:text-3xl xl:text-xl 2xl:text-3xl font-mono">Empecé e la programación hace poco más de un año, a través de un cursillo de diseño de páginas web. Muy brevemente me introduje en el mundillo del frontEnd y me quedé con ganas de más. M'as cosas que ahora mismo no me salen porque redactar sobre uno mismo es muy complejo y absurdo Tecnolog'ias que estoy usando actualmente:</p>
                </div>  
                <div className='md:w-2/6 lg:w-2/12 self-center border-4 border-solid border-lila rotate-12'>
                    <img className='rotate-0 ' src={perfil}/>
                </div> 
            </div>
            <ul className='xl:text-sm 2xl:text-2xl font-mono flex flex-row gap-8 text-white uppercase'>
                <li><span className='text-lila'>✿</span>React.js</li>
                <li><span className='text-lila'>✿</span>Vue.js</li>
                <li><span className='text-lila'>✿</span>Redux</li>
                <li><span className='text-lila'>✿</span>Python</li>
                <li><span className='text-lila'>✿</span>Tailwind</li>
            </ul>
        </section>
    )
}