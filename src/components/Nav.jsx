




// import _ from "lodash";
// import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import Header from '../components/Header';



// function Nav() {
//   const data = useLocation();
//   const navigate = useNavigate();
//   const [open, setOpen] = useState(false);

// //   const userEmail = data.state || localStorage.getItem('loggedInEmail') || 'Guest';
//   const userEmail = data.state || localStorage.getItem('loggedInEmail') || 'Guest';

//   // ✅ Confirm logout
//   const confirmLogout = () => {
//     localStorage.removeItem('loggedInEmail');
//     setOpen(false);
//     navigate('/');
//   };



//   return (
//     <div className="w-full">
//       {/* Top Bar */}
//       <div className="flex p-2 justify-evenly items-center">
//         {/* Welcome Section */}
//         <div className="text-center">
//           <p className="text-black font-bold text-xl">Welcome,</p>
//           <p>{userEmail}</p>
//         </div>

//         {/* Header Component */}
//         <div>
//           <Header />
//         </div>

//         {/* Logout Button */}
//         <div>
//           <button
//             className="font-bold text-white p-2 rounded bg-red-700 hover:bg-red-800 transition-all"
//             onClick={() => setOpen(true)}
//           >
//             Logout
//           </button>
//         </div>
//       </div>




//       {/* Logout Confirmation Modal */}
//       {open && (
//         <div
//           className="fixed inset-0 flex justify-center items-center bg-black/20 backdrop-blur-sm z-10"
//           onClick={() => setOpen(false)}
//         >
//           <div
//             className="relative bg-white rounded-xl shadow-lg p-6 w-72 transition-all scale-100 opacity-100"
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* Close Button */}
//             <button
//               className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-600"
//               onClick={() => setOpen(false)}
//             >
//               ✕
//             </button>

//             <div className="text-center">
//               {/* Logout Icon */}
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="mx-auto text-red-500 mb-3"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 width="48"
//                 height="48"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v1"
//                 />
//               </svg>

//               <h3 className="text-lg font-bold text-gray-800">Confirm Logout</h3>
//               <p className="text-sm text-gray-500 mt-1 mb-4">
//                 Are you sure you want to log out, <b>{userEmail}</b>?
//               </p>

//               <div className="flex gap-3">
//                 <button
//                   className="bg-red-500 text-white w-full py-1 rounded hover:bg-red-600 transition-all"
//                   onClick={confirmLogout}
//                 >
//                   Logout
//                 </button>
//                 <button
//                   className="bg-gray-200 w-full py-1 rounded hover:bg-gray-300 transition-all"
//                   onClick={() => setOpen(false)}
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Nav;





// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import Header from "../components/Header";

// function Nav() {
//   const data = useLocation();
//   const navigate = useNavigate();
//   const [open, setOpen] = useState(false);
//   const [userEmail, setUserEmail] = useState("");

//   // ✅ On mount and route change, determine user email
//   useEffect(() => {
//     // Try to get from navigation state (when coming from login)
//     const routeEmail = data?.state;
//     const storedEmail = localStorage.getItem("loggedInEmail");

//     if (routeEmail) {
//       // Save in localStorage for persistence
//       localStorage.setItem("loggedInEmail", routeEmail);
//       setUserEmail(routeEmail);
//     } else if (storedEmail) {
//       // Use the stored email if available
//       setUserEmail(storedEmail);
//     }
//   }, [data]);

//   // ✅ Confirm logout
//   const confirmLogout = () => {
//     localStorage.removeItem("loggedInEmail");
//     setOpen(false);
//     setUserEmail(""); // clear state
//     navigate("/");
//   };

//   // ✅ If no email at all, redirect to login
//   useEffect(() => {
//     const storedEmail = localStorage.getItem("loggedInEmail");
//     if (!storedEmail) {
//       navigate("/"); // redirect to login if not logged in
//     }
//   }, [navigate]);

//   return (
//     <div className="w-full">
//       {/* Top Bar */}
//       <div className="md:flex  md:flex-col-2  p-2 justify-evenly items-center">
//         {/* Welcome Section */}
//         <div className="text-center">
//           <p className="text-black font-bold text-xl">Welcome,</p>
//           <p>{userEmail || "Loading..."}</p>
//         </div>

//         {/* Header Component */}
//         <div>
//           <Header />
//         </div>

//         {/* Logout Button */}
//         <div>
//           <button
//             className="font-bold text-white p-2 rounded bg-red-700 hover:bg-red-800 transition-all"
//             onClick={() => setOpen(true)}
//           >
//             Logout
//           </button>
//         </div>
//       </div>

//       {/* Logout Confirmation Modal */}
//       {open && (
//         <div
//           className="fixed inset-0 flex justify-center items-center bg-black/20 backdrop-blur-sm z-10"
//           onClick={() => setOpen(false)}
//         >
//           <div
//             className="relative bg-white rounded-xl shadow-lg p-6 w-72 transition-all scale-100 opacity-100"
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* Close Button */}
//             <button
//               className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-600"
//               onClick={() => setOpen(false)}
//             >
//               ✕
//             </button>

//             <div className="text-center">
//               {/* Logout Icon */}
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="mx-auto text-red-500 mb-3"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 width="48"
//                 height="48"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v1"
//                 />
//               </svg>

//               <h3 className="text-lg font-bold text-gray-800">Confirm Logout</h3>
//               <p className="text-sm text-gray-500 mt-1 mb-4">
//                 Are you sure you want to log out, <b>{userEmail}</b>?
//               </p>

//               <div className="flex gap-3">
//                 <button
//                   className="bg-red-500 text-white w-full py-1 rounded hover:bg-red-600 transition-all"
//                   onClick={confirmLogout}
//                 >
//                   Logout
//                 </button>
//                 <button
//                   className="bg-gray-200 w-full py-1 rounded hover:bg-gray-300 transition-all"
//                   onClick={() => setOpen(false)}
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Nav;


























import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";

function Nav() {
  const data = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false); // logout confirmation
  const [menuOpen, setMenuOpen] = useState(false); // mobile menu toggle
  const [userEmail, setUserEmail] = useState("");

  // ✅ On mount and route change, determine user email
  useEffect(() => {
    const routeEmail = data?.state;
    const storedEmail = localStorage.getItem("loggedInEmail");

    if (routeEmail) {
      localStorage.setItem("loggedInEmail", routeEmail);
      setUserEmail(routeEmail);
    } else if (storedEmail) {
      setUserEmail(storedEmail);
    }
  }, [data]);

  // ✅ Confirm logout
  const confirmLogout = () => {
    localStorage.removeItem("loggedInEmail");
    setOpen(false);
    setUserEmail("");
    navigate("/");
  };

  // ✅ If not logged in, redirect
  useEffect(() => {
    const storedEmail = localStorage.getItem("loggedInEmail");
    if (!storedEmail) navigate("/");
  }, [navigate]);

  return (
    <div className="w-full bg-white shadow-md relative z-10">
      {/* ====== TOP BAR ====== */}
      <div className="flex justify-between items-center px-4 py-3 md:py-4 md:px-8">
        {/* Welcome Text */}
        <div className="text-center md:text-left">
          <p className="text-black font-bold text-xl">Welcome,</p>
          <p className="text-gray-700 text-sm">{userEmail || "Loading..."}</p>
        </div>

        {/* Desktop Header Component */}
        <div className="hidden md:flex">
          <Header />
        </div>

        {/* Desktop Logout Button */}
        <div className="hidden md:block">
          <button
            className="font-bold text-white px-4 py-2 rounded bg-red-700 hover:bg-red-800 transition-all"
            onClick={() => setOpen(true)}
          >
            Logout
          </button>
        </div>

        {/* ===== MOBILE HAMBURGER ===== */}
        <button
          className="md:hidden flex flex-col justify-between w-7 h-5 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block h-1 rounded bg-gray-700 transform transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block h-1 rounded bg-gray-700 transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block h-1 rounded bg-gray-700 transform transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* ===== MOBILE MENU ===== */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-md transform transition-all duration-300 origin-top ${
          menuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-4 py-4">
          <Header />

          <button
            className="font-bold text-white px-4 py-2 rounded bg-red-700 hover:bg-red-800 transition-all"
            onClick={() => {
              setMenuOpen(false);
              setOpen(true);
            }}
          >
            Logout
          </button>
        </div>
      </div>

      {/* ===== LOGOUT CONFIRMATION MODAL ===== */}
      {open && (
        <div
          className="fixed inset-0 flex justify-center items-center bg-black/20 backdrop-blur-sm z-50"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative bg-white rounded-xl shadow-lg p-6 w-72 transition-all scale-100 opacity-100 animate-fadeScale"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-600"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>

            <div className="text-center">
              {/* Logout Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto text-red-500 mb-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                width="48"
                height="48"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v1"
                />
              </svg>

              <h3 className="text-lg font-bold text-gray-800">Confirm Logout</h3>
              <p className="text-sm text-gray-500 mt-1 mb-4">
                Are you sure you want to log out, <b>{userEmail}</b>?
              </p>

              <div className="flex gap-3">
                <button
                  className="bg-red-500 text-white w-full py-1 rounded hover:bg-red-600 transition-all"
                  onClick={confirmLogout}
                >
                  Logout
                </button>
                <button
                  className="bg-gray-200 w-full py-1 rounded hover:bg-gray-300 transition-all"
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Nav;
