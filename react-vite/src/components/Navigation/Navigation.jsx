import { NavLink } from "react-router-dom";
import ProfileButton from "./ProfileButton";
import MaytimeLogo from "../../assets/MaytimelogoFinalWhite.png";
import NavButton from "../NavButton/NavButton";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="nav-bar-container">
      <div className="nav-bar-left-logo">
        <NavLink to="/">
          <img src={MaytimeLogo} alt="Logo" className="nav-bar-left-logo" />
        </NavLink>
      </div>
      <div className="nav-bar-center">
        <NavButton to="/" label="Home" />
        <NavButton to="/photos" label="Photos" />
        <NavButton to="/about_us" label="About Us" />
        <NavButton to="/reservation" label="Reservation" />
        <NavButton to="/contact_us" label="Contact Us" />
      </div>

      <div className="nav-bar-profile">
        <ProfileButton />
      </div>
    </div>
  );
}

export default Navigation;
