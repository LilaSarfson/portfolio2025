import HomeView from "./pages/HomeView";
import AboutMe from "./pages/AboutMeView";
import FooterApp from './components/FooterApp'
import ContactView from "./pages/ContactView";
import DeveloperView from "./pages/DeveloperView";
import SideBarMenu from "./components/SideBarMenu";
import CustomCursor from './components/CustomCursor'
import './index.css'
import { useState } from "react";
function App() {
  const [display, setDisplay]= useState(false)
  const getChildData=(val) =>{
    setDisplay(val)

  }
  return (
    <div className="App transition-colors duration-1000  bg-amarillo dark:bg-purpura dark:text-blancoRoto min-h-screen relative  motion-safe:animate-fadeIn">
      <CustomCursor/>
      <SideBarMenu estado='hidden lg:flex'/>
      <HomeView
      display={getChildData}
      />
      <AboutMe/>
      <DeveloperView/>
      <ContactView/>
      <FooterApp/>
    </div>
  );
}

export default App;
