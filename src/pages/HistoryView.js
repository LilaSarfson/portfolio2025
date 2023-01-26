
import ProojectHistory from "../components/ProjectHistory"
import data from '../data/dataHis.json'
export default function HistoryView (){
    const dataproyecto = data.proyectos;
    return(
        <section className="motion-safe:animate-fadeIn w-5/6 sm:w-3/6 m-auto flex flex-col gap-10 justify-center py-44" id='historian'>
            <h2 className="col-span-2 text-5xl 2xl:text-6xl underline decoration-azul font-bold text-center sm:text-start font-pompi">Somethings I've written.</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6">
                { dataproyecto.map((proyect, index)=> {
                    return(
                        <ProojectHistory key={index} titulo={proyect.name} description={proyect.description}/>
                    )
                })}
            </div>
        </section>
    )
}