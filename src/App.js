import HomeView from "./pages/HomeView";
import AboutMe from "./pages/AboutMeView";
import IconMenu from "./components/IconMenu";
import './index.css'
function App() {
  return (
    <div className="App relative bg-amarillo">
      <IconMenu/>
      <HomeView/>
      <AboutMe/>
    </div>
  );
}

export default App;
