import './App.css'
import {Route, Routes } from 'react-router-dom'
import Login from "./pages/login";
import Register from "./pages/register"
import Home from "./pages/home"
import Admin from "./pages/Admin"
import Loader from './pages/Loader';

function App() {
 

  return (
    <>
      <Routes>
      <Route   path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/Loader" element={<Loader/>}/>
      </Routes>
       
    </>
  )
}

export default App
