
import CardText from '../components/CardText'
import CardProject from '../components/CardProject'
import data from '../data/dataDev.json'
import perfDev from '../assets/perfdev.svg'
export default function DeveloperView (){
    const dataProject = data.proyectos
    return(
        <section className='m-auto w-3/6 h-full'>
            <h2 className='font-pompi font-bold underline decoration-rosa text-5xl'>Some projects I've built.</h2>
        </section>    
    )
}