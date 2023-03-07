import React, { useState } from "react";
import "./Course.css";
import image1 from "../../Assets/image1.jpg";
import image6 from "../../Assets/img6.jpeg";
import {
    AiFillStar
  } from "react-icons/ai";

const Course = () => {
  return (
    <div className=" flex courseContainer  ">

      <div className="grid courseInfo ">
        <div className="courseInfoHead ">
          <h2 className="courseInfoh2">Chương trình học</h2>
        </div>
        <div className="courseInfoh2Line "></div>

        <div className="courseInfoIMGLayout2 colum11">
          <div className="courseInfoImgLayout2Edit courseForm1 "></div>
          <div className="courseInfoLayout2Text ">
            <h3>Khung Chương Trình</h3>
            <p>2 tiết/buổi/tuần</p>
            <p>32 buổi/năm học</p>
            <p>TERIS Việt Nam hiểu rằng trong mỗi cấp học, học sinh cần được bổ trợ và nuôi dưỡng những kỹ năng học tập khác nhau thông qua các phương pháp học tập phù hợp. Điều này đảm bảo quả trình tiếp thu được hiệu quả và cung có kiến thức cho các môn học khác.</p>
            <br></br>
            <p>Chương trình được xây dựng xoay quanh yếu tố quan trọng trong giáo dục STEAM, nhằm cung cấp một chương trình hấp dẫn và bổ ích.</p>
            <br></br>
            <p>Giải pháp của chúng tôi mang tính chất đồng bộ và tiếp nối, chuẩn bị cho học sinh hành trang đầy đủ khi tiến đến các cấp học cao hơn, hay cũng là tiền đề để các em tìm tòi, khám phá các ngạch khác trong hệ thống công nghệ thông tin.</p>

          </div>
        </div>

        <div className="courseInfoIMGLayout2 colum11">
          <div className="courseInfoLayout2Text ">
            <h3>Mầm Non và Tiền Tiểu Học </h3>
            <p>Thẻ lệnh, bút lập trình
mTiny
Ngôn ngữ, Toán hoc,
Tư duy logic,
 m nhạc & Mỹ thuật
Lập trình không dùng
màn hình
</p>
          </div>
          <div className="courseInfoImgLayout2Edit courseForm2 "></div>
        </div>

        <div className="courseInfoIMGLayout2 colum11 " >
          <div className="courseInfoImgLayout2Edit courseForm3"></div>
          <div className="courseInfoLayout2Text ">
            <h3>Tiểu Học </h3>
            <p>Scratch/microPython
mBot 1
Lập trình, Tư duy logic, AI
IoT, Khoa học dữ liệu,
 m nhạc & Mỹ thuật
Lập trình với mBlock 5
</p>
          </div>
        </div>

        <div className="courseInfoIMGLayout2 colum11" >
          <div className="courseInfoLayout2Text ">
            <h3>Trung học</h3>
            <p>Scratch/microPython
mBot 2
Lâp trình, AI, IoT,
Khoa học dữ liệu,
Kỹ thuật
Lập trình với mBlock 5
</p>
          </div>
          <div className="courseInfoImgLayout2Edit courseForm4"></div>
        </div>
{/* 
        <div className="courseInfoIMGLayout2 colum11">
          <div className="courseInfoImgLayout2Edit "></div>
          <div className="courseInfoLayout2Text ">
            <h3>Công ty TNHH Đầu tư Giáo dục TERIS </h3>
            <p>Công ty TNHH Đầu tư Giáo dục TERIS Công ty TNHH Đầu tư Giáo dục TERIS Công ty TNHH Đầu tư Giáo dục TERIS Công ty TNHH Đầu tư Giáo dục TERIS Công ty TNHH Đầu tư Giáo dục TERISCông ty TNHH Đầu tư Giáo dục TERISCông ty TNHH Đầu tư Giáo dục TERIS </p>
          </div>
        </div>

        <div className="courseInfoIMGLayout2 colum11">
          <div className="courseInfoLayout2Text ">
            <h3>Công ty TNHH Đầu tư Giáo dục TERIS </h3>
            <p>Công ty TNHH Đầu tư Giáo dục TERIS Công ty TNHH Đầu tư Giáo dục TERIS Công ty TNHH Đầu tư Giáo dục TERIS Công ty TNHH Đầu tư Giáo dục TERIS Công ty TNHH Đầu tư Giáo dục TERISCông ty TNHH Đầu tư Giáo dục TERISCông ty TNHH Đầu tư Giáo dục TERIS </p>
          </div>
          <div className="courseInfoImgLayout2Edit "></div>
        </div> */}

       
      </div>

       
    </div>
  );
};

export default Course;
