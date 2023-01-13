import { useState } from 'react'
import perfil from '../assets/micareto.png'
import data from '../data/profileData.json'
export default function AboutMe (){
    const [datatec, setData]= useState(data)
    return(
        <section className="h-full flex align-start w-4/6 m-auto gap-4 font-mono">
            <div className='grid grid-cols-1 sm:grid-cols-2'>
                <h2 className="sm:col-span-2 md:text-5xl 2xl:text-6xl w-3/6 underline decoration-lila font-bold  font-pompi">About me.</h2>
                <div className='2xl:w-5/12 xl:w-full justify-center' id='about'>
                    <ul className="xl:text-lg 2xl:text-2xl">
                        <p>Sí, soy historiadora de carrera y ahora, también programadora. Y sí, a continuación contestaré todas las dudas que surgen a raiz de esto:</p>
                        <li className='font-bold'>¿Cuándo?</li>
                        <p>¡Hace ya un año!</p>
                        <li className='font-bold'>¿Cómo?</li>
                        <p>Empecé por curiosidad un cursillo de diseño de páginas web, me encantó y me tiré a la piscina con un bootcamp fullstack y ahora, aquí estoy.</p>
                        <li className='font-bold'>¿Por qué?</li>
                        <p>Aunque suene cliché, me encanta aprender cosas nuevas y por qué no, también me encanta las oportunidades laborales de este sector. Desarrollar otra forma de pensar y crear es lo que me motiva para seguir creciendo como desarrolladora.</p>
                    </ul>
                </div>  
                <div className='sm:w-full text-right sm:h-6/12'>
                    <img className='w-6/12 border-8 border-double border-lila m-auto' src={perfil}/>
                </div> 
                <div className='sm:col-span-2'>
                    <ul className='xl:text-sm 2xl:text-lg flex flex-row gap-8 text-black uppercase font-bold mb-4 flex-wrap'>
                        <p>Tecnologías que he usado recientemente:</p>
                        {
                        datatec.tecnologias.map((tecno, index) =>{return (
                            <li className='self-end'><span className='text-lila'>✿</span>{tecno}</li>
                        )})
                        }
                    </ul>
                    <ul className='xl:text-sm 2xl:text-lg flex flex-row gap-8 flex-wrap sm:flex-nowrap text-black uppercase font-bold'>
                        <p>Otras tecnologías que conozco:</p>
                        {
                        datatec.otrastecnologias.map((tecno, index) =>{return (
                            <li className='self-end'><span className='text-lila'>✿</span>{tecno}</li>
                        )})
                        }
                    </ul>
                </div>    
            </div>
        </section>
    )
}