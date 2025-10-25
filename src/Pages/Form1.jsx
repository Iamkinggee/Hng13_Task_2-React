import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


function Form1() {
      const[signin, setSignIn] = useState(false);
    const[data, setData] = useState([])
    const[email,setEmail] = useState('')


    useEffect(()=>(
         setData(JSON.parse(localStorage.getItem('user')))
    ), [])

    console.log(data)


    const navigate = useNavigate()




    const handleSubmit = (e, type)=>{
        e.preventDefault()
        console.log(e.target.email.value)
        if(e.target.email.value && e.target.password.value){
            if(!localStorage.getItem('user')){
                localStorage.setItem('user', JSON.stringify([{email:e.target.email.value , password: e.target.password.value }]))
                navigate('/home',{state:e.target.email.value})
            }else{
                for(let val of data){
                    setEmail(val.email)
                    if(val.email.includes(e.target.email.value)){
                        if(type == 'signUp'){
                        alert("user already exist")
                        setSignIn(true)
                        }else{
                            if(val.password == e.target.password.value){
                                     navigate('/home',{state:e.target.email.value}) 
                            }else{
                                alert('password does not match')
                            }
                        }
                        return true;
                    }
                }
                if(type == 'signUp' && email !==e.target.email.value){
                    localStorage.setItem('user',JSON.stringify([...data,{email:e.target.email.value , password: e.target.password.value }]))
                     navigate('/home',{state:e.target.email.value}) 
                }else{
                    alert("user does not exist")
                    setSignIn(false)
                }
            }
        }
    }
  return (
    <div className=" bg-[url('./assets/wave.svg')] bg-no-repeat bg-cover bg-center">

    <h1 className='text-start  text-white pl-20 p-4 font-mono font-bold text-2xl bg-[#2fd3b8] '>KingsTickets</h1>


 

    <div className="min-h-screen flex flex-col items-center justify-center p-4        relative   bg-[url('./assets/wave.svg')] bg-no-repeat bg-cover bg-center">

    {/* <div className="min-h-screen flex flex-col items-center justify-center p-4        relative   bg-[url('./assets/wave.svg')] bg-no-repeat bg-cover bg-center"> */}



  
      <div className="grid md:grid-cols-2 items-center gap-4 max-md:gap-8 max-w-6xl max-md:max-w-lg w-full p-4 rounded-md ">
        <div className="md:max-w-md w-full px-4 py-4 [box-shadow:0_2px_10px_-3px_rgba(6,81,237,0.3)] bg-white rounded-2xl">
          <form onSubmit={(e)=> handleSubmit(e, signin? 'signIn' : 'signUp')}>
            <div className="mb-12">
              {/* <h1 className="text-slate-900 text-3xl font-bold">Sign in</h1> */}

               <h1 className={!signin? 'activeBtn text-2xl font-bold ' : 'nonActive hidden'} onClick={()=>setSignIn(false)}>Sign up</h1>
            <h1  className={signin? 'activeBtn text-2xl font-bold ' : 'nonActive hidden'}  onClick={()=>setSignIn(true)}>Sign In</h1>





            
            </div>

            <div>
              <label className="text-slate-900 text-[13px] font-medium block mb-2">Email</label>
              <div className="relative flex items-center">
                <input name="email" type="text" required className="w-full text-slate-900 text-sm border-b border-slate-300 focus:border-blue-600 pl-2 pr-8 py-3 outline-none" placeholder="Enter email" />

              </div>
            </div>
            <div className="mt-8">
              <label className="text-slate-900 text-[13px] font-medium block mb-2">Password</label>
              <div className="relative flex items-center">
                <input name="password" type="password" required className="w-full text-slate-900 text-sm border-b border-slate-300 focus:border-[bg-[#00cba9] ] pl-2 pr-8 py-3 outline-none" placeholder="Enter password" />


              </div>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4 ">
              <div className="flex items-center">     
              
              </div>
    
            </div>

            <div className="mt-12">
              <button type="submit" className="w-full shadow-xl py-2.5 px-4 text-sm font-medium tracking-wide rounded-md text-white bg-[#00cba9] hover:bg-[#4e8f84] focus:outline-none cursor-pointer">
                {signin? 'Sign In' : 'Sign Up'}
              </button>
            </div>



{/*                

               <p className="text-[15px] mt-6 text-slate-600">Don't have an account
                 <a href="javascript:void(0);" className={`${!signin? 'activeBtn border-2 border-green-700' : 'nonActive'} text-[15px] mt-6 text-slate-600">Don't have an account  text-blue-600 font-medium hover:underline ml-1 whitespace-nowrap`}  onClick={()=>setSignIn(false)} >Register here</a></p> */}


                 

               <p className={`${!signin? 'activeBtn ' : 'nonActive hidden'} text-[15px] mt-6 text-slate-600`}>Already have an account
                 <a href="javascript:void(0);" className={` text-[15px] mt-6 text-slate-600">Don't have an account  text-[#00cba9] font-medium hover:underline ml-1 whitespace-nowrap`}  onClick={()=>setSignIn(true)} >Sign In</a></p>

               <p className={`${signin? 'activeBtn ' : 'nonActive hidden'} text-[15px] mt-6 text-slate-600`}>Don't have an account
                 <a href="javascript:void(0);" className={`text-[15px] mt-6 text-slate-600">Don't have an account   text-[#00cba9] font-medium hover:underline ml-1 whitespace-nowrap`}  onClick={()=>setSignIn(false)} >Sign up</a></p>

          
          </form>
        </div>

        <div className="[box-shadow:0_2px_10px_-3px_rgba(6,81,237,0.3)]  w-[90%] h- flex items-center bg-[#00cba9] rounded-[50%] p-8">
          <img src="https://readymadeui.com/signin-image.webp" className="w-full aspect-[12/12] object-contain" alt="login-image" />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Form1