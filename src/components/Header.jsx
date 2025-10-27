




// import React from "react";
// import { NavLink } from "react-router-dom";
// import Stat from "../components/Stat";

// const Header = () => {
//   return (
//     // <header className="text-center my-2 ">

//     //   <NavLink to="/home">
//     //        <h1 className="inline-block  text-black text-2xl font-extrabold font-mono
           
          
//     //        ">
//     //     KingsTickets
//     //        </h1>
//     //   </NavLink>


   
//     //   <hr className="my-2 border- border-gray-600" />
//     //   <div className="uppercase text-center text-xl mb-5  ">
//     //     <NavLink
//     //       to="/home"
//     //       className={({ isActive }) =>
//     //         `px-3 py-1 mx-4 font-bold    transition-all duration-300  ${
//     //           isActive ? "font-medium " : "text-red-600"
//     //         }  hover:border-white`
//     //       }
       
//     //     >
//     //       Home
//     //     </NavLink>

//     //     <NavLink
//     //       to="/list"
//     //       className={({ isActive }) =>
//     //         `px-3 py-1 mx-4 font-bold    transition-all duration-300  ${
//     //           isActive ? "font-medium " : ""
//     //         }  hover:border-white`
//     //       }
       
//     //     >
//     //       Ticket List
//     //     </NavLink>

//     //     <NavLink
//     //       to="/add"
//     //       className={({ isActive }) =>
//     //         `px-3 py-1 mx-4 font-bold text-black   transition-all duration-300 ${
//     //           isActive ? "font-medium" : ""
//     //         } hover:border-none  hover:border-white `
//     //       }
//     //     >
//     //       Add TICKET
//     //     </NavLink>
//     //   </div>

      
//     // </header>






    
//   );
// };

// export default Header;








import React from "react";
import { NavLink } from "react-router-dom";


function Header() {
  return (
    <div className="text-center my-4">
  {/* Logo */}
  <NavLink to="/home">
    <h1 className="inline-block text-black text-2xl font-extrabold font-mono">
      KingsTickets
    </h1>
  </NavLink>

  <hr className="my-2 border border-gray-400" />

  {/* Nav Links */}
  <div
    className="
      uppercase 
      text-xl 
      mb-5 
      flex 
      flex-col 
      items-center 
      space-y-2 
      md:flex-row 
      md:justify-center 
      md:space-x-6 
      md:space-y-0
    "
  >
    <NavLink
      to="/home"
 

     className={({ isActive }) =>
    `px-3 py-1 font-bold transition-all duration-300
     ${isActive ? "text-black border-b-2 border-green-600" : "text-gray-700 hover:text-green-600"}
     no-underline hover:no-underline`
  }
    >
      Home
    </NavLink>

    <NavLink
      to="/list"
      className={({ isActive }) =>
        `px-3 py-1 font-bold transition-all duration-300 ${
          isActive ? "text-black font-medium" : "text-red-600"
        } hover:text-black`
      }
    >
      Ticket List
    </NavLink>

    <NavLink
      to="/add"
      className={({ isActive }) =>
        `px-3 py-1 font-bold transition-all duration-300 ${
          isActive ? "text-black font-medium" : "text-red-600"
        } hover:text-black`
      }
    >
      Add Ticket
    </NavLink>
  </div>

</div>
  )
}

export default Header