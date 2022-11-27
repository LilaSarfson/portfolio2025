import ProfileApp from "../components/ProfileApp";
import CardText from "../components/CardText";
import ListChoice from "../components/ListChoice";
import MenuApp from "../components/MenuApp";
import profileData from '../data/profileData.json'
import { useState } from "react";
export default function HomeView (){
    const [activeAbout, setAboutActive]= useState(false);
    const [activeCV, setActiveCV]=useState(false)
    const data = profileData[0]
   return( 
   <div className="flex flex-col items-center w-full h-full justify-between text-2xl">
        <div className="flex flex-col justify-center w-full h-5/6 items-center gap-10">
            <ProfileApp/>
            <CardText active={activeCV} description={activeAbout ? data.descripcion : activeCV ? data.cv : data.presentacion} />
        </div>
        <div className=" h-2/6 flex flex-col justify-between w-full">
            <ListChoice/>
            <MenuApp setActiveCV={setActiveCV} setActive={setAboutActive} direction={'flex-row'} directionLi={'flex-col'}/>
        </div>
    </div>
    )
}