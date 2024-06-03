import { NavLink } from 'react-router-dom';
import {IoIosArrowForward} from 'react-icons/io'
import './HomePage.css';

const HomePage = () => {
     return (
     <div className="home-page-container">
     <div className="home-page-text-title">
        <h1 style={{fontFamily: 'rockwell'}}>MAYTIME</h1>
        <div className="home-page-text">
        {/* <NavLink to={'/pin'} style={{textDecoration:'none', color:'#000000'}}> */}
        <h1>Unleash Your</h1>
        <h2 style={{paddingLeft: '20px', marginTop: '-20px'}}>Creative Exploration.</h2>
        {/* </NavLink> */}
        </div>
     </div>

     </div>
     );
};


export default HomePage;
