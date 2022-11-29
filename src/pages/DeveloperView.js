import ProfileApp from '../components/ProfileApp'
import CardText from '../components/CardText'
import MenuApp from '../components/MenuApp'
import CardProject from '../components/CardProject'
import ButtonCv from '../components/ButtonCv'
import { useState } from 'react'
import profileData from '../data/profileData.json'
import data from '../data/dataDev.json'
import perfDev from '../assets/perfdev.svg'
export default function DeveloperView (){
    const [activeAbout, setAboutActive]= useState(false);
    const [activeCV, setActiveCV]=useState(false)
    const dataProfile= profileData[0]
    const dataProject = data.proyectos
    return(
        <>
            <div className='flex flex-row h-full w-full text-xl'>
                <div className='flex flex-col justify-between w-4/12 items-center bg-azul p-10 gap-8'> 
                    <div>        
                        <ProfileApp fontSize={'text-4xl'} src={perfDev}/>
                        { activeCV ?
                <ButtonCv setActive={setActiveCV} title={dataProfile.cv}/>
                :
                <CardText description={activeAbout ? dataProfile.descripcionDev : dataProfile   .presentacion} />
                }
                    </div>
                <MenuApp setActiveCV={setActiveCV} setActive={setAboutActive} direction={'flex-row'} directionLi={'flex-col'}/>
                </div>
                <div className='flex flex-row flex-wrap w-full justify-center items-center gap-4'>
                {dataProject.map((project, index) => <CardProject colour={project.tecnologias==='vue.js' ? 'bg-verde' : project.tecnologias==='react.js' ?'bg-rojo' : 'bg-amarillo'} key={index} titulo={project.titulo} description={project.description}/>)}
                </div>
            </div>
        </>    
    )
}