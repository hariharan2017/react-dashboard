import { Dashboard, Group, Store, Inventory, LocalShipping, Equalizer, Settings, AccountBox, Logout } from "@mui/icons-material";
// import { sidebarItems } from "./config";
import "./Sidebar.scss";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="side-bar-container">
      <div className="logo-container">Dashboard</div>
      <div className="main-items-container">
        <div className="group-container">
          <div>Main</div>
          <Link to="/">
          <div className="group-item">
            <Dashboard className="group-item-icon"/>
            <div className="group-item-title">Dashboard</div>
          </div>
          </Link>
        </div>
        <div className="group-container">
          <div>Lists</div>
          <Link to="/users">
          <div className="group-item">
            <Group className="group-item-icon"/>
            <div className="group-item-title">Users</div>
          </div>
          </Link>
          <div className="group-item">
            <Store className="group-item-icon"/>
            <div className="group-item-title">Products</div>
          </div>
          <div className="group-item">
            <Inventory className="group-item-icon"/>
            <div className="group-item-title">Orders</div>
          </div>
          <div className="group-item">
            <LocalShipping className="group-item-icon"/>
            <div className="group-item-title">Delivery</div>
          </div>
        </div>
        <div className="group-container">
          <div>User</div>
          <div className="group-item">
            <Equalizer className="group-item-icon"/>
            <div className="group-item-title">Stats</div>
          </div>
          <div className="group-item">
            <Settings className="group-item-icon"/>
            <div className="group-item-title">Settings</div>
          </div>
          <div className="group-item">
            <AccountBox className="group-item-icon"/>
            <div className="group-item-title">Profile</div>
          </div>
          <div className="group-item">
            <Logout className="group-item-icon"/>
            <div className="group-item-title">Logout</div>
          </div>
        </div>
      </div>
      <div className="group-container">
        <div>Theme</div>
        <div className="theme-group">
          <div className="white-box"></div>
          <div className="black-box"></div>
        </div>
      </div>
    </div>
  );
}
 
export default Sidebar;