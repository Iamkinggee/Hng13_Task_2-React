import React from 'react'
import './Hero.css'
function Hero() {
  return (

    <>
    <div class="Hero ">
  <div class="flex flex-col md:flex-row h-full">
    

    <div class="flex-1  flex items-center justify-center text-white text-2xl">
      Left Side
    </div>

    <div class="flex-1  flex items-center justify-center text-white text-2xl bg-red-300 ">
      Right Side
    </div>

  </div>
</div>


<svg className=' ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00cba9" fill-opacity="0.6" d="M0,192L48,176C96,160,192,128,288,128C384,128,480,160,576,186.7C672,213,768,235,864,240C960,245,1056,235,1152,213.3C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>

</>


  )
}

export default Hero