import React from 'react'
import menu_icon from "../../assets/menu.png";
import logo from "../../assets/logo.png";
import Search from "../../assets/search.png";
import Uploadicon from "../../assets/upload.png";
import more_icon from "../../assets/more.png";
import notification_icon from "../../assets/notification.png";
import profile_icon from "../../assets/user_profile.jpg";
import "./Navbar.css";

const Navbar=({setSidebar}) =>{
  return (
   
    <nav className="flex-div">
      <div className="nav-left flex-div">
       <img  className="menu-icon" onClick={()=>setSidebar(prev=>prev===false?true:false)} src={menu_icon} alt="" />
       <img className='logo'  src={logo} alt="" />
      </div>


      <div className="nav-middle flex-div">
        <div className="searchbox flex-div">
        <input type="text" placeholder='Search' />
        <img src={Search} alt="" />
        </div>
      </div>



      <div className="nav-right flex-div">
      <img src={Uploadicon} alt="" />
      <img src={more_icon} alt="" />
      <img src={notification_icon} alt="" />
      <img className="profile" src={profile_icon} alt="" />
      </div>
   </nav>
  )
}

export default Navbar;