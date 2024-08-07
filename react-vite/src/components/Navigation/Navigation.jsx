import { NavLink } from "react-router-dom";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="nav-bar-container">
      <div className="nav-bar-left-logo" style={{backgroundColor: '#00202c'}}>
        <NavLink to="/" style={{backgroundColor: '#00202c'}}>
          <img
            src="/public/Maytime logo FinalWhite.png"
            alt="Logo"
            className="nav-bar-left-logo"
            style={{backgroundColor: '#00202c'}}
          />
        </NavLink>
      </div>
      <div className="nav-bar-left"  style={{backgroundColor: '#00202c'}}>
        <div className="nav-bar-left-links" style={{backgroundColor: '#00202c'}}>
          <NavLink
            to="/"
            className="nav-bar-button"
            style={{ textDecoration: "none", backgroundColor: '#00202c' }}
          >
            Home
          </NavLink>
          {/* <NavLink></NavLink> */}

          <NavLink
            to="/photos"
            style={{ textDecoration: "none", backgroundColor: '#00202c'  }}
          >
            <div
              className="nav-bar-button"
              // onClick={() => window.alert("Feature coming soon")}
              style={{ cursor: "pointer" }}
            >
              Photos
            </div>
          </NavLink>

          <NavLink
            to="/about_us"
            style={{ textDecoration: "none", backgroundColor: '#00202c'  }}
          >
            <div
              className="nav-bar-button"
              // onClick={() => window.alert("Feature coming soon")}
              style={{ cursor: "pointer" }}
            >
              About Us
            </div>
          </NavLink>

          <NavLink
            to="/contact_us"
            style={{ textDecoration: "none", backgroundColor: '#00202c'  }}
          >
            <div
              className="nav-bar-button"
              // onClick={() => window.alert("Feature coming soon")}
              style={{ cursor: "pointer" }}
            >
              Contact Us
            </div>
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
