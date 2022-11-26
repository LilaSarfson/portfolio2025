import ProfileApp from "../components/ProfileApp";
import CardText from "../components/CardText";
import ListChoice from "../components/ListChoice";
import MenuApp from "../components/MenuApp";
export default function HomeView (){
   return( 
   <div className="flex flex-col items-center w-full h-full justify-between text-2xl">
        <div className="flex flex-col justify-center w-full h-5/6 items-center gap-10">
            <ProfileApp/>
            <CardText description={'Every journey begins with a choice!'} />
        </div>
        <div className=" h-2/6 flex flex-col justify-between w-full">
            <ListChoice/>
            <MenuApp direction={'flex-row'} directionLi={'flex-col'}/>
        </div>
    </div>
    )
}