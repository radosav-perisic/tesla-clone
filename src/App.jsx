import Accessories from "./components/Accessories";
import ArrowDown from "./components/ArrowDown";
import Model3 from "./components/Model3";
import ModelS from "./components/ModelS";
import ModelX from "./components/ModelX";
import ModelY from "./components/ModelY";
import Navbar from "./components/Navbar";
import SolarPanels from "./components/SolarPanels";
import SolarRoof from "./components/SolarRoof";

function App() {
  return (
    <div >
      <Navbar />
      <div className="snap-y snap-mandatory overflow-auto h-screen">
      <ModelY />
      <ArrowDown />
      <Model3 />
      <ModelS />
      <ModelX />
      <SolarPanels />
      <SolarRoof />
      <Accessories />
      </div>
    </div>
  );
}

export default App;
