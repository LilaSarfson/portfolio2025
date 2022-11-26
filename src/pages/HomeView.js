import ProfileApp from "../components/ProfileApp";
import CardText from "../components/CardText";
import ListChoice from "../components/ListChoice";
import MenuApp from "../components/MenuApp";
export default function HomeView (){
   return( 
   <div className="flex flex-col items-center w-full h-full justify-between text-xl">
    <ProfileApp/>
    <CardText description={'Every journey begins with a choice!'} />
    <ListChoice/>
    <MenuApp direction={'flex-row'} directionLi={'flex-col'}/>
    </div>
    )
}