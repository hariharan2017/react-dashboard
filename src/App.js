import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Datagrid from "./components/Datagrid";
import Login from "./components/Login";
import { DARK_MODE } from "./constants/constants";

import "./App.scss";
import "./styles/dark.scss"

function App() {
  const { theme } = useSelector((state) => state.application.app);
  
  return (
    <BrowserRouter>
      <div className={theme === DARK_MODE ? "app-container dark" : "app-container"}>
        <Sidebar />
        <div className="main-container">
          <Navbar />
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="users" element={<Datagrid />}></Route>
            </Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
