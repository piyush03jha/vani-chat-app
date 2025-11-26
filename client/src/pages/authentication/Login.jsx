import React, { useState } from 'react'
import { MdEmail, MdPassword } from "react-icons/md";
import { Link } from 'react-router-dom';

const Login = () => {

const [loginData, setLoginData] = useState({
  email:"",
  password:"",
  
});

const handleInputChange = (e) =>{
  setLoginData({
    [e.target.name]: e.target.value
  })
};






  return (
    <div className='flex items-center justify-center h-screen '>
  <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend className="fieldset-legend text-xl font-semibold">Login</legend>

  <label className="label">Email</label>
  <input type="email" className="input" name='email' placeholder="Email" onChange={handleInputChange}/>

  <label className="label">Password</label>
  <input type="password" className="input" name='password' placeholder="Password" onChange={handleInputChange} />

  <button className="btn btn-neutral mt-4">Login</button>
  <p>Don't have an account? <Link to="/signup" className="text-blue-500 underline">Sign up</Link></p>
  </fieldset>
</div>
  )
}

export default Login