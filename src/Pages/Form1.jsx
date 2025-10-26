// import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom';
// import manage1 from '../assets/manage1.png'


// function Form1() {
//       const[signin, setSignIn] = useState(false);
//     const[data, setData] = useState([])
//     const[email,setEmail] = useState('')


//     useEffect(()=>(
//          setData(JSON.parse(localStorage.getItem('user')))
//     ), [])

//     console.log(data)


//     const navigate = useNavigate()




//     const handleSubmit = (e, type)=>{
//         e.preventDefault()
//         console.log(e.target.email.value)
//         if(e.target.email.value && e.target.password.value){
//             if(!localStorage.getItem('user')){
//                 localStorage.setItem('user', JSON.stringify([{email:e.target.email.value , password: e.target.password.value }]))
//                 // navigate('/home',{state:e.target.email.value})
//                 navigate('/home',{state:e.target.email.value})
//             }else{
//                 for(let val of data){
//                     setEmail(val.email)
//                     if(val.email.includes(e.target.email.value)){
//                         if(type == 'signUp'){
//                         alert("user already exist")
//                         setSignIn(true)
//                         }else{
//                             if(val.password == e.target.password.value){
//                                      navigate('/home',{state:e.target.email.value}) 
//                             }else{
//                                 alert('password does not match')
//                             }
//                         }
//                         return true;
//                     }
//                 }
//                 if(type == 'signUp' && email !==e.target.email.value){
//                     localStorage.setItem('user',JSON.stringify([...data,{email:e.target.email.value , password: e.target.password.value }]))
//                      navigate('/home',{state:e.target.email.value}) 
//                 }else{
//                     alert("user does not exist")
//                     setSignIn(false)
//                 }
//             }
//         }
//     }
//   return (
//     <div className=" relative h-screen">
          
//   <div className=" custom-shape-divider-bottom-1761434110">
//     <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 110" preserveAspectRatio="none">
//         <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"  className="fill-green-600 "></path>
//     </svg>
// </div>



 

//     <div className="flex flex-col items-center justify-center p-4  bg-center h-[500px]">

//     {/* <div className="min-h-screen flex flex-col items-center justify-center p-4        relative   bg-[url('./assets/wave.svg')] bg-no-repeat bg-cover bg-center"> */}



  
//       <div className="grid md:grid-cols-2 items-center gap-4 max-md:gap-8 max-w-6xl max-md:max-w-lg w-full p-4 rounded-md ">
//         <div className="md:max-w-md w-full px-4 py-4 [box-shadow:0_2px_10px_-3px_rgba(6,81,237,0.3)] bg-white rounded-2xl">
//           <form onSubmit={(e)=> handleSubmit(e, signin? 'signIn' : 'signUp')}>
//             <div className="mb-12">
//               {/* <h1 className="text-slate-900 text-3xl font-bold">Sign in</h1> */}

//                <h1 className={!signin? 'activeBtn text-2xl font-bold  ' : 'nonActive hidden'} onClick={()=>setSignIn(false)}>Sign Up</h1>
//             <h1  className={signin? 'activeBtn text-2xl font-bold  ' : 'nonActive hidden '}  onClick={()=>setSignIn(true)}>Sign In</h1>





            
//             </div>

//             <div>
//               <label className="text-slate-900 text-[13px] font-medium block mb-2">Email</label>
//               <div className="relative flex items-center">
//                 <input name="email" type="text" required className="w-full text-slate-900 text-sm border-b border-slate-300 focus:border-green-600 pl-2 pr-8 py-3 outline-none" placeholder="Enter email" />

//               </div>
//             </div>
//             <div className="mt-8">
//               <label className="text-slate-900 text-[13px] font-medium block mb-2">Password</label>
//               <div className="relative flex items-center">
//                 <input name="password" type="password" required className="w-full text-slate-900 text-sm border-b border-slate-300 focus:border-[bg-[#00cba9] ] pl-2 pr-8 py-3 outline-none" placeholder="Enter password" />


//               </div>
//             </div>
//             <div className="flex flex-wrap items-center justify-between gap-4 ">
//               <div className="flex items-center">     
              
//               </div>
    
//             </div>

//             <div className="mt-12 pb-4">
//               <button type="submit" className="w-full shadow-xl py-2.5 px-4 text-sm font-medium tracking-wide rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none cursor-pointer">
//                 {signin? 'Sign In' : 'Sign Up'}
//               </button>
//             </div>



// {/*                

//                <p className="text-[15px] mt-6 text-slate-600">Don't have an account
//                  <a href="javascript:void(0);" className={`${!signin? 'activeBtn border-2 border-green-700' : 'nonActive'} text-[15px] mt-6 text-slate-600">Don't have an account  text-blue-600 font-medium hover:underline ml-1 whitespace-nowrap`}  onClick={()=>setSignIn(false)} >Register here</a></p> */}


                 

