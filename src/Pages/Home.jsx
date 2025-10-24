import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function Home() {
    const data = useLocation();
    const navigate = useNavigate()
    console.log(data)
  return (
    <div>
      <h1 className='text-red-800'>dashboard   {data.state}</h1><br/>
      <button onClick={()=>navigate(-1)}>Logout</button>
    </div>
  )
}

export default Home
