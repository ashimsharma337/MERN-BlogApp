import Home from "./components/pages/home/Home";
import Single from "./components/pages/single/Single";
import Write from "./components/pages/write/Write";
import Topbar from "./components/topbar/Topbar";
import Setting from "./components/pages/settings/Settings";


function App() {
  return (
    <div className="App">
      <Topbar/>
      <Setting/>
    </div>
  );
}

export default App;
