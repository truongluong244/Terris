import React, {useState} from "react";
import "./Footer.css";
import logo from "../../Assets/logo.png";
import {
    CiLocationOn,CiMail
  } from "react-icons/ci";
  import {
    BsTelephone
  } from "react-icons/bs";
  import {
    IoMdTimer
  } from "react-icons/io";
  
  
const Footer = () => {


  return (
    <div className="footerContainer">
      <div className="grid FooterSection">
      <div className="footerLeft">
        <div className="footerLogo">
            <img className="footerLogoBGR" src={logo}>
            </img>
        </div>
        <div className="footerLogoText">
            <h3 className="footerLogoTextH3">
            Công ty TNHH Đầu Tư Giáo Dục và Công Nghệ TERIS Việt Nam
            </h3>
        </div>
        </div>

        <div className="footerRight">
        <div className="footerLogoTextIcon">
            <div className="footerSpanIcon" ><CiLocationOn className="iconFooter" /></div>
        
            <div className="footerLabel">
            <p className="footerLogoTextp">
            134 Nguyễn Văn Tuyết , Trung Liệt , Đống Đa , Hà Nội
            </p>
            </div>
        </div>
        <div className="footerLogoTextIcon">
            <div className="footerSpanIcon" ><BsTelephone className="iconFooter" /></div>
        
            <div className="footerLabel">
            <p className="footerLogoTextp">
            0978968759
            </p>
            </div>
        </div>
        <div className="footerLogoTextIcon">
            <div className="footerSpanIcon" ><CiMail className="iconFooter" /></div>
        
            <div className="footerLabel">
            <p className="footerLogoTextp">
            Terisvietnam@gmail.com
            </p>
            </div>
        </div>
        <div className="footerLogoTextIcon">
            <div className="footerSpanIcon" ><IoMdTimer className="iconFooter" /></div>
        
            <div className="footerLabel">
            <p className="footerLogoTextp">
            9h-17h
            </p>
            <br />
            <p className="footerLogoTextp"> Thứ 2 - Thứ 6</p>
            </div>
        </div>
        </div>
        </div>
        <div className="footerLine">

        </div>

     
    </div>
  );
};

export default Footer;
