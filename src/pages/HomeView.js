import ProfileApp from "../components/ProfileApp";
import ListChoice from "../components/ListChoice";
import perfil from '../assets/perfil1910.svg'
export default function HomeView (){
   return( 
   <section className="w-5/6 sm:w-3/6  m-auto sm:py-60">
        <div className="flex flex-col items-center h-full gap-4 sm:gap-24">
            <div className="flex flex-col justify-center w-full h-4/6 items-center mt-4 font-narko">
                <ProfileApp src={perfil}/>
            </div>
            <div className=" h-3/6 items-center w-full">
                <ListChoice/>
            </div>
        </div>
    </section> 
    )
}