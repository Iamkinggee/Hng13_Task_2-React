import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Header from '../components/Header';
import Stat from '../components/Stat';

function Home() {
    const data = useLocation();
    const navigate = useNavigate()
    console.log(data)
  return (
    <div className='w-full'>

      <div className=' flex  p-2 justify-evenly '>

      <div>
        <p className='text-black font-bold justify-center items-center text-center text-xl'>Welcome, </p>
        <p >{data.state}</p>
      
      </div>


      <div><Header/></div>


      <div><button className='font-bold text-white p-2 rounded bg-red-700' onClick={()=>navigate('/')}>Logout</button></div>


      </div>




      <div>
        <Stat/>
      </div>

      


   














    </div>
  )
}

export default Home
