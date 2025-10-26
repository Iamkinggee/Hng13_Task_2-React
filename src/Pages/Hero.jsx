import React from 'react'
import './Hero.css'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import manage from '../assets/manage.png'




function Hero() {
 

  return (

    < >
    <div class="h-full relative">
      
  <div class="custom-shape-divider-bottom-1761434110">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 110" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"  className="fill-green-600 "></path>
    </svg>
</div>
  <div className="flex flex-col p gap-20 md:flex-row h-[400px] md:pt-2.5 pt-10 justify-center items-center mt-20 mx-20 "> 
    
     
    <div class="flex-1 pt-10 mt-[10px]  items-center justify-center  px-10 h-[450px]  ">
      <h1 className='font-mono  text-black mb-6 md:text-[15px]  '>KingsTickets</h1>
      <p className='text-[20px] text-black mt-6'>
        Manage, track and resolve tickets effortlessly with our intuitive CRUD-based tickect management system. Create, update and organise issues - all in one place.</p>
      
     <div className='flex flex-col md:flex-row gap-5 mt-6'>






     
        <Link to="/Form1">
        <button  className='w-[250px] h-[60px] rounded text-[600px]  bg-green-600 text-white  border-2 border-green-600 font-bold ' variant="primary" >Login</button>
      </Link>


<Link to='/Form1'>
<button className='w-[250px] h-[60px] rounded text-2xl  text-black font-bold  border-2 border-green-600 text'>
        Get started
      </button>

</Link>
      
     </div>
 


      


    
    </div>

    {/* <div class="flex-1  flex items-center justify-center  text-2xl rounded-[100%] bg-gray-300 h-[400px]   ">

       <img src="https://readymadeui.com/signin-image.webp" className="w-full aspect-[15/15] object-contain" alt="login-image" />
    </div> */}
    <div className='bg-green-600 flex-1 items-center rounded-[100%] '>
      <div className='w-full aspect-[15/15] object-contain pt-'>

       <img
        src={manage}
        alt="Beautiful scenery"
        className="w-full aspect-[15/15] object-contain"
       
      />

       

       </div>
    </div>

  </div>

</div>

</>


  )
}

export default Hero









