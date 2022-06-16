import Widget from "../Widget";
import { widgetsData } from "./config";
import "./Home.scss";

const Home = () => {
  return (
    <div>
      <div className="widget-container">
        {widgetsData.map(({ title, data, icon }) => {
          return <Widget title={title} data={data} icon={icon}/>
        })}
      </div>
    </div>
  );
}
 
export default Home;