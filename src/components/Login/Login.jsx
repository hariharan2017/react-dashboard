import "./Login.scss";

const Login = () => {
  return (
    <div className="login-container">
      <div className="card-container">
        <img src={"https://t3.ftcdn.net/jpg/03/39/70/90/360_F_339709048_ZITR4wrVsOXCKdjHncdtabSNWpIhiaR7.jpg"} height="250px" />
        <div>
          <input placeholder="Username" type={"text"} className="input-style"/>
        </div>
        <div>
          <input placeholder="Password" type={"password"} className="input-style"/>
        </div>
        <button className="button-style">Login</button>
      </div>
    </div>
  );
}
 
export default Login;