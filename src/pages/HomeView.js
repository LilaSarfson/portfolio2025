import ProfileApp from "../components/ProfileApp";
import ListChoice from "../components/ListChoice";
import MenuApp from "../components/MenuApp";
import profileData from '../data/profileData.json'
import ButtonCv from "../components/ButtonCv";
import perfil from '../assets/perfil1910.svg'
import { useState } from "react";
export default function HomeView (){
    const [activeCV, setActiveCV]=useState(false)
    const data = profileData[0]
   return( 
   <div className=" w-full h-full">
    <div className="flex flex-col items-center w-4/6 h-full justify-between text-2xl m-auto">
            <div className="flex flex-col justify-center w-full h-4/6 items-center gap-10 font-narko">
                <ProfileApp fontSize={'text-8xl'} src={perfil}/>
                <ButtonCv active={activeCV} title={data.cv}/>
            </div>
            <div className=" h-3/6 flex flex-col justify-between items-center w-full">
                <ListChoice/>
                <MenuApp setActiveCV={setActiveCV} direction={'flex-row'} directionLi={'flex-row'}/>
            </div>
        </div>
    </div> 
    )
}