import {Routes, Route } from "react-router";
import HomeView from "./pages/HomeView";
import DeveloperView from'./pages/DeveloperView'
import HistoryView from './pages/HistoryView'
import './index.css'
function App() {
  return (
    <div className="App bg-amarillo">
      <Routes>
          <Route path="/" element={<HomeView />} />
          <Route  path="developer" element={<DeveloperView/>} /> 
          <Route  path="history" element={<HistoryView/>} /> 
    </Routes>
    </div>
  );
}

export default App;
