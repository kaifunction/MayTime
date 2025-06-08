import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaUser, FaSignInAlt, FaUserPlus } from "react-icons/fa";
import { thunkLogout } from "../../redux/session";
import OpenModalMenuItem from "./OpenModalMenuItem";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import "./Navigation.css";

function ProfileButton() {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const user = useSelector((store) => store.session.user);
  const ulRef = useRef();

  const toggleMenu = (e) => {
    e.stopPropagation(); // Keep from bubbling up to document and triggering closeMenu
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (ulRef.current && !ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const closeMenu = () => setShowMenu(false);

  const logout = (e) => {
    e.preventDefault();
    dispatch(thunkLogout());
    closeMenu();
  };

  const userFirstLetter = user?.username
  ?.split(' ')[0]
  ?.charAt(0).toUpperCase() + user?.username?.split(' ')[0]?.slice(1);

  return (
    <div onClick={toggleMenu}>
      <button className="login-signup-button">
        {userFirstLetter ? (
          userFirstLetter
        ) : (
          <FaUser className="fauser"/>
        )}
      </button>
      {showMenu && (
        <div className="profile-dropdown" ref={ulRef}>
          {user ? (
            <div className="loginButton-list">
              <span
                style={{
                  color: "#FF4500",
                  zIndex: "1000",
                  fontWeight: "bold",
                }}
              >
                {user?.username.toUpperCase()}
              </span>
              <br />
              <span
                style={{
                  color: "#FF4500",
                  zIndex: "1000",
                  letterSpacing: "0.5px",
                }}
              >
                {user?.email}
              </span>
              <br />
              <span style={{ zIndex: "1000" }}>
                <button onClick={logout} className="logout-button">
                  LOG OUT
                </button>
              </span>
            </div>
          ) : (
            <div className="loginSignup-button">
              <span>
                <div className="icons icons-login">
                  <FaSignInAlt
                    style={{ color: "#e80000", backgroundColor: "transparent" }}
                  />
                  <OpenModalMenuItem
                    itemText="Log In"
                    onItemClick={closeMenu}
                    modalComponent={<LoginFormModal />}
                  />
                </div>
                <div className="icons icons-signup">
                  <FaUserPlus
                    style={{ color: "#e80000", backgroundColor: "transparent" }}
                  />
                  <OpenModalMenuItem
                    itemText="Sign Up"
                    onItemClick={closeMenu}
                    modalComponent={<SignupFormModal />}
                  />
                </div>
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ProfileButton;
