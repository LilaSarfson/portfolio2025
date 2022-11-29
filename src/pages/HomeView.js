import ProfileApp from "../components/ProfileApp";
import CardText from "../components/CardText";
import ListChoice from "../components/ListChoice";
import MenuApp from "../components/MenuApp";
import profileData from '../data/profileData.json'
import ButtonCv from "../components/ButtonCv";
import perfil from '../assets/perfil1910.svg'
import { useState } from "react";
export default function HomeView (){
    const [activeAbout, setAboutActive]= useState(false);
    const [activeCV, setActiveCV]=useState(false)
    const data = profileData[0]
   return( 
   <div className="flex flex-col items-center w-full h-full justify-between text-2xl">
        <div className="flex flex-col justify-center w-full h-4/6 items-center gap-10">
            <ProfileApp fontSize={'text-6xl'} src={perfil}/>
            { activeCV ?
            <ButtonCv setActive={setActiveCV} title={data.cv}/>
            :
            <CardText description={activeAbout ? data.descripcion : data.presentacion} />
            }
        </div>
        <div className=" h-3/6 flex flex-col justify-between w-full">
            <ListChoice/>
            <MenuApp setActiveCV={setActiveCV} setActive={setAboutActive} direction={'flex-row'} directionLi={'flex-col'}/>
        </div>
    </div>
    )
}