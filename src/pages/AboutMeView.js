import { useState } from 'react'
import perfil from '../assets/micareto.png'
import data from '../data/profileData.json'
export default function AboutMe (){
    const [datatec, setData]= useState(data)
    return(
        <section className="motion-safe:animate-fadeIn flex flex-col lg:align-start w-5/6 sm:w-4/6 2xl:w-60p m-auto gap-4 font-rale py-32 "  id='about'>
            <h2 className="col-span-2 text-4xl 2xl:text-5xl w-full underline decoration-lila font-bold text-center sm:text-start font-pompi">About me.</h2>
            <div className='flex flex-col md:flex-row gap-12 md:gap-4'>
                <div className='md:w-6/12 w-full justify-center'>
                    <ul className="2xl:text-xl">
                        <p className='leading-relaxed'>Hi! My name is Lila Sarfson and I enjoy creating creative and useful things with the power of the code.</p>
                        <br/>
                        <li className='font-bold bg-lila w-max'>Since when?</li>
                        <p>It's been a year and a half!</p>
                        <br/>
                        <li className='font-bold bg-lila w-max'>How did you start?</li>
                        <p className='leading-relaxed'>I started by couriosity a course on web design, I loved it, and because of that I decided to jumpe into it with a fullstack bootcamp and now, here I am!</p>
                        <br/>
                        <li className='font-bold bg-lila w-max'>Why?</li>
                        <p className='leading-relaxed'>I'm a very creative person and I love learn new things, and I think IT sector can give me so much of both, developing had made me build a new way to think and work. And that's why I'm incredible motivated to grow up as a developer!</p>
                    </ul>
                </div>
                <div className='flex flex-col gap-4 items-end  md:w-6/12 w-full'>
                    <img className=' md:w-8/12 w-6/12 2xl:w-6/12 outline outline-offset-2 outline-4 outline-black self-center' src={perfil}/>    
                    <div className='text-md text-black w-full text-center self-center w-5/6'>
                            <p className=' font-bold'>Technologies I’ve been working with recently:</p>
                        <ul className='flex flex-row gap-2 sm:gap-8 mb-4 flex-wrap justify-center'>
                            {
                            datatec.tecnologias.map((tecno, index) =>{return (
                                <li key={index}><span className='text-lila'>✿</span>{tecno}</li>
                            )})
                            }
                        </ul>
                            <p className=' font-bold'>Other technologies I know.</p>
                        <ul className='flex flex-row gap-2 sm:gap-8 flex-wrap justify-center'>
                            {
                            datatec.otrastecnologias.map((tecno, index) =>{return (
                                <li className='self-end' key={index}><span className='text-lila'>✿</span>{tecno}</li>
                            )})
                            }
                        </ul>
                    </div>    
                </div>
            </div>
        </section>
    )
}