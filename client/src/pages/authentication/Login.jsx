import { Link } from 'react-router-dom'
import Signup from './Signup.jsx'
import { useState } from 'react'

const Login = () => {

  const [loginData, setLoginData] = useState({
      email: "",
      Password: ""
  })

  const handleInputChange = (e) => {
    console.log(e.target.value);
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className='flex flex-col justify-center m-auto items-center min-h-screen'>

  <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend className="fieldset-legend">Login</legend>

  <label className="label">Email</label>
  <input type="email" name="email" className="input" placeholder="Email" onChange={handleInputChange}/>

  <label className="label">Password</label>
  <input type="password" name="password" className="input" placeholder="Password" onChange={handleInputChange} />

  <button className="btn btn-neutral mt-4">Login</button>
  <p>Don't have an account? <Link to= '/Signup' className='text-blue-400 underline'>Signup</Link></p>
  </fieldset>
    </div>
  )
}

export default Login