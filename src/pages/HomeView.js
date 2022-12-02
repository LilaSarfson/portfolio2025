import ProfileApp from "../components/ProfileApp";
import ListChoice from "../components/ListChoice";
import profileData from '../data/profileData.json'
import perfil from '../assets/perfil1910.svg'
export default function HomeView (){
    const data = profileData[0]
   return( 
   <div className=" w-full h-full">
    <div className="flex flex-col items-center w-4/6 h-full justify-between text-2xl m-auto">
            <div className="flex flex-col justify-center w-full h-4/6 items-center gap-10 font-narko">
                <ProfileApp fontSize={'text-8xl'} src={perfil}/>
            </div>
            <div className=" h-3/6 flex flex-col justify-between items-center w-full">
                <ListChoice/>
            </div>
        </div>
    </div> 
    )
}