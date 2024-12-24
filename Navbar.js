import React from "react";
import './Navbar.css';
import { BsSearch } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaBookOpen } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar">
         <div className="navbar-top">
           <div className="navbar-top-left">
              <img src= "https://bluestock.cloud/demo/images/logo-black.f44abb4998d1.webp" alt="" className="navbar-logo"/>
              <ul className="navbar-menu">
                 <a href="#home">HOME</a>
                 <a href="#screens">SCREENS</a>
                 <a href="tools">TOOLS <MdOutlineKeyboardArrowDown className="arrowdown" /></a>
              </ul>
           </div>
           <div className="navbar-top-right">
               <div className="navbar-search">
               <i className="search-icon"><BsSearch className="search-icon-img"/></i><input type="text" placeholder="Search for a company" className="navbar-search-box"/>
               </div>
               <div className="login-btn-div"><button className="login-btn"><BiUser className="user-icon" />LOGIN</button> </div>
               <div className="free-account-div"><button className="free-account-btn">GET FREE ACCOUNT</button></div>
           </div>
           
         </div>

         <div className="navbar-bottom">
            <ul className="navbar-bottom-list">
               <li className="navbar-lists">TCS</li>
               <li className="navbar-lists">Analysis</li>
               <li className="navbar-lists">Profit & Loss</li>
               <li className="navbar-lists">Balance Sheet</li>
               <li className="navbar-lists">Cash Flow</li>
               <li className="navbar-lists">Ratios</li>
               <li className="navbar-lists">Documents</li>
            </ul>
            <h4 className="disclaimer"><FaBookOpen/> Disclaimer</h4>
          
         </div>
    </div>
  )
}

export default Navbar;
