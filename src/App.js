import HomeView from "./pages/HomeView";
import AboutMe from "./pages/AboutMeView";
import IconMenu from "./components/IconMenu";
import MenuApp from './components/MenuApp'
import './index.css'
function App() {
  return (
    <div className="App relative">
      <IconMenu/>
      <HomeView/>
      <AboutMe/>
      <MenuApp direction={'flex-row'} directionLi={'flex-row'}/>
    </div>
  );
}

export default App;
