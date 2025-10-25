import React from 'react'
import Home from './Pages/Home'
import Form1 from './Pages/Form1'
import Hero from './Pages/Hero'
import {Routes, Route, Link} from "react-router-dom"


function App() {
  return (
    <>
  


    <Routes>
   <Route path='/' element={<Form1/>}/> 
    {/* <Route path='/' element={<Hero/>}/> */}
      <Route path='/home' element={<Home/>}/>
    </Routes>

      
    </>
  )
}

export default App
