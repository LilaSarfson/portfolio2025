import HomeView from "./pages/HomeView";
import AboutMe from "./pages/AboutMeView";
import FooterApp from './components/FooterApp'
import ContactView from "./pages/ContactView";
import DeveloperView from "./pages/DeveloperView";
import SideBar from "./components/SideBar";
import HistoryView from "./pages/HistoryView";
import './index.css'
function App() {
  return (
    <div className="App relative">
      <SideBar estado='hidden lg:block' itemsDirection='items-end' position='fixed right-0' tamano='w-2/6 h-full' direccion='flex-col' />
      <HomeView/>
      <AboutMe/>
      <DeveloperView/>
      <HistoryView/>
      <ContactView/>
      <FooterApp/>
    </div>
  );
}

export default App;
