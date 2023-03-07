import React, { useState } from "react";
import "./Info.css";
import image1 from "../../Assets/image1.jpg";
import image6 from "../../Assets/img6.jpeg";
import  Asset1 from "../../Assets/Asset1.png";
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
        <div className="InfoForm1">

        <div className="InfoAsset">
        <div  className='accset1' >
          <h3>
            2022
          </h3>
         <p>Công ty TNHH Đầu tư Giáo dục và Công nghệ
TERIS Việt Nam chính thức thành lập và ký kết
hợp tác bản quyền với MakeBlock Việt  Nam
cung cấp giải pháp giáo dục STEAM Robotics
toàn diện vào các trường học.
</p>
        </div>
        </div>
        <div className="accset6"></div>
        <div className="accset7"></div>
        </div>
        <div className="InfoForm2">

        <div className="InfoAsset2">
        <div  className='accset2' >
          <h3>
            2021
          </h3>
          <p>Đội ngũ TERIS VN được lựa chọn là đối tác
chiến lược của MakeBlock Việt Nam trong việc
xây dựng và phát triển hệ thống giáo án giảng
dạy STEAM Robotics trên nền tảng giáo trình
bản quyền của MakeBlock quốc tế.
</p>
        </div>
        </div>
        </div>
        <div className="InfoForm1">

        <div className="InfoAsset3">
        <div  className='accset3' >
          <h3>
            2020
          </h3>
          <p>Giải đấu Robotics MakeX Việt Nam lần thứ 2
được tổ chức bởi MakeBlock Việt Nam với sự
đồng hành đến từ đội ngũ cố vấn, chuyên gia
và kỹ thuật viên cao cấp của TERIS VN
</p>
        </div>
        </div>

        

        </div>
        <div className="InfoForm2">
        <div className="accset8"></div>
        <div className="InfoAsset4">
        <div  className='accset4' >
          <h3>
          2019
          </h3>
         <p>Giải đấu Robotics MakeX được tổ chứ
lần đầu tiên tại Việt Nam với sự hợp tác
về cơ sở vật chất thiết bị đến từ
MakeBlock Việt Nam.
</p>
        </div>
        
        </div>
        
        
        </div>
        <div className="InfoForm1">

        <div className="InfoAsset5">
        <div  className='accset5' >
          <h3>
          2017-2018
          </h3>
          <p>
          Nhà sáng lập TERIS VN cùng chuyên gia của
MakeBlock Việt Nam được cử đi đào tạo tại
Trung Quốc - trụ sở của MakeBlock quốc tế để nghiên cứu sản phẩm và tiến hành đàm
phán cho việc trở thành đại diện thương hiệu
tại Việt Nam.


          </p>
        </div>
        </div>
        <div className="accset10"></div>
        </div>
        

        




      </div>

       
    </div>
  );
};

export default Info;
