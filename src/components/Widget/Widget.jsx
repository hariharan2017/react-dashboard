import "./Widget.scss";
import { KeyboardArrowUp, KeyboardArrowDown } from "@mui/icons-material";

const Widget = ({ title, data, icon }) => {
  return (
    <div className="widget-item-container">
      <div className="widget-title-container">
        <div className="widget-title">{title}</div>
        <div className={`widget-change ${data.type === "positive" && "positive-data"} ${data.type === "negative" && "negative-data"}`}>
          {data.type === "positive" && <KeyboardArrowUp />}
          {data.type === "negative" && <KeyboardArrowDown />}
          <div>{data.change}</div>
        </div>
      </div>
      <div className="widget-data">
        {data.item}
      </div>
      <div className="widget-footer-container">
        <div className="widget-link">{data.link}</div>
        {icon}
      </div>
    </div>
  );
}
 
export default Widget;