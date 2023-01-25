import ProfileApp from "../components/ProfileApp";
import ListChoice from "../components/ListChoice";
import perfil from '../assets/perfil1910.svg'
export default function HomeView (){
   return( 
   <section className="w-3/6  m-auto h-full mb-28 sm:mb-0">
        <div className="flex flex-col items-center h-full gap-24">
            <div className="flex flex-col justify-center w-full h-4/6 items-center mt-8 font-narko">
                <ProfileApp src={perfil}/>
            </div>
            <div className=" h-3/6 items-center w-full">
                <ListChoice/>
            </div>
        </div>
    </section> 
    )
}