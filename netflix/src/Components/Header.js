import React from 'react'
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios";
import { API_END_POINT } from '../utils/constant';
import toast from 'react-hot-toast';
import { setUser } from './redux/userSlice';
import { useNavigate } from 'react-router-dom';
import {setToggle} from "./redux/movieSlice";



const Header = () => {
  
  const user=useSelector((store)=>store.app.user);
  const toggle=useSelector((store)=>store.movie.toggle);
  const dispatch=useDispatch();
  const navigate=useNavigate();
  console.log(user);


const logOutHandler= async()=>{

  try {
    const res=await axios.get(`${API_END_POINT}/logout` );
    if(res.data.success){
      toast.success(res.data.message);
    }
    dispatch(setUser(null));
    navigate("/");
  } catch (error) {
     console.log(error)
  }
}



const toggleHandler=()=>{
    dispatch(setToggle());
}

  return (


    <div className=' absolute z-10 flex w-[100%] items-center justify-between  px-6  py-1 bg-gradient-to-b from-black'>
        <img className='w-56' src="https://www.techdaily.com.au/b2/wp-content/uploads/2015/03/Netflix_Logo_Print_FourColorCMYK.png" alt=""/>
    
    {
      user&&(
        <div className='flex  items-center'>
        <IoIosArrowDropdownCircle className='mt-1 cursor-pointer text-white mr-1'/>
           <h1 className='text-white font-medium '>{user.fullName}</h1>
          
           <div className='ml-4'>
            <button  onClick={logOutHandler} className='bg-red-600 text-white px-2 py-1  cursor-pointer  rounded-md '>Logout</button>
            <button onClick={toggleHandler} className='bg-red-600 text-white px-2 py-1 ml-2 cursor-pointer  rounded-md'>{toggle?"Home":"Search Movies"}</button>
            </div>
             </div>
      )
    }

    
    </div>
  )
}

export default Header