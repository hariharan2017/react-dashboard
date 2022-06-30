import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Datagrid from "./components/Datagrid";
import Login from "./components/Login";
import { history } from "./utils/history";
import { DARK_MODE } from "./constants/constants";

import "./App.scss";
import "./styles/dark.scss"

function App() {
  const { theme } = useSelector((state) => state.application.app);
  const { loggedIn } = useSelector((state) => state.authentication);

  if(!loggedIn) {
    history.push("/");
  }
  
  return (
    <BrowserRouter>
      <div className={theme === DARK_MODE ? "app-container dark" : "app-container"}>
        {loggedIn && <Sidebar />}
        <div className="main-container">
          {loggedIn && <Navbar />}
          <Routes history={history}>
            <Route path="/">
              {!loggedIn && <Route index element={<Login />} />}
              {loggedIn && <Route path="home" element={<Home />} />}
              {loggedIn && <Route path="users" element={<Datagrid />} />}
            </Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
