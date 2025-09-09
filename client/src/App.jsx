import React from 'react'
import Home from './Pages/Home'
import Course from './Pages/Course'
import {Routes,Route,Navigate} from "react-router-dom"
import Contact from './Pages/Contact'
import About from './Pages/About'
import  { Toaster } from 'react-hot-toast';
import Signup from './components/Signup'
import { useAuth } from './context/AuthProvider'

function App() {
    const [authUser,setAuthUser]=useAuth();
  console.log(authUser);
  return (
    <>
    {/* <Home/>
    <Course/> */}
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/course" element={authUser?<Course/>:<Navigate to="/signup"/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/signup" element={<Signup/>}/>

    </Routes>
     <Toaster/>
    </>
  )
}

export default App
