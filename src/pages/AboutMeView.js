import perfil from '../assets/perfil1910.svg'
export default function AboutMe (){
    return(
        <section className="h-full flex align-start justify-center flex-col w-3/6 m-auto gap-4 font-pompi " id='about'>
            <div className='flex flex-row'>
                <div className=' flex flex-col gap-4 w-4/6'>
                    <h2 className="text-5xl w-3/6 underline decoration-rojo font-bold">About me.</h2>
                    <p className="text-3xl">Empecé e la programación hace poco más de un año, a través de un cursillo de diseño de páginas web. Muy brevemente me introduje en el mundillo del frontEnd y me quedé con ganas de más. </p>
                    <p className="text-3xl">M'as cosas que ahora mismo no me salen porque redactar sobre uno mismo es muy complejo y absurdo</p>
                    <p className="text-3xl">Tecnolog'ias que estoy usando actualmente:</p>
                </div>  
                <div className='w-2/6 self-center border-2 border-solid border-rojo rotate-12'>
                    <img className='rotate-0 ' src={perfil}/>
                </div> 
            </div>
            <ul className='font-mono flex flex-row gap-8'>
                <li>React.js</li>
                <li>Vue.js</li>
                <li>Redux</li>
                <li>Python</li>
                <li>Tailwind</li>
            </ul>
        </section>
    )
}