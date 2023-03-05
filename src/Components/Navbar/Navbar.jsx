import React, {useState} from "react";
import "./Navbar.css";
import logo from "../../Assets/logo.png";

const Navbar = () => {
  const href = window.location.pathname;

    var activeHome ='navbarClick';
    var activeCourse ='navbarClick';
    var activeInfo ='navbarClick';

    if (href ==='/Home'){
      activeHome = 'navbarClick activeLink'
    }
    if (href ==='/Course'){
       activeCourse = 'navbarClick activeLink'
    }
    if (href ==='/Information'){
       activeInfo = 'navbarClick activeLink'
    }



 
  return (
    <div className=" flex navBarSection">

    <div className="navbarLogo" >
        <img className="navbarImg" src={logo}></img>
        </div>

     <div className=" flex navbarLists">
        <a href='/Home' className= {activeHome}> Trang chủ</a>
        <a href='/Course' className= {activeCourse}> Khoá học</a>
        <a href='/Information' className= {activeInfo}> Về chúng tôi</a>
    </div>
    </div>
  );
};

export default Navbar;
