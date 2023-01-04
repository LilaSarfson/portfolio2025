import HomeView from "./pages/HomeView";
import AboutMe from "./pages/AboutMeView";
import IconMenu from "./components/IconMenu";
import FooterApp from './components/FooterApp'
import ContactView from "./pages/ContactView";
import DeveloperView from "./pages/DeveloperView";
import SideBar from "./components/SideBar";
import './index.css'
function App() {
  return (
    <div className="App relative">
      {/* <IconMenu/> */}
      <SideBar/>
      <HomeView/>
      <AboutMe/>
      <DeveloperView/>
      <ContactView/>
      <FooterApp direction={'flex-row'} directionLi={'flex-row'}/>
    </div>
  );
}

export default App;
