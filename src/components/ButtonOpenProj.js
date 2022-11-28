export default function ButtonOpenProj (){
    const OpenProject = (e)=> {
        let value = e.target.value
        console.log(value)
    }
    return(
        <>
        <button onClick={OpenProject} className="rotate-90">></button>
        </>
    )
}