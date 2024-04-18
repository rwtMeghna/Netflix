import React, { useState } from 'react'
import Header from './Header'
import axios from "axios";
import { API_END_POINT } from '../utils/constant.js';
import toast from 'react-hot-toast';
import {useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, setUser } from './redux/userSlice.js';

const Login = () => {

 const [isLogin , setIsLogin]=useState(false);
 const [fullName ,setFullName]=useState("");
 const [email ,setEmail]=useState("");
 const [password ,setPassword]=useState("");
const navigate=useNavigate();
const dispatch=useDispatch();

const isLoading=useSelector(store=>store.app.isLoading)

const loginHandler=()=>{
    setIsLogin(!isLogin);
}


const getInputData=async(e)=>{
  e.preventDefault();

  dispatch(setLoading(true));
   if(isLogin){
   const user={email  , password};
   try {
    const res=await axios.post(`${API_END_POINT}/login` , user,{
        headers:{
            'Content-Type':'application/json'
        },
        withCredentials:true
    });
    if(res.data.success){
        toast.success(res.data.message);
    }
    dispatch(setUser(res.data.user));
  navigate("/browse");
    console.log(res)
   } catch (error) {
    
   toast.error(error.response.data.message);
   
console.log(error)
   
   }

   finally{
    dispatch(setLoading(false));
   }
   }


   else{
    dispatch(setLoading(true));
    const user={fullName , email , password};
  try {
    const res =await axios.post(`${API_END_POINT}/register`,user,{
        headers:{
            'Content-Type':'application/json'
        },
        withCredentials:true
    });
    console.log(res);
    if(res.data.success){
        toast.success(res.data.message);
    }
    setIsLogin(true);
  } catch (error) {
    toast.error(error.response.data.message)
     console.log(error)
  }
  finally{
    dispatch(setLoading(false));
   }
   }
setEmail("");
setFullName("");
setPassword("");
 
}


    return (
        <div>
            <Header/>
            <div className='absolute'>
                <img className="w-[100vw] h-[100vh] bg-cover" src="https://th.bing.com/th/id/OIP.pIFow9l8FZiWWJiLd-dSoAHaEK?rs=1&pid=ImgDetMain" alt="netflix cover"/>
        </div>

        <form  onSubmit={getInputData} className='absolute flex flex-col w-4/12  my-36 p-10 left-0 right-0 mx-auto items-center justify-center bg-black rounded-md opacity-60'>
            <h1 className='text-3xl text-white mb-5 mx-auto font-bold'>{isLogin ?"Login" :"Signup"}</h1>
            <div className='ml-6 flex flex-col'>
                {
                  !isLogin && <input value={fullName} onChange={(e)=>setFullName(e.target.value)} type="text" placeholder="Enter the username" className='outline-none p-2 my-2 w-full rounded-md bg-gray-800  text-white'/>
                 }
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Enter the email'  className='outline-none p-2 my-2 w-full rounded-md bg-gray-800 text-white'/>
            <input value={password} onChange={(e)=>setPassword(e.target.value)} type="text" placeholder='Enter the password' className='outline:none p-2 my-2 w-full rounded-md bg-gray-800 text-white'/>

            <button className='bg-red-600 text-white rounded-md w-20 px-2 mx-auto py-1 mt-3' type="submit">{`${isLoading?"Loading...":(isLogin?"Login":"Signup")}`}</button>
            <p className='text-white'>{isLogin?"New to Netflix" :"Already have an account"}<span  onClick={loginHandler} className='ml-2 text-blue-600 font-medium cursor-pointer'>{isLogin?"Signup":"Login"}</span></p>
            </div>
        </form>
        </div>
    )
}

export default Login