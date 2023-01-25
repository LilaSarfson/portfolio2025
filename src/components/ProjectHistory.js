import article from '../assets/article.png'
export default function ProojectHistory (props){
    return(   
        <div className="font-mono bg-amarillOscuro border-solid border-2 border-black p-6 flex flex-col justify-around">
                <div className='flex flex-row gap-4 p-2'>
                    <img className='w-2/12' src={article}/>
                    <h3 className="font-bold self-center">{props.titulo}</h3>
                </div>
                <p className='text-start p-2'>{props.description}</p>
                <button className="bg-azul font-bold w-1/3 self-center drop-shadow-md font-pompi"><a href='ww.google.es'>PDF</a></button>
        </div>
    )
}