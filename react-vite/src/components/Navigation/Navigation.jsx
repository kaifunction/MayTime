import { NavLink } from "react-router-dom";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";

function Navigation() {
  return (
      <div className="nav-bar-container">
        <NavLink to="/">
               <img src='/public/Maytime logo Final.png'
                    alt='Logo'
                    className='nav-bar-left-logo'
               />
          </NavLink>
          <div className="nav-bar-right-loginButton">
            <ProfileButton />
          </div>
      </div>
  );
}

export default Navigation;
