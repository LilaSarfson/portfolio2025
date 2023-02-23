import HomeView from "./pages/HomeView";
import AboutMe from "./pages/AboutMeView";
import FooterApp from './components/FooterApp'
import ContactView from "./pages/ContactView";
import DeveloperView from "./pages/DeveloperView";
import SideBar from "./components/SideBar";
import HistoryView from "./pages/HistoryView";
import './index.css'
import { useState } from "react";
function App() {
  const [display, setDisplay]= useState(false)
  const getChildData=(val) =>{
    setDisplay(val)

  }
  return (
    <div className="App relative">
      <SideBar estado='hidden lg:block' itemsDirection='items-end' position='fixed right-0' tamano='w-2/6 h-full' direccion='flex-col' />
      <HomeView
      display={getChildData}
      />
      <AboutMe/>
      <DeveloperView/>
      <HistoryView
      display = {display}
      />
      <ContactView/>
      <FooterApp/>
    </div>
  );
}

export default App;
