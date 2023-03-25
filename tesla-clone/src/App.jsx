import Model3 from "./components/Model3";
import ModelS from "./components/ModelS";
import ModelX from "./components/ModelX";
import ModelY from "./components/ModelY";
import Navbar from "./components/Navbar";
import SolarPanels from "./components/SolarPanels";

function App() {
  return (
    <div >
      <Navbar />
      <Model3 />
      <ModelY />
      <ModelS />
      <ModelX />
      <SolarPanels />
    </div>
  );
}

export default App;
