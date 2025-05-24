import { NavLink } from "react-router-dom";
import ProfileButton from "./ProfileButton";
import MaytimeLogo from "../../assets/MaytimelogoFinalWhite.png";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="nav-bar-container">
      <div className="nav-bar-left-logo">
        <NavLink to="/">
          <img
            src={MaytimeLogo}
            alt="Logo"
            className="nav-bar-left-logo"
          />
        </NavLink>
      </div>
      <div className="nav-bar-left">
        <div className="nav-bar-left-links">
          <NavLink to="/" className="nav-bar-button">
            Home
          </NavLink>

          <NavLink to="/photos" className="nav-bar-button">
            <div>Photos</div>
          </NavLink>

          <NavLink to="/about_us" className="nav-bar-button">
            <div>About Us</div>
          </NavLink>

          <NavLink to="/reservation" className="nav-bar-button">
            <div>Reservation</div>
          </NavLink>

          <NavLink to="/contact_us" className="nav-bar-button">
            <div>Contact Us</div>
          </NavLink>
        </div>

        <div className="nav-bar-right-loginButton">
          <ProfileButton />
        </div>
      </div>
    </div>
  );
}

export default Navigation;
