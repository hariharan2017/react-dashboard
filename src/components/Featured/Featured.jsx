import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import "./Featured.scss";

const Featured = ({ title, percentage = 0, heading, message, content, items }) => {
  return (
    <div className="featured-container">
      <div className="featured-title-container">
        <div>{title}</div>
        <div><MoreVertOutlinedIcon /></div>
      </div>
      <CircularProgressbar value={percentage} text={`${percentage}%`} className="featured-progress-bar"/>
      <div className="featured-heading">{heading}</div>
      <div className="featured-content">{content}</div>
      <div className="featured-message">{message}</div>
    </div>
  );
}
 
export default Featured;