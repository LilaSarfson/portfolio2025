
import ProjectDev from '../components/ProjectDev'
import data from '../data/dataDev.json'
export default function DeveloperView (){
    const dataProject = data.proyectos
    return(
        <section id='programacion' className='m-auto w-4/6 h-full'>
            <h2 className='font-pompi font-bold underline decoration-rosa text-5xl'>Some projects I've built.</h2>
            {dataProject.map((project, index) => {
            return(<ProjectDev
            key={index}
            direction={ index%2 ? 'flex-row': 'flex-row-reverse'}
            title={project.titulo}
            description={project.description}
            tecno={project.tecnologias}
            github={project.githubUrl}
            demo={project.demo}
            />)})}
        </section>    
    )
}