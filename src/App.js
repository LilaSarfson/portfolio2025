import HomeView from "./pages/HomeView";
import AboutMe from "./pages/AboutMeView";
import IconMenu from "./components/IconMenu";
import MenuApp from './components/MenuApp'
import ContactView from "./pages/ContactView";
import DeveloperView from "./pages/DeveloperView";
import './index.css'
function App() {
  return (
    <div className="App relative">
      <IconMenu/>
      <HomeView/>
      <AboutMe/>
      <DeveloperView/>
      <ContactView/>
      <MenuApp direction={'flex-row'} directionLi={'flex-row'}/>
    </div>
  );
}

export default App;
