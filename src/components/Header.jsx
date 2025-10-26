// import React from 'react';
// import { NavLink } from 'react-router-dom';

// const Header = () => {
//   return (
//     <header>
//       <h1>Book Management App</h1>
//       <hr />
//       <div className="links">
//         <NavLink to="/dash" className="link" activeClassName="active" exact>
//           Books List
//         </NavLink>
//         <NavLink to="/add" className="link" activeClassName="active">
//           Add Book
//         </NavLink>
//       </div>
//     </header>
//   );
// };

// export default Header;







import React from "react";
import { NavLink } from "react-router-dom";
import Stat from "../components/Stat";

const Header = () => {
  return (
    <header className="text-center my-2">

      <NavLink to="/home">
           <h1 className="inline-block  text-black text-2xl font-extrabold font-mono
           
         

         
      




           
           ">
        KingsTickets
           </h1>
      </NavLink>


   
      <hr className="my-2 border- border-gray-600" />
      <div className="uppercase text-center text-xl mb-5">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            `px-3 py-1 mx-4 font-bold    transition-all duration-300  ${
              isActive ? "font-medium " : "text-red-600"
            }  hover:border-white`
          }
       
        >
          Home
        </NavLink>

        <NavLink
          to="/list"
          className={({ isActive }) =>
            `px-3 py-1 mx-4 font-bold    transition-all duration-300  ${
              isActive ? "font-medium " : ""
            }  hover:border-white`
          }
       
        >
          Ticket List
        </NavLink>

        <NavLink
          to="/add"
          className={({ isActive }) =>
            `px-3 py-1 mx-4 font-bold text-black  bg-amber-500 transition-all duration-300 ${
              isActive ? "font-medium" : ""
            } hover:border-none  hover:border-white `
          }
        >
          Add TICKET
        </NavLink>
      </div>

      
    </header>
  );
};

export default Header;
