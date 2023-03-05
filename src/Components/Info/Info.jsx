import React, { useState } from "react";
import "./Info.css";
import image1 from "../../Assets/image1.jpg";
import image6 from "../../Assets/img6.jpeg";
import {
    AiFillStar
  } from "react-icons/ai";

const Info = () => {
  return (
    <div className=" flex InfoContainer  ">

      <div className="grid InfoInfo ">
        <div className="InfoInfoHead ">
          <h2 className="InfoInfoh2">Về Chúng Tôi</h2>
        </div>
        <div className="InfoInfoh2Line "></div>

        <div className="InfoInfoIMGLayout2 colum11">
          <div className="InfoInfoImgLayout2Edit "></div>
          <div className="InfoInfoLayout2Text ">
            <h3>Công ty TNHH Đầu tư Giáo dục TERIS </h3>
            <p>Công ty TNHH Đầu tư Giáo dục TERIS Công ty TNHH Đầu tư Giáo dục TERIS Công ty TNHH Đầu tư Giáo dục TERIS Công ty TNHH Đầu tư Giáo dục TERIS Công ty TNHH Đầu tư Giáo dục TERISCông ty TNHH Đầu tư Giáo dục TERISCông ty TNHH Đầu tư Giáo dục TERIS </p>
          </div>
        </div>

       
      </div>

      <div className="InfoNext grid">
      <div className="InfoInfoHead grid InfoNextGrid">
          <h2 className="InfoInfoh2">Lịch sử và hình thành phát triển</h2>
          
          <h2 className="InfoInfoh2" >Teris Việt Nam</h2>
        </div>
        <div className="InfoInfoh2Line "></div>
      </div>

       
    </div>
  );
};

export default Info;
