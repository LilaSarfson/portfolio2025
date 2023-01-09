import perfil from '../assets/perfil1910.svg'
export default function AboutMe (){
    return(
        <section className="h-full flex align-start flex-col w-4/6 m-auto gap-4 font-pompi " id='about'>
            <div className='flex flex-row lg:gap-8'>
                <div className=' flex flex-col md:gap-4 xl:gap-8 w-4/6'>
                    <h2 className=" xl:text-5xl 2xl:text-6xl w-3/6 underline decoration-lila font-bold">About me.</h2>
                    <ul className="md:text-3xl xl:text-xl 2xl:text-2xl font-mono">
                        <p>Sí, soy historiadora y programadora, y sí, a continuación contestaré todas tus dudas:</p>
                        <li className='font-bold'>¿Cuándo?</li>
                        <p>¡Hace ya un año!</p>
                        <li className='font-bold'>¿Cómo?</li>
                        <p>Empecé por curiosidad un cursillo de diseño de páginas web, me encantó y me tiré a la piscina con un bootcamp fullstack y ahora, aquí estoy.</p>
                        <li className='font-bold'>¿Por qué?</li>
                        <p>Aunque suene cliché, me encanta aprender cosas nuevas y por qué no, también me encanta las oportunidades laborales de este sector. Desarrollar otra forma de pensar y crear es lo que me motiva para seguir creciendo como desarrolladora.</p>
                    </ul>
                    <ul className='xl:text-sm 2xl:text-lg flex flex-row gap-8 text-black uppercase font-bold font-mono'>
                        <p>Tecnologías que he usado recientemente:</p>
                        <li><span className='text-lila'>✿</span>React.js</li>
                        <li><span className='text-lila'>✿</span>Vue.js</li>
                        <li><span className='text-lila'>✿</span>Redux</li>
                        <li><span className='text-lila'>✿</span>Python</li>
                        <li><span className='text-lila'>✿</span>Tailwind</li>
                    </ul>
                    <ul className='xl:text-sm 2xl:text-lg flex flex-row gap-8 text-black uppercase font-bold font-mono'>
                        <p>Otras tecnologías que conozco:</p>
                        <li><span className='text-lila'>✿</span>Java</li>
                        <li><span className='text-lila'>✿</span>SQL</li>
                        <li><span className='text-lila'>✿</span>VUEX</li>
                        <li><span className='text-lila'>✿</span>MongoDB</li>
                        <li><span className='text-lila'>✿</span>BootStrap</li>
                    </ul>
                </div>  
                <div className='md:w-2/6 lg:w-2/12 self-center border-4 border-solid border-lila rotate-12'>
                    <img className='rotate-0 ' src={perfil}/>
                </div> 
            </div>
        </section>
    )
}