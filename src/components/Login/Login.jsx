import "./Login.scss";
import { useState } from "react";
import { actions } from "../../data/login";
import { useDispatch } from "react-redux";

const Login = () => {
  const [form, setForm] = useState({ username: null, password: null });
  const dispatch = useDispatch();

  const onTextChange = (event) => {
    const currentField = event.target.id;
    const currentValue = event.target.value;
    setForm({ ...form, [currentField]: currentValue });
  }

  return (
    <div className="login-container">
      <div className="card-container">
        <img src={"https://t3.ftcdn.net/jpg/03/39/70/90/360_F_339709048_ZITR4wrVsOXCKdjHncdtabSNWpIhiaR7.jpg"} height="250px" />
        <div>
          <input id="username" placeholder="Username" type={"text"} className="input-style" onChange={(event) => onTextChange(event)}/>
        </div>
        <div>
          <input id="password" placeholder="Password" type={"password"} className="input-style" onChange={(event) => onTextChange(event)}/>
        </div>
        <button className="button-style" onClick={() => {dispatch(actions.login(form))}}>Login</button>
      </div>
    </div>
  );
}
 
export default Login;