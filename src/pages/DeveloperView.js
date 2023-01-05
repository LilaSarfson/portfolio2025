
import ProjectDev from '../components/ProjectDev'
import data from '../data/dataDev.json'
export default function DeveloperView (){
    const dataProject = data.proyectos
    return(
        <section id='programacion' className='m-auto w-4/6 '>
            <h2 className='font-pompi font-bold underline decoration-rosa xl:text-5xl 2xl:text-6xl mb-8'>Some projects I've built.</h2>
            <div className='flex flex-col gap-14'>
                {dataProject.map((project, index) => {
                return(<ProjectDev
                key={index}
                direction={ index%2 ? 'flex-row': 'flex-row-reverse'}
                border={index%2 ? 'border-r-4' : 'border-l-4'}
                title={project.titulo}
                description={project.description}
                tecno={project.tecnologias}
                github={project.githubUrl}
                imagen={project.imagen}
                demo={project.demo}
                />)})}
            </div>
        </section>    
    )
}