import { useState } from 'react'
import { Link } from 'react-router-dom'
// import Signup from './Signup.jsx'

const Signup = () => {

  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  const handleInputChange = (e) => {
    setSignupData({
      ...signupData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className='flex flex-col justify-center m-auto items-center min-h-screen'>

  <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend className="fieldset-legend">Signup</legend>

  <label className="label">Full Name</label>
  <input type="text" name='fullName' className="input" placeholder="Enter Full Name" onChange={handleInputChange} />

  <label className="label">Email</label>
  <input type="email" name='email' className="input" placeholder="Email" onChange={handleInputChange} />

  <label className="label">Password</label>
  <input type="password" name='password' className="input" placeholder="Password" onChange={handleInputChange}/>

  <label className="label">Comfirm Password</label>
  <input type="password" name='confirmPassword' className="input" placeholder="Confirm Password" onChange={handleInputChange} />

  <button className="btn btn-neutral mt-4">Signup</button>
  <p>Already have an account ! <Link to= '/Login' className='text-blue-400 underline'>Login</Link></p>
  </fieldset>
    </div>
  )
}

export default Signup