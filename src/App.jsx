import Accessories from "./components/Accessories";
import Cybertruck from "./components/Cybertruck";
import Model3 from "./components/Model3";
import ModelS from "./components/ModelS";
import ModelX from "./components/ModelX";
import ModelY from "./components/ModelY";
import Navbar from "./components/Navbar";
import Powerwall from "./components/Powerwall";
import SolarPanels from "./components/SolarPanels";
import SolarRoof from "./components/SolarRoof";

function App() {

  return (
    <div >
      <Navbar />
      <div className="snap-y snap-mandatory overflow-auto h-screen">
      <Model3 />
      <ModelY />
      <ModelX />
      <ModelS />
      <Cybertruck />
      <SolarPanels />
      <SolarRoof />
      <Powerwall />
      <Accessories />
      </div>
    </div>
  );
}

export default App;
