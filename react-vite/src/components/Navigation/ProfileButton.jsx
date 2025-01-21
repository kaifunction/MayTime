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

  const userFirstLetter = user?.username[0]?.toUpperCase();

  return (
    <div onClick={toggleMenu}>
      <button className="login-signup-button">
        {userFirstLetter ? (
          userFirstLetter
        ) : (
          <FaUser style={{ color: "#ff6a00", marginTop: "4px" }} />
        )}
      </button>
      {showMenu && (
        <div className={"profile-dropdown"} ref={ulRef}>
          {user ? (
            <div className="loginButton-list">
              <span
                style={{ color: "#ff6a00", zIndex: "1000", fontWeight: "bold" }}
              >
                {user.username.toUpperCase()}
              </span>
              <br />
              <span
                style={{
                  color: "#ff6a00",
                  zIndex: "1000",
                  letterSpacing: "0.5px",
                }}
              >
                {user.email}
              </span>
              <br />
              <span style={{ zIndex: "1000" }}>
                <button
                  onClick={logout}
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    marginTop: "5px",
                  }}
                >
                  LOG OUT
                </button>
              </span>
            </div>
          ) : (
            <div className="loginSignup-button">
              <span>
                <div
                  style={{
                    backgroundColor: "transparent",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "1px",
                    marginLeft: "10px",
                  }}
                  className="icons"
                >
                  <FaSignInAlt
                    style={{ color: "#ff6a00", backgroundColor: "transparent" }}
                  />
                  <OpenModalMenuItem
                    itemText="LOG IN"
                    onItemClick={closeMenu}
                    modalComponent={<LoginFormModal />}
                  />
                </div>
                <div
                  style={{
                    backgroundColor: "transparent",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "1px",
                    marginLeft: "10px",
                  }}
                  className="icons"
                >
                  <FaUserPlus
                    style={{ color: "#ff6a00", backgroundColor: "transparent" }}
                  />
                  <OpenModalMenuItem
                    itemText="SIGN UP"
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