//                <p className={`${!signin? 'activeBtn ' : 'nonActive hidden'} text-[15px] mt-6 text-slate-600`}>Already have an account
//                  <a href="javascript:void(0);" className={` text-[15px] mt-6 text-slate-600">Don't have an account  text-green-600 font-medium hover:underline ml-1 whitespace-nowrap`}  onClick={()=>setSignIn(true)} >Sign In</a></p>

//                <p className={`${signin? 'activeBtn  ' : 'nonActive hidden'} text-[15px] mt-6 text-slate-600`}>Don't have an account
//                  <a href="javascript:void(0);" className={`text-[15px] mt-6 text-slate-600">Don't have an account   text-green-600 font-medium hover:underline ml-1 whitespace-nowrap`}  onClick={()=>setSignIn(false)} >Sign Up</a></p>

          
//           </form>
//         </div>

//         <div className="[box-shadow:0_2px_10px_-3px_rgba(6,81,237,0.3)]  w-[90%] h- flex items-center bg-green-600 rounded-[50%] p-8">
//           {/* <img src="https://readymadeui.com/signin-image.webp" className="w-full aspect-[12/12] object-contain" alt="login-image" /> */}

//           <img
//                   src={manage1}
//                   alt="Beautiful scenery"
//                   className="w-full aspect-[15/15] object-contain"
                 
//                 />



//         </div>
//       </div>
//     </div>
//     </div>
//   )
// }

// export default Form1






// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import manage1 from "../assets/manage1.png";

// function Form1() {
//   const [signin, setSignIn] = useState(false);
//   const [data, setData] = useState([]);
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState(""); // ✅ added for feedback message
//   const [msgType, setMsgType] = useState(""); // ✅ success or error

//   useEffect(() => {
//     const stored = localStorage.getItem("user");
//     if (stored) setData(JSON.parse(stored));
//   }, []);

//   const navigate = useNavigate();

//   const handleSubmit = (e, type) => {
//     e.preventDefault();
//     const userEmail = e.target.email.value.trim();
//     const userPassword = e.target.password.value.trim();

//     if (userEmail && userPassword) {
//       if (!localStorage.getItem("user")) {
//         localStorage.setItem(
//           "user",
//           JSON.stringify([{ email: userEmail, password: userPassword }])
//         );
//         setMessage("✅ Account created successfully!");
//         setMsgType("success");
//         navigate("/home", { state: userEmail });
//       } else {
//         for (let val of data) {
//           setEmail(val.email);
//           if (val.email.includes(userEmail)) {
//             if (type === "signUp") {
//               setMessage("⚠️ User already exists!");
//               setMsgType("error");
//               setSignIn(true);
//             } else {
//               if (val.password === userPassword) {
//                 setMessage("✅ Login successful!");
//                 setMsgType("success");
//                 navigate("/home", { state: userEmail });
//               } else {
//                 setMessage("❌ Password does not match!");
//                 setMsgType("error");
//               }
//             }
//             return true;
//           }
//         }
//         if (type === "signUp" && email !== userEmail) {
//           localStorage.setItem(
//             "user",
//             JSON.stringify([...data, { email: userEmail, password: userPassword }])
//           );
//           setMessage("✅ Account created successfully!");
//           setMsgType("success");
//           navigate("/home", { state: userEmail });
//         } else {
//           setMessage("⚠️ User does not exist!");
//           setMsgType("error");
//           setSignIn(false);
//         }
//       }
//     }
//   };

//   return (
//     <div className="relative h-screen">
//       <div className="custom-shape-divider-bottom-1761434110">
//         <svg
//           data-name="Layer 1"
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 1200 110"
//           preserveAspectRatio="none"
//         >
//           <path
//             d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
//             className="fill-green-600"
//           ></path>
//         </svg>
//       </div>

//       <div className="flex flex-col items-center justify-center p-4 bg-center h-[500px]">
//         <div className="grid md:grid-cols-2 items-center gap-4 max-md:gap-8 max-w-6xl max-md:max-w-lg w-full p-4 rounded-md">
//           {/* FORM */}
//           <div className="md:max-w-md w-full px-4 py-4 [box-shadow:0_2px_10px_-3px_rgba(6,81,237,0.3)] bg-white rounded-2xl">
//             <form onSubmit={(e) => handleSubmit(e, signin ? "signIn" : "signUp")}>
//               <div className="mb-12">
//                 <h1
//                   className={`text-2xl font-bold cursor-pointer ${
//                     !signin ? "" : "hidden"
//                   }`}
//                   onClick={() => setSignIn(false)}
//                 >
//                   Sign Up
//                 </h1>
//                 <h1
//                   className={`text-2xl font-bold cursor-pointer ${
//                     signin ? "" : "hidden"
//                   }`}
//                   onClick={() => setSignIn(true)}
//                 >
//                   Sign In
//                 </h1>
//               </div>

//               <div>
//                 <label className="text-slate-900 text-[13px] font-medium block mb-2">
//                   Email
//                 </label>
//                 <input
//                   name="email"
//                   type="text"
//                   required
//                   className="w-full text-slate-900 text-sm border-b border-slate-300 focus:border-green-600 pl-2 pr-8 py-3 outline-none"
//                   placeholder="Enter email"
//                 />
//               </div>

//               <div className="mt-8">
//                 <label className="text-slate-900 text-[13px] font-medium block mb-2">
//                   Password
//                 </label>
//                 <input
//                   name="password"
//                   type="password"
//                   required
//                   className="w-full text-slate-900 text-sm border-b border-slate-300 focus:border-green-600 pl-2 pr-8 py-3 outline-none"
//                   placeholder="Enter password"
//                 />
//               </div>

//               <div className="mt-12 pb-2">
//                 <button
//                   type="submit"
//                   className="w-full shadow-xl py-2.5 px-4 text-sm font-medium tracking-wide rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none cursor-pointer"
//                 >
//                   {signin ? "Sign In" : "Sign Up"}
//                 </button>
//               </div>

//               {/* ✅ Message section */}
//               {message && (
//                 <p
//                   className={`text-sm text-center mt-3 ${
//                     msgType === "error" ? "text-red-600" : "text-green-600"
//                   }`}
//                 >
//                   {message}
//                 </p>
//               )}

//               <p
//                 className={`${
//                   !signin ? "block" : "hidden"
//                 } text-[15px] mt-6 text-slate-600`}
//               >
//                 Already have an account?
//                 <a
//                   href="#"
//                   className="text-green-600 font-medium hover:underline ml-1"
//                   onClick={() => setSignIn(true)}
//                 >
//                   Sign In
//                 </a>
//               </p>

//               <p
//                 className={`${
//                   signin ? "block" : "hidden"
//                 } text-[15px] mt-6 text-slate-600`}
//               >
//                 Don’t have an account?
//                 <a
//                   href="#"
//                   className="text-green-600 font-medium hover:underline ml-1"
//                   onClick={() => setSignIn(false)}
//                 >
//                   Sign Up
//                 </a>
//               </p>
//             </form>
//           </div>

//           {/* IMAGE */}
//           <div className="[box-shadow:0_2px_10px_-3px_rgba(6,81,237,0.3)] w-[90%] flex items-center bg-green-600 rounded-[50%] p-8">
//             <img
//               src={manage1}
//               alt="Illustration"
//               className="w-full aspect-[15/15] object-contain"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Form1;


































import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import manage1 from "../assets/manage1.png";

function Form1() {
  const [signin, setSignIn] = useState(false);
  const [data, setData] = useState([]);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [msgType, setMsgType] = useState("");
  const [shake, setShake] = useState(false); // ✅ for shake animation
  const [emailError, setEmailError] = useState(false); // ✅ to add red border

  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) setData(JSON.parse(stored));
  }, []);

  const handleSubmit = (e, type) => {
    e.preventDefault();
    const userEmail = e.target.email.value.trim();
    const userPassword = e.target.password.value.trim();

    // ✅ Accept any valid .com email
    const emailRegex = /^[^\s@]+@[^\s@]+\.com$/;

    if (!emailRegex.test(userEmail)) {
      setMessage(
        "❌ Please enter a valid email address ending with '.com' (e.g. example@gmail.com)"
      );
      setMsgType("error");
      setEmailError(true);
      setShake(true);

      // Remove shake effect after short time
      setTimeout(() => setShake(false), 400);
      return;
    } else {
      setEmailError(false);
    }

    if (userEmail && userPassword) {
      if (!localStorage.getItem("user")) {
        localStorage.setItem(
          "user",
          JSON.stringify([{ email: userEmail, password: userPassword }])
        );
        setMessage("✅ Account created successfully!");
        setMsgType("success");
        navigate("/home", { state: userEmail });
      } else {
        for (let val of data) {
          setEmail(val.email);
          if (val.email.includes(userEmail)) {
            if (type === "signUp") {
              setMessage("⚠️ User already exists!");
              setMsgType("error");
              setSignIn(true);
            } else {
              if (val.password === userPassword) {
                setMessage("✅ Login successful!");
                setMsgType("success");
                navigate("/home", { state: userEmail });
              } else {
                setMessage("❌ Password does not match!");
                setMsgType("error");
              }
            }
            return true;
          }
        }

        if (type === "signUp" && email !== userEmail) {
          localStorage.setItem(
            "user",
            JSON.stringify([
              ...data,
              { email: userEmail, password: userPassword },
            ])
          );
          setMessage("Account created successfully!");
          setMsgType("success");
          navigate("/home", { state: userEmail });
        } else {
          setMessage("⚠️ User does not exist!");
          setMsgType("error");
          setSignIn(false);
        }
      }
    }
  };

  return (
    <div className="relative h-screen">
      {/* SVG Shape */}
      <div className="custom-shape-divider-bottom-1761434110">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 110"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-green-600"
          ></path>
        </svg>
      </div>

      {/* Main Form Section */}
      <div className="flex flex-col items-center justify-center p-4 bg-center h-[500px]">
        <div className="grid md:grid-cols-2 items-center gap-4 max-md:gap-8 max-w-6xl max-md:max-w-lg w-full p-4 rounded-md">
          {/* ===== FORM ===== */}
          <div className="md:max-w-md w-full px-4 py-6 [box-shadow:0_2px_10px_-3px_rgba(6,81,237,0.3)] bg-white rounded-2xl">
            <form
              onSubmit={(e) => handleSubmit(e, signin ? "signIn" : "signUp")}
              noValidate
            >
              <div className="mb-10 text-center">
                <h1
                  className={`text-2xl font-bold cursor-pointer ${
                    !signin ? "text-start" : "hidden"
                  }`}
                  onClick={() => setSignIn(false)}
                >
                  Sign Up
                </h1>
                <h1
                  className={`text-2xl font-bold cursor-pointer ${
                    signin ? "text-start" : "hidden"
                  }`}
                  onClick={() => setSignIn(true)}
                >
                  Sign In
                </h1>
              </div>

              {/* Email Field */}
              <div>
                <label className="text-slate-900 text-[13px] font-medium block mb-2">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  className={`w-full text-slate-900 text-sm border-b ${
                    emailError ? "border-red-500" : "border-slate-300"
                  }  focus:border-green-600 pl-2 pr-8 py-3 outline-none transition-all duration-200 ${
                    shake ? "animate-shake" : ""
                  }`}
                  placeholder="Enter email"
                />
              </div>

              {/* Password Field */}
              <div className="mt-8">
                <label className="text-slate-900 text-[13px] font-medium block mb-2">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  required
                  className="w-full text-slate-900 text-sm border-b border-slate-300 focus:border-green-600 pl-2 pr-8 py-3 outline-none"
                  placeholder="Enter password"
                />
              </div>

              {/* Submit Button */}
              <div className="mt-10 pb-2">
                <button
                  type="submit"
                  className="w-full shadow-xl py-2.5 px-4 text-sm font-medium tracking-wide rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none cursor-pointer"
                >
                  {signin ? "Sign In" : "Sign Up"}
                </button>
              </div>

              {/* Message */}
              {message && (
                <p
                  className={`text-sm text-center mt-3 transition-all ${
                    msgType === "error" ? "text-red-600" : "text-green-600"
                  }`}
                >
                  {message}
                </p>
              )}

              {/* Toggle Links */}
              <p
                className={`${
                  !signin ? "block" : "hidden"
                } text-[15px] mt-6 text-slate-600 text-center`}
              >
                Already have an account?
                <a
                  href="#"
                  className="text-green-600 font-medium hover:underline ml-1"
                  onClick={() => setSignIn(true)}
                >
                  Sign In
                </a>
              </p>

              <p
                className={`${
                  signin ? "block" : "hidden"
                } text-[15px] mt-6 text-slate-600 text-center`}
              >
                Don’t have an account?
                <a
                  href="#"
                  className="text-green-600 font-medium hover:underline ml-1"
                  onClick={() => setSignIn(false)}
                >
                  Sign Up
                </a>
              </p>
            </form>
          </div>

          {/* ===== IMAGE SIDE ===== */}
          <div className="[box-shadow:0_2px_10px_-3px_rgba(6,81,237,0.3)] w-[90%] flex items-center bg-green-600 rounded-[50%] p-8">
            <img
              src={manage1}
              alt="Illustration"
              className="w-full aspect-[15/15] object-contain"
            />
          </div>
        </div>
      </div>

      {/* Add custom Tailwind animation */}
      <style>
        {`
          @keyframes shake {
            0%, 100% { transform: translateX(0); }
            20%, 60% { transform: translateX(-6px); }
            40%, 80% { transform: translateX(6px); }
          }
          .animate-shake {
            animation: shake 0.3s;
          }
        `}
      </style>
    </div>
  );
}

export default Form1;
