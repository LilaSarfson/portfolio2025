export default function CardText (props){
    return(
            <div className="border-4 rounded-xl border-dashed border-black p-8 border-black bg-white text-center w-6/6 "> 
                <p className='font-poke'>{props.description}</p>
            </div>
    )
}