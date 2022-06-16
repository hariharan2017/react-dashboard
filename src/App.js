import "./App.scss";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-container">
        <Navbar />
        <Home />
      </div>
    </div>
  );
}

export default App;
