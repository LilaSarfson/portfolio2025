import article from '../assets/article.png'
export default function ProojectHistory (props){
    return(   
        <div className="font-mono border-solid border-2 border-black flex flex-col justify-btweeen">
                <div className='flex flex-row gap-4 p-2 bg-azul border-solid border-b-2 border-black '>
                    <img className='w-2/12' src={article}/>
                    <h3 className="font-bold self-center text-sm sm:text-base">{props.titulo}</h3>
                </div>
                <div className='p-4 bg-oscuro'>
                    <p className='text-start p-2 text-sm sm:text-base'>{props.description}</p>
                    <button className="bg-azul font-bold w-1/3 self-center drop-shadow-md font-pompi"><a href='ww.google.es'>PDF</a></button>
                </div>
        </div>
    )
}