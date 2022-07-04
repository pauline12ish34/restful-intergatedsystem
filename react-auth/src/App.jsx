import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from "react-router-dom";

import Home from './pages/Home'
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Authors from './pages/Authors';
function App() {
  return (
    <>
    <Navbar />
    <Routes>

      <Route path='/' index element={<Home />} />
      {/* <Route path='/about'  exact element={Home}></Route> */}
      {/* <Route path='/contact'  exact element={Home}></Route>*/}
    <Route path='/signup'  element={<SignUp />} /> 
      <Route path='/login'  element={<Login />} />
      <Route path='/authors' element={<Authors />} />
  
    </Routes>
</>  
   
  )
}

export default App
