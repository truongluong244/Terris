import React, { useState } from "react";
import "./Home.css";
import image1 from "../../Assets/image1.jpg";
import image6 from "../../Assets/img6.jpeg";
import video from '../../Assets/video.mp4'
import {
    AiFillStar
  } from "react-icons/ai";

const Home = () => {
  return (
    <div className=" flex homeContainer  ">
      {/* layout 1 */}
      <div className="homeBackground">
        <div className="flex homeComponent">
          <div className="homeHealineText">
            <h1 className="homeHealine">
              Chương Trình Giáo Dục STEAM Robotics
            </h1>
          </div>
          <div className="homeHealineText">
            <h1 className="homeHealine homeHealine1">Giải Pháp Toàn Diện Từ</h1>
          </div>
          <div className="homeHealineText">
            <h1 className="homeHealine homeHealine2">TERIS VIỆT NAM</h1>
          </div>
          <div className="homeHeadImg">
            <div className="homeHealineIMG"></div>
          </div>
        </div>
      </div>

      {/* layout 2 */}
      <div className="grid homeInfo">
        <div className="homeInfoHead">
          <h2 className="homeInfoh2">Giới Thiệu TERIS Việt Nam</h2>
        </div>
        <div className="homeInfoh2Line"></div>
        <div className="homeInfoIMG">
          <div className="homeInfoImgEdit"></div>
        </div>

        <div className="homeInfoText">
        
          <p>
            Công ty TNHH Đầu tư Giáo dục và Công nghệ TERIS Việt Nam là đối tác
            được lựa chọn bởi Công ty Cổ phần MakeBlock Việt Nam - đại diện
            chính hãng tại Việt Nam của tập đoàn MakeBlock, nhằm hợp tác phát
            triển, cung cấp và điều phối chương trình giáo dục STEAM Robotics
            bản quyền từ MakeBlock cho các trường học tại Việt Nam.{" "}
          </p>
          <br />
          <p>
            TERIS Việt Nam mang đến một giải pháp toàn diện dựa trên nền tảng hệ
            sinh thái của MakeBlock toàn cầu, bao gồm cung cấp phần cứng, phần
            mềm, chương trình học đa dạng, đội ngũ giáo viên được đào tạo bài
            bản và kết nối với các cuộc thi Robot trong nước và quốc tế, nhằm
            đạt được sự tích hợp sâu sắc giữa công nghệ và giáo dục.
          </p>
        </div>
      </div>

      {/* layout 3 */}
      <div className="grid homeInfo ">
        <div className="homeInfoHead ">
          <h2 className="homeInfoh2">6 LÝ DO ĐỂ CHỌN TERIS</h2>
        </div>
        <div className="homeInfoh2Line "></div>

        <div className="homeInfoIMGLayout2 colum11">
          <div className="homeInfoImgLayout2Edit "></div>
          <div className="homeInfoLayout2Text ">
            <p>Công ty TNHH Đầu tư Giáo dục TERIS </p>
          </div>
        </div>

        <div className="homeInfoIMGLayout2 colum11">
          <div className="homeInfoLayout2Text ">
            <p>Công ty TNHH Đầu tư Giáo dục TERIS </p>
          </div>
          <div className="homeInfoImgLayout2Edit "></div>
        </div>

        <div className="homeInfoIMGLayout2 colum11">
          <div className="homeInfoImgLayout2Edit "></div>
          <div className="homeInfoLayout2Text ">
            <p>Công ty TNHH Đầu tư Giáo dục TERIS </p>
          </div>
        </div>

        <div className="homeInfoIMGLayout2 colum11">
          <div className="homeInfoLayout2Text ">
            <p>Công ty TNHH Đầu tư Giáo dục TERIS </p>
          </div>
          <div className="homeInfoImgLayout2Edit "></div>
        </div>

        <div className="homeInfoIMGLayout2 colum11">
          <div className="homeInfoImgLayout2Edit "></div>
          <div className="homeInfoLayout2Text ">
            <p>Công ty TNHH Đầu tư Giáo dục TERIS </p>
          </div>
        </div>

        <div className="homeInfoIMGLayout2 colum11">
          <div className="homeInfoLayout2Text ">
            <p>Công ty TNHH Đầu tư Giáo dục TERIS </p>
          </div>
          <div className="homeInfoImgLayout2Edit "></div>
        </div>

        {/* layout 4 */}
        <div className="grid homeInfo ">
          <div className="homeInfoHead ">
            <h2 className="homeInfoh2">Đội Ngũ Teris</h2>
          </div>
          <div className="homeInfoh2Line "></div>

          <div className="homeTeam colum41">
            <div className="homeTeamLayout">
              <img className="homteamimg " src={image6}></img>
              <div className="homeTeamText ">
                <h3 className="homeTeamTexth3">GV.A</h3>
                <p className="homeTeamTextP">
                  Công ty TNHH Đầu tư Giáo dục TERIS{" "}
                </p>
              </div>
            </div>
            <div className="homeTeamLayout">
              <img className="homteamimg " src={image6}></img>
              <div className="homeTeamText ">
                <h3 className="homeTeamTexth3">GV.A</h3>
                <p className="homeTeamTextP">
                  Công ty TNHH Đầu tư Giáo dục TERIS{" "}
                </p>
              </div>
            </div>
            <div className="homeTeamLayout">
              <img className="homteamimg " src={image6}></img>
              <div className="homeTeamText ">
                <h3 className="homeTeamTexth3">GV.A</h3>
                <p className="homeTeamTextP">
                  Công ty TNHH Đầu tư Giáo dục TERIS{" "}
                </p>
              </div>
            </div>
            <div className="homeTeamLayout">
              <img className="homteamimg " src={image6}></img>
              <div className="homeTeamText ">
                <h3 className="homeTeamTexth3">GV.A</h3>
                <p className="homeTeamTextP">
                  Công ty TNHH Đầu tư Giáo dục TERIS{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* layout 5 */}
       <div className="grid homeInfo ">
          <div className="homeInfoHead ">
            <h2 className="homeInfoh2">Một số hoạt động</h2>
          </div>
          <div className="homeInfoh2Line "></div>
          <div className="homeVideo">
            {/* muon co am thanh close muted */}
          <video src={video}  muted autoPlay loop type='video/mp4'></video>
          </div>
          <div className="homeVideoImg colum41">
            <img src={image6} ></img>
            <img src={image6} ></img>
            <img src={image6} ></img>
            <img src={image6} ></img>
          </div>
        </div>
         {/* layout 6 */}
       <div className="grid homeInfo ">
          <div className="homeInfoHead ">
            <h2 className="homeInfoh2">Cảm Nhận Của Học Viên</h2>
          </div>
          <div className="homeInfoh2Line "></div>
          
          <div className="homeComment colum11">
            <div className="homeCommentLayout">
              <img className="homeCommentImg " src={image6}></img>
              
              <div className="homeCommentText ">
              <AiFillStar className="icon" />
              <AiFillStar className="icon" />
              <AiFillStar className="icon" />
              <AiFillStar className="icon" />
              <AiFillStar className="icon" />
              <p className="homeCommentTextP">
                  Công ty TNHH Đầu tư Giáo dục TERIS hdoahohdahdpaodpa kanlala andlanlanldnlnd adladlalda aldaldlad labdladbla adkadbk
                </p>
                <h4 className="homeCommentTexth3">GV.A</h4>
                
              </div>
            </div>

            <div className="homeCommentLayout">
              <img className="homeCommentImg " src={image6}></img>
              
              <div className="homeCommentText ">
              <AiFillStar className="icon" />
              <AiFillStar className="icon" />
              <AiFillStar className="icon" />
              <AiFillStar className="icon" />
              <AiFillStar className="icon" />
              <p className="homeCommentTextP">
                  Công ty TNHH Đầu tư Giáo dục TERIS hdoahohdahdpaodpa kanlala andlanlanldnlnd adladlalda aldaldlad labdladbla adkadbk
                </p>
                <h4 className="homeCommentTexth3">GV.A</h4>
                
              </div>
            </div>
          </div>


        </div>

       
      </div>

       
    </div>
  );
};

export default Home;
