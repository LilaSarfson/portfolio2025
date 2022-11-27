import ProfileApp from '../components/ProfileApp'
import CardText from '../components/CardText'
import MenuApp from '../components/MenuApp'
import CardProject from '../components/CardProject'
import Door from '../assets/exit-door.png'
import { Link } from 'react-router-dom'
import data from '../data/dataDev.json'
export default function DeveloperView (){
   const dataProject = data

   console.log(dataProject)
    return(
        <div className='flex flex-row h-full w-full text-xl font-poke'>
            <div className='flex flex-col w-4/12 justify-between items-center bg-azul'>
                <div className='h-3/6 flex flex-col justify-center gap-8 items-center'>
                    <ProfileApp/>
                    <CardText description={'Every journey begins with a choice!'}/>
                </div>
                <MenuApp direction={'flex-row'} directionLi={'flex-col'}/>
            </div>
            <div className='flex flex-col w-full justify-center'>
            <h3 className='text-center'>Projects</h3>
            {dataProject.map((proyect, index) => <CardProject colour={proyect.tecnologias==='vue.js' ? 'bg-verde' : proyect.tecnologias==='react.js' ?'bg-rojo' : 'bg-amarillo'} key={index} titulo={proyect.titulo}/>)}
            </div>
            <Link className='w-12 h-12 self-end m-4' to='/'><img src={Door}/></Link>
        </div>
    )
}