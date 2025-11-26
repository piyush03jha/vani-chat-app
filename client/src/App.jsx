import './App.css'
import { Route, Routes, } from 'react-router-dom'
import Login from './pages/authentication/Login'
import Home from './pages/home/Home'
import Signup from './pages/authentication/Signup'

function App() {

  return (
    <div>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Home />} />

    </Routes>
    </div>
  )
}

export default App
