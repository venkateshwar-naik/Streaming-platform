import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <>
      <div className="signup">
        <h1>Sign In</h1>
        <form id="form">
          <input type="text" placeholder="Email or number" />
          <input type="password" placeholder="password" />
          <button className="btn"> SignIn</button>
        </form>
        <div className="opt">
          <h3>Remember me</h3>
          <h3> Need help?</h3>
        </div>

        <div className="new">
          <h3>New to netflix? SIGN Up</h3>
          <p>This page is protected by google to ensure you are not a bot </p>
        </div>
      </div>
    </>
  );
};

export default Login;
