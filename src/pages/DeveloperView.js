
import ProjectDev from '../components/ProjectDev'
import data from '../data/dataDev.json'
export default function DeveloperView (){
    const dataProject = data.proyectos
    return(
        <section id='developer' className='m-auto w-5/6 sm:w-4/6 2xl:w-3/6 py-44 h-full'>
            <h2 className='motion-safe:animate-fadeIn text-center sm:text-start font-pompi font-bold underline decoration-rosa text-4xl 2xl:text-5xl mb-20'>Some projects I've built.</h2>
            <div className='flex flex-col gap-14'>
                {dataProject.map((project, index) => {
                return(<ProjectDev
                key={index}
                direction={ index%2 ? 'xl:flex-row': 'xl:flex-row-reverse'}
                gradient={'bg-custom-gradient-1'}
                gradientdark={'dark:bg-dark-gradient-2'}
                title={project.titulo}
                description={project.description}
                tecno={project.tecnologias}
                github={project.githubUrl}
                imagen={project.imagen}
                demo={project.demo}
                alt={project.titulo}
                />)})}
            </div>
        </section>    
    )
}