import { useState } from 'react'
import perfil from '../assets/micareto.png'
import data from '../data/profileData.json'
export default function AboutMe (){
    const [datatec, setData]= useState(data)
    return(
        <section className="motion-safe:animate-fadeIn flex flex-col lg:align-start w-5/6 sm:w-4/6 2xl:w-3/6 m-auto gap-4 font-rale py-32 "  id='about'>
            <h2 className="col-span-2 text-4xl 2xl:text-5xl w-full underline decoration-lila font-bold text-center sm:text-start font-pompi">About me.</h2>
            <div className='flex flex-col md:flex-row gap-12 md:gap-4'>
                <div className='md:w-6/12 w-full justify-center'>
                    <ul className="2xl:text-xl">
                        <p className='leading-relaxed'>Sí, soy historiadora de carrera y ahora, también programadora. Y sí, a continuación contestaré todas las dudas que surgen a raiz de esto:</p>
                        <br/>
                        <li className='font-bold bg-lila w-min'>¿Cuándo?</li>
                        <p>¡Hace ya un año!</p>
                        <br/>
                        <li className='font-bold bg-lila w-min'>¿Cómo?</li>
                        <p className='leading-relaxed'>Empecé por curiosidad un cursillo de diseño de páginas web, me encantó y me tiré a la piscina con un bootcamp fullstack y ahora, aquí estoy.</p>
                        <br/>
                        <li className='font-bold bg-lila w-max'>¿Por qué?</li>
                        <p className='leading-relaxed'>Aunque suene cliché, me encanta aprender cosas nuevas y por qué no, también me encanta las oportunidades laborales de este sector. Desarrollar otra forma de pensar y crear es lo que me motiva para seguir creciendo como desarrolladora.</p>
                    </ul>
                </div>
                <div className='flex flex-col gap-4 items-center md:w-6/12 w-full'>
                    <img className='sm:w-6/12 md:w-10/12 w-6/12 outline outline-offset-2 outline-4 outline-black' src={perfil}/>    
                    <div className='text-md text-black w-full text-center w-5/6'>
                            <p className=' font-bold'>Tecnologías que he usado recientemente:</p>
                        <ul className='flex flex-row gap-2 sm:gap-8 mb-4 flex-wrap justify-center'>
                            {
                            datatec.tecnologias.map((tecno, index) =>{return (
                                <li className='uppercase' key={index}><span className='text-lila'>✿</span>{tecno}</li>
                            )})
                            }
                        </ul>
                            <p className=' font-bold'>Otras tecnologías que conozco:</p>
                        <ul className='flex flex-row gap-2 sm:gap-8 flex-wrap justify-center'>
                            {
                            datatec.otrastecnologias.map((tecno, index) =>{return (
                                <li className='self-end uppercase' key={index}><span className='text-lila'>✿</span>{tecno}</li>
                            )})
                            }
                        </ul>
                    </div>    
                </div>
            </div>
        </section>
    )
}