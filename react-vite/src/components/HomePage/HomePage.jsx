// import { NavLink } from 'react-router-dom';
// import {IoIosArrowForward} from 'react-icons/io'
import { NavLink } from "react-router-dom";
import xiaohongshuLogo from "../../assets/xiaohongshuLOGO.png";
import instagramLogo from "../../assets/Instagram.png";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div
      className="home-page-container"
      style={{ backgroundColor: "transparent" }}
    >
      <div className="overlay">
        <div className="home-page-text-title">
          <div className="maytime-centered-title">
            {/* <h1 className="home-page-maytime-title">
              <span>M</span>AY<span>T</span>IME
            </h1> */}
          </div>
          <div className="text-links">
            <div className="home-page-text">
              <h1 style={{ letterSpacing: "1px" }}>PRESERVE MEMORIES</h1>
              <h2>
                CAPTURE BEAUTY<span style={{ color: "#e80000" }}>.</span>
              </h2>
            </div>
            <div className="socialmedialinks">
              <NavLink
                to={
                  "https://www.xiaohongshu.com/user/profile/650f8469000000001200706a"
                }
                target="_blank"
              >
                <img
                  src={xiaohongshuLogo}
                  alt="xiaohongshu"
                  className="xiaohongshu-logo"
                  style={{
                    backgroundColor: "#FF4500",
                    padding: "2px",
                    borderRadius: "10px",
                  }}
                />
              </NavLink>
              <NavLink
                to={"https://www.instagram.com/maytimejewelry/"}
                target="_blank"
              >
                <img
                  src={instagramLogo}
                  alt="instagram"
                  className="instagram-logo"
                  style={{
                    backgroundColor: "#FF4500",
                    padding: "2px",
                    borderRadius: "10px",
                  }}
                />
              </NavLink>
              <NavLink
                to={"https://www.facebook.com/maytimejewelry"}
                target="_blank"
              >
                <img
                  src="/wechat.svg"
                  alt="wechat"
                  className="wechat-logo"
                  style={{
                    backgroundColor: "#FF4500",
                    padding: "2px",
                    borderRadius: "10px",
                  }}
                />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
