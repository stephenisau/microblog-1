import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import LoginForm from '../Forms/LoginForm';
import RegisterForm from '../Forms/RegisterForm';
import { Link } from 'react-router-dom';
import "./Login.css";

const Login = (props) => {

  const [login, toggleLogin] = useState(true);
  const dispatch = useDispatch();

  console.log("props in login: ", props);
  const toggleLoginOn = () => {
    toggleLogin(true);
  };

  const toggleRegisterOn = () => {
    toggleLogin(false)
  }


  const { registerUser, loginUser } = props;

  const loginWithUserCredentials = ({ username, password }) => {
    dispatch(loginUser({ username, password }));
  };

  const registerUserCredentials = ({ username, email, password, passwordConfirmation }) => {
    if (password !== passwordConfirmation) {
      // do some client-side validation.
    }
    let registration = { username, email, password, passwordConfirmation };
    dispatch(registerUser(registration));
  }


  return (
    <>
      <div className="login-box">
        <div className="login-header">
          <Link to="/login" onClick={toggleLoginOn} id={`login-box-link`} className={login ? "active" : null}>Login</Link>
          <Link to="/register" onClick={toggleRegisterOn} id="register-box-link" className={login ? null : "active"}>Register</Link>
        </div>
        {login ? <LoginForm login={loginWithUserCredentials} /> : <RegisterForm register={registerUserCredentials} />}
      </div>
    </>
  )

}
export default Login;