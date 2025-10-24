import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Form() {
    const[signin, setSignIn] = useState(false);
    const[data, setData] = useState([])
    const[email,setEmail] = useState('')


    useEffect(()=>(
         setData(JSON.parse(localStorage.getItem('user')))
    ), [])

    console.log(data)


    const navigate = useNavigate()

// kjkjkjkkjjk


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
    <div>
        <div className='flex gap-20'>
            <h1 className={!signin? 'activeBtn border-2 border-green-700' : 'nonActive'} onClick={()=>setSignIn(false)}>Sign up</h1>
            <h1  className={signin? 'activeBtn border-2 border-green-700' : 'nonActive'}  onClick={()=>setSignIn(true)}>Sign in</h1>
        </div>
        <form onSubmit={(e)=> handleSubmit(e, signin? 'signIn' : 'signUp')}>
            <input placeholder='Email' name='email'/><br/>
            <input placeholder='Password' name='password'/>
            <button>{signin? 'SignIn' : 'SignUp'}</button>

        </form>
      
    </div>
  )
}

export default Form
