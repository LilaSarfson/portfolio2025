
export default function ProojectHistory (props){
    return(   
        <div className="font-rale border-solid border-2 border-black flex flex-col justify-btweeen max-h-100">
                <div className='flex flex-row gap-4 p-2 bg-azul border-solid border-b-2 border-black max-h-20'>
                    <img className='w-2/12' src={`Articles/${props.img}`}/>
                    <h3 className="font-bold font-narko self-center text-2xl ">{props.titulo}</h3>
                </div>
                <div className='p-4 bg-oscuro'>
                    <p className='text-start p-2 text-sm sm:text-lg'>{props.description}</p>
                    <button className="bg-azul font-bold w-1/3 self-center drop-shadow-md font-narko"><a href={props.pdf} target='_blank'>PDF</a></button>
                </div>
        </div>
    )
}