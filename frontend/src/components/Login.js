//sdf
import '../App.css';
import React from 'react';
import {useState} from 'react'
import axios from 'axios';
import {useNavigate } from 'react-router-dom';
function Login() {

  const [email,SetEmail]=useState();
  const [password,SetPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post('http://localhost:8000 /login',{email,password})
    .then (result=>{console.log(result)
     if(result.data==="success"){
      console.log("hello")
      navigate('/')
     }
     else{
      alert("Invalid Credentials")
     }
    })
    .catch(e=>console.log(e))

  }

  return (
    
    <div className="login-container">
      <div className="avatar-container">
        <img
          src="https://via.placeholder.com/80"
          alt="Avatar"
          className="avatar"
        />
      </div>
      <h2 className="login-title">Member Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <span className="input-icon">
            <i className="fas fa-user"></i>
          </span>
          <input
            type="email"
            placeholder="Email"
            onChange={(e)=>SetEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <span className="input-icon">
            <i className="fas fa-lock"></i>
          </span>
          <input
            type="password"
            placeholder="Password"
            onChange={(e)=>SetPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-btn">Login</button>
        <div className="login-options">
          <label>
            <input type="checkbox" /> Remember me?
          </label>
          <a href="/" className="forgot-password">Forgot Password?</a>
        </div>
      </form>
      <div className="register-option">
        <p>Don’t have an account? <a href="/register">Register here</a></p>
      </div>
    </div>
  );
}

export default Login;
