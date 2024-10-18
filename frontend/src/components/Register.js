
import '../App.css';
import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
function Register() {
 const [name,SetName] = useState()
 const [email,SetEmail] = useState()
 const [password,SetPassword] = useState()
  const navigate =useNavigate();

  const handleSubmit = (e)=>{
    e.preventDefault();
    axios.post('http://localhost:8000/register',{name,email,password})
    .then(result =>{console.log(result)
      navigate('/login')
    })
    .catch(e => console.log(e))

  }

  return (

    <div className="register-container">
      <h2 className="register-title">Register</h2>
     
      <form className="register-form"  onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            onChange={(e)=> SetName(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={(e)=> SetEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e)=> SetPassword(e.target.value)}
            required
          />
        </div>
        
        <button type="submit" className="register-btn">Register</button>
      </form>
      <div className="register-options">
        <p>Already have an account? <a href="/login">Login here</a></p>
        <p><a href="/">Terms of Service</a></p>
      </div>
    

    </div>
  );
}

export default Register;
