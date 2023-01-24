import article from '../assets/article.png'
export default function ProojectHistory (props){
    return(   
        <div className="font-mono bg-azul w-full h-full p-6 flex flex-col justify-around">
                <div className='flex flex-row gap-4'>
                    <img className='w-2/12' src={article}/>
                    <h3 className="font-bold self-center text-lg">{props.titulo}</h3>
                </div>
                <p className='text-start p-2'>{props.description}</p>
                <button className="bg-white w-1/3 self-center">Read it!</button>
        </div>
    )
}