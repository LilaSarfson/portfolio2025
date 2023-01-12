
import ProjectDev from '../components/ProjectDev'
import data from '../data/dataDev.json'
export default function DeveloperView (){
    const dataProject = data.proyectos
    return(
        <section id='programacion' className='m-auto w-4/6 '>
            <h2 className='font-pompi font-bold underline decoration-rosa xl:text-5xl 2xl:text-6xl mb-20 xl:mt-20'>Some projects I've built.</h2>
            <div className='flex flex-col gap-14'>
                {dataProject.map((project, index) => {
                return(<ProjectDev
                key={index}
                direction={ index%2 ? 'flex-row': 'flex-row-reverse'}
                gradient={index%2 ? 'background-gradient2' : 'background-gradient'}
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