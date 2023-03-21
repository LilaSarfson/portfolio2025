
export default function ProojectHistory (props){
    return(   
        <div className="font-rale border-solid border-2 border-black flex flex-col justify-btweeen ">
                <div className='flex flex-row gap-4 p-2 bg-azul border-solid border-b-2 border-black max-h-20'>
                    <img className='w-16'  src={`/portfoliowebLila/Articles/${props.img}`}/>
                    <h3 className="font-bold font-narko self-center text-2xl 2xl:text-3xl  ">{props.titulo}</h3>
                </div>
                <div className='p-4 bg-oscuro'>
                    <p className='text-start p-2 sm:text-lg'>{props.description}</p>
                    <button className="bg-azul self-start w-3/6 drop-shadow-md font-narko"><a className='p-2 text-lg' href={props.pdf} target='_blank'>PDF</a></button>
                </div>
        </div>
    )
}