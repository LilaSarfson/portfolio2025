import ProfileApp from '../components/ProfileApp'
import CardText from '../components/CardText'
import MenuApp from '../components/MenuApp'
import CardProject from '../components/CardProject'
import Door from '../assets/exit-door.png'
import ButtonCv from '../components/ButtonCv'
import { useState } from 'react'
import profileData from '../data/profileData.json'
import { Link } from 'react-router-dom'
import data from '../data/dataDev.json'
export default function DeveloperView (){
    const [activeAbout, setAboutActive]= useState(false);
    const [activeCV, setActiveCV]=useState(false)
    const dataProfile= profileData[0]
    const dataProject = data.proyectos
    return(
        <>
            <div className='flex flex-row h-full w-full text-xl'>
                <div className='flex flex-col w-4/12 items-center bg-azul'>         
                        <ProfileApp/>
                        { activeCV ?
                <ButtonCv setActive={setActiveCV} title={dataProfile.cv}/>
                :
                <CardText description={activeAbout ? dataProfile.descripcionDev : dataProfile   .presentacion} />
                }
                </div>
                <div className='flex flex-col w-full justify-center items-center gap-4'>
                {dataProject.map((project, index) => <CardProject colour={project.tecnologias==='vue.js' ? 'bg-verde' : project.tecnologias==='react.js' ?'bg-rojo' : 'bg-amarillo'} key={index} titulo={project.titulo} description={project.description}/>)}
                <MenuApp setActiveCV={setActiveCV} setActive={setAboutActive} direction={'flex-row'} directionLi={'flex-col'}/>
                </div>
            </div>
            {/* <Link className='w-12 h-12 self-end m-4' to='/'><img src={Door}/></Link> */}
        </>    
    )
}