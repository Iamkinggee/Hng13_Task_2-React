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
      <h1 className="inline-block  text-black-400 text-2xl font-bold drop-shadow-[0_0_20px_#fefcc9,10px_-10px_30px_#feec85,-20px_-20px_40px_#ffae34,20px_-40px_50px_#ec760c,-20px_-60px_60px_#cd4606,0_-80px_70px_#973716,10px_-90px_80px_#451b0e]">
        KingsTickets
      </h1>
      <hr className="my-2 border-gray-600" />
      <div className="uppercase text-center text-xl mb-5">
        <NavLink
          to="/dash"
          className={({ isActive }) =>
            `px-3 py-1 mx-4 font-bold text-black   transition-all duration-300  ${
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

      <Stat/>
    </header>
  );
};

export default Header;
