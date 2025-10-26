import React from 'react'

function Stat() {
  return (
   <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-2 md:gap-4 lg:gap-6 xl:gap-8 p-5 text-black">


  <div className="p-4 text-center bg-green-100 [box-shadow:0_2px_10px_-3px_rgba(6,81,237,0.3)] h-[200px]">
    <p className='text-2xl'>TOTAL TICKETS</p>
    <h1>59</h1>



  </div>
  <div className=" p-4  text-center bg-blue-100 [box-shadow:0_2px_10px_-3px_rgba(6,81,234,20.3)]  h-[200px] ">
     <p className='text-2xl'>OPENED TICKETS</p>
    <h1>68</h1>

  </div>
  <div className="p-4  text-center bg-gray-200  [box-shadow:0_2px_10px_-3px_rgba(6,81,237,0.3)] h-[200px] ">
     <p className='text-2xl'>TOTAL TICKETS</p>
    <h1>42</h1>

  </div>
</div>

  )
}

export default Stat