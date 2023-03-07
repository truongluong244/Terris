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
          <div className="homeInfoImgEdit homeInfoImgBGR"></div>
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
          <div className="homeInfoImgLayout2Edit homeInfoImg1"></div>
          <div className="homeInfoLayout2Text ">
            <h3>Thiết kế và nâng cấp chương trình/ giáo án bộ môn steam robotics</h3>
            <p>- Cung cấp chương trình học bản quyền từ MakeBlock quốc tế </p>
            <br></br>
            <p>- Giáo án chi tiết và slide bài giảng được xây dựng bài bản từ các chuyên gia, cố vấn giáo dục đến của TERIS VN</p>
            <br></br>
            <p>-Phân phối chương trình theo kế hoạch năm học của nhà trường </p>
            <br></br>
            <p>- Đồng hành với nhà trường sắp xếp thời khóa biểu hợp lý, tân dụng được tối đa nguồn lực với trang thiết bị sẵn có </p>         
            <br></br>
            <p>- Liên tục cập nhật chương trình bản quyền mới từ MAkeBlock quốc tế và nâng cấp giáo án tương ứng </p>
          
          
          
          </div>
        </div>

        <div className="homeInfoIMGLayout2 colum11">
          <div className="homeInfoLayout2Text ">
            <h3>Giảng dạy và quản lý lớp học  </h3>
            <p>- Nhân sự được đào tạo bài bản của TERIS VN bao gồm giáo viên, trợ giảng, kỹ thuật viên và giáo vụ sẽ trực tiếp quản lý lớp học, giảng dạy chương trình STEAM Robotics theo thời khóa biểu đươc phân, đảm bảo bám sát phân phối chương trình mà hai bên thống nhất </p>
            <br></br>
            <p>- Tổ chức các khóa nâng cao nghiệp vụ và cập nhật chương trình liên tục để cải tiến và nâng cao chất lượng bài giảng </p>
          <br></br>
          <p>Có sụ phối hơp chặt chẽ với nhà trường để báo cáo tình hình học tập của học sinh</p>
          </div>
          <div className="homeInfoImgLayout2Edit homeInfoImg2 "></div>
        </div>

        <div className="homeInfoIMGLayout2 colum11">
          <div className="homeInfoImgLayout2Edit homeInfoImg3"></div>
          <div className="homeInfoLayout2Text ">
            <h3>Ngày hội trải nghiệm</h3>
            <p>- Chia sẻ với nhà trường những kiến thức, kỹ năng tổ chức ngày hội trải nghiệm </p>
            <br></br>
            <p>- Đồng hành và phụ trách mảng STEAM Robotics trong Ngày hội </p>
          </div>
        </div>

        <div className="homeInfoIMGLayout2 colum11">
          <div className="homeInfoLayout2Text ">
            <h3>CLB/ chương trình hè  </h3>
            <p>- Quản lý và tổ chức thực hiện lớp CLB/ Chương trình hè theo kế hoạch phối hợp với nhà trường </p>
          </div>
          <div className="homeInfoImgLayout2Edit homeInfoImg4"></div>
        </div>

        <div className="homeInfoIMGLayout2 colum11">
          <div className="homeInfoImgLayout2Edit homeInfoImg5"></div>
          <div className="homeInfoLayout2Text ">
            <h3>Bồi dưỡng tham gia các cuộc thi sáng tạo Robot</h3>
            <p>- Tổ chức bồi dưỡng học sinh giỏi của trường tham gia các cuộc thi sáng tạo Robot các cấp học trong nước 
</p>
<br></br>
<p>- Bồi dưỡng học sinh tham gia cuộc thi lớn trong nước và quốc tế như Giải đấu MakeX, Robocon, Hackathon,...</p>
          </div>
        </div>

        <div className="homeInfoIMGLayout2 colum11">
          <div className="homeInfoLayout2Text ">
            <h3>Đầu tư phòng học chuẩn TERIS STEAM LAB</h3>
          </div>
          <div className="homeInfoImgLayout2Edit homeInfoImg6 "></div>
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
