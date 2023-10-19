import HomeView from "./pages/HomeView";
import AboutMe from "./pages/AboutMeView";
import FooterApp from './components/FooterApp'
import ContactView from "./pages/ContactView";
import DeveloperView from "./pages/DeveloperView";
import SideBarMenu from "./components/SideBarMenu";
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
      <SideBarMenu estado='hidden lg:flex'/>
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
