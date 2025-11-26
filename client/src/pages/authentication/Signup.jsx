import { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {

const [signupData, setSignupData] = useState({
  fullName:"",
  email:"",
  password:"",
  confirmPassword:"",
})

const handleInputChange = (e) => {
    setSignupData({
      [e.target.name]: e.target.value
    })
};










  return (
  <div className='flex items-center justify-center h-screen '>
  <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend className="fieldset-legend text-xl font-semibold">Signup</legend>

  <label className="label">Name</label>
  <input type="name" className="input" name='fullName' onChange={handleInputChange} placeholder="Full Name"  />

  <label className="label">Email</label>
  <input type="email" className="input" name='email' onChange={handleInputChange} placeholder="Email" />

  <label className="label">Password</label>
  <input type="password" className="input" name='password' onChange={handleInputChange} placeholder="Password" />

  <label className="label"> Confirm Password</label>
  <input type="password" className="input" name='confirmPassword' onChange={handleInputChange} placeholder="Confirm Password" />

  <button className="btn btn-neutral mt-4">Signup</button>
  <p>Already have an account? <Link to="/login" className="text-blue-500 underline">Login</Link></p>
  </fieldset>
</div>
  )
}

export default Signup