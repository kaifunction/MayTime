// import { NavLink } from 'react-router-dom';
// import {IoIosArrowForward} from 'react-icons/io'
import { NavLink } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page-container">
      <div className="overlay">
                <div className="home-page-text-title">
                    <h1 style={{ fontFamily: 'rockwell', letterSpacing: '5px', color: '#c2c2c2', backgroundColor:'rgba(0,0,0,0)' }}>
                        <span style={{ fontFamily: 'rockwell', color: '#ff6a00 ' , backgroundColor:'rgba(0,0,0,0)'}}>M</span>AY
                        <span style={{ fontFamily: 'rockwell', color: '#ff6a00', backgroundColor:'rgba(0,0,0,0)' }}>T</span>IME
                    </h1>
                    <div className='text-links' style={{backgroundColor:'rgba(0,0,0,0)'}}>
                        <div className="home-page-text" style={{backgroundColor:'rgba(0,0,0,0)'}}>
                            <h1>Unleash Your</h1>
                            <h2 style={{ paddingLeft: '20px', marginTop: '-20px', color: '#c2c2c2',backgroundColor:'rgba(0,0,0,0)' }}>Creative Exploration.</h2>
                        </div>
                        <div className='socialmedialinks' style={{backgroundColor:'rgba(0,0,0,0)'}}>
                            <NavLink to={'https://www.xiaohongshu.com/user/profile/650f8469000000001200706a'} target='_blank'>
                                <img src='/public/xiaohongshuLOGO.png' alt='xiaohongshu' className='xiaohongshu-logo' style={{backgroundColor:'#ff6a00', padding:'2px', borderRadius:'10px'}}/>
                            </NavLink>
                            <NavLink to={'https://www.instagram.com/maytimejewelry/'} target='_blank'>
                                <img src='/public/instagram.png' alt='instagram' className='instagram-logo' style={{backgroundColor:'#ff6a00', padding:'2px', borderRadius:'10px'}}/>
                            </NavLink>
                            <NavLink to={'https://www.facebook.com/maytimejewelry'} target='_blank'>
                                <img src='/wechat.svg' alt='wechat' className='wechat-logo' style={{backgroundColor:'#ff6a00', padding:'2px', borderRadius:'10px'}}/>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  );
};

export default HomePage;
