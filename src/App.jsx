import React from 'react'
import Home from './Pages/Home'
import Form from './Pages/Form'
import {Routes, Route, Link} from "react-router-dom"

function App() {
  return (
    <>
    {/* <nav>
      <Link to='/'>Home</Link>
    </nav> */}


    <Routes>
      <Route path='/' element={<Form/>}/>
      <Route path='/home' element={<Home/>}/>
    </Routes>

      
    </>
  )
}

export default App
