import ProfileApp from "../components/ProfileApp";
import ListChoice from "../components/ListChoice";
import perfil from '../assets/perfil1910.svg'
export default function HomeView (props){
   return( 
   <section className="w-5/6 sm:h-full sm:w-4/6 2xl:w-4/6 m-auto sm:py-24">
        <div className="flex flex-col items-center h-full gap-8 sm:gap-18">
            <div className="flex flex-col justify-center w-full h-4/6 items-center mt-4 font-narko">
                <ProfileApp src={perfil}/>
            </div>
            <div className=" h-3/6 items-center w-full">
                <ListChoice
                displayToParent={props.display}  />
            </div>
        </div>
    </section> 
    )
}