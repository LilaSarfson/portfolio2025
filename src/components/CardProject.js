// import Est from '../assets/Est-03.svg'
export default function CardProject (props) {
    return(
        <div>
            <div className="w-5/6 h-3/6 flex flex-row items-center gap-4 border-4 rounded-bl-full rounded-tl-full border-solid border-black p-8 border-black bg-white m-auto">
                <div className='bg-verde rounded-full border-full w-10 h-10 self-center'></div>
                <h3 className="font-poke">"{props.title}</h3>
            </div>
            {/* <div>
            <p className=" w-full rotate-90 font-poke">></p>
            </div> */}
        </div>
    )
}