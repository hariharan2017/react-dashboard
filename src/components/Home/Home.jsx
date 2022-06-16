import Widget from "../Widget";
import Featured from "../Featured";
import Chart from "../Chart";
import { widgetsData } from "./config";
import "./Home.scss";

const featuredData = {
  title: "Total Revenue",
  percentage: "76",
  heading: "Total sales made today",
  content: "$420",
  message: "Previous transactions processing. Last payments may not be included."
}

const Home = () => {
  return (
    <div>
      <div className="widget-container">
        {widgetsData.map(({ title, data, icon }) => {
          return <Widget title={title} data={data} icon={icon}/>
        })}
      </div>
      <div className="main-charts-container">
        <Featured {...featuredData}/>
        <Chart />
      </div>
    </div>
  );
}
 
export default Home;