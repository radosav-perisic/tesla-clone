import Accessories from "./components/Accessories";
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
      <Model3 />
      <ModelY />
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
