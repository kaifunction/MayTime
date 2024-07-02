// import { NavLink } from 'react-router-dom';
// import {IoIosArrowForward} from 'react-icons/io'
import { NavLink } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
     return (
     <div className="home-page-container">
     <div className="home-page-text-title">
        <h1 style={{fontFamily: 'rockwell', letterSpacing: '5px', color:'#c2c2c2'}}><span style={{fontFamily: 'rockwell',color:'#ff6a00 '}}>M</span>AY<span style={{fontFamily: 'rockwell',color:'#ff6a00'}}>T</span>IME</h1>
        {/* <h1 style={{fontFamily: 'rockwell', letterSpacing: '9px', color:'#c2c2c2'}}>MAYTIME</h1> */}

        {/* <img src='/public/homepage.jpg' alt='homepage' className='homepage-image' /> */}
        <div className='text-links'>
         <div className="home-page-text">
        {/* <NavLink to={'/pin'} style={{textDecoration:'none', color:'#000000'}}> */}

        <h1>Unleash Your</h1>
        <h2 style={{paddingLeft: '20px', marginTop: '-20px', color:'#c2c2c2'}}>Creative Exploration.</h2>

        {/* </NavLink> */}
        </div>
        <div className='socialmedialinks'>
         <NavLink to={'https://www.xiaohongshu.com/user/profile/650f8469000000001200706a'} target='_blank'>
         <img src='/public/xiaohongshuLOGO.png' alt='xiaohongshu' className='xiaohongshu-logo'  />
         </NavLink>
         <NavLink to={'https://www.instagram.com/maytimejewelry/'} target='_blank'>
         <img src='/public/instagram.png' alt='instagram' className='instagram-logo' />
         </NavLink>
         <NavLink to={'https://www.facebook.com/maytimejewelry'} target='_blank'>
         <img src='/wechat.svg' alt='wechat' className='wechat-logo' />
         </NavLink>
        </div>
        </div>


     </div>
     </div>
     );
};


export default HomePage;
