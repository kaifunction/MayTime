import { NavLink } from "react-router-dom";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";

function Navigation() {
  return (
      <div className="nav-bar-container">
          <div className="nav-bar-left-logo">
            <NavLink to="/">
                  <img src='/public/Maytime logo Final Only.png'
                        alt='Logo'
                        className='nav-bar-left-logo'
                  />
            </NavLink>
          </div>
          <div className="nav-bar-left-links">
              <NavLink
                to="/"
                className="nav-bar-button"
                style={{ textDecoration: "none" }}
              >
                Home
              </NavLink>
              {/* <NavLink></NavLink> */}

              <NavLink
                to="/"
                style={{ textDecoration: "none" }}
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
                to="/"
                style={{ textDecoration: "none" }}
              >
                <div
                  className="nav-bar-button"
                  // onClick={() => window.alert("Feature coming soon")}
                  style={{ cursor: "pointer" }}
                >
                  About
                </div>
              </NavLink>

              <NavLink
                to="/"
                style={{ textDecoration: "none" }}
              >
                <div
                  className="nav-bar-button"
                  // onClick={() => window.alert("Feature coming soon")}
                  style={{ cursor: "pointer" }}
                >
                  Contact Us
                </div>
              </NavLink>

              {/* <NavLink
                to="/pin-creation-tool"
                style={{ textDecoration: "none" }}
              >
                <div className="nav-bar-button">Create</div>
              </NavLink> */}
        </div>


        <div className="nav-bar-right-loginButton">
          <ProfileButton />
        </div>
      </div>
  );
}

export default Navigation;
