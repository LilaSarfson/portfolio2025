import ProfileApp from "../components/ProfileApp";
import ListChoice from "../components/ListChoice";
import perfil from '../assets/perfil1910.svg'
export default function HomeView (){
   return( 
   <div className="w-full h-full mb-28 sm:mb-0">
        <div className="flex flex-col items-center w-4/6 h-full m-auto gap-24">
            <div className="flex flex-col justify-center w-full h-4/6 items-center mt-8 font-narko">
                <ProfileApp src={perfil}/>
            </div>
            <div className=" h-3/6 items-center w-full">
                <ListChoice/>
            </div>
        </div>
    </div> 
    )
}