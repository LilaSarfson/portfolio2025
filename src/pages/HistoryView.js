
import ProojectHistory from "../components/ProjectHistory"
import data from '../data/dataHis.json'
export default function HistoryView (props){
    const dataproyecto = data.proyectos;
    return(
        <section className={`${props.display ? '' : 'hidden'} motion-safe:animate-fadeIn w-5/6 sm:w-4/6 2xl:w-3/6 m-auto flex flex-col gap-10 justify-center py-44`} id='historian'>
            <h2 className="col-span-2 text-5xl 2xl:text-6xl underline decoration-azul font-bold text-center sm:text-start font-pompi">Somethings I've written.</h2>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                { dataproyecto.map((proyect, index)=> {
                    return(
                        <ProojectHistory img={proyect.img} key={index} titulo={proyect.name} description={proyect.description} pdf={proyect.pdf}/>
                    )
                })}
            </div>
        </section>
    )
}