import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { thunkSignup } from "../../redux/session";
import OpenModalMenuItem from "../Navigation/OpenModalMenuItem";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import LoginFormModal from "../LoginFormModal";
import "./SignupForm.css";

function SignupFormModal() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const { closeModal } = useModal();
  const [showMenu, setShowMenu] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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

  const validateEP = () => {
    let isValid = true;
    let tempErrors = {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      tempErrors.email = "Email is required.";
      isValid = false;
    } else if (!emailRegex.test(email)) {
      tempErrors.email = "Email is invalid.";
      isValid = false;
    }

    if (!username) {
      tempErrors.username = "Username is required.";
      isValid = false;
    } else if (username.length < 4 || username.length > 50) {
      tempErrors.username = "Username must be between 4 and 50 characters.";
      isValid = false;
    } else if (!/^[a-zA-Z0-9_]+$/.test(username)) {
      tempErrors.username =
        "Username can only contain letters, numbers, and underscores.";
      isValid = false;
    }

    if (!password) {
      tempErrors.password = "Password is required.";
      isValid = false;
    } else if (password.length < 6 || password.length > 50) {
      tempErrors.password = "Password must be between 6 and 50 characters.";
      isValid = false;
    }

    if (password !== confirmPassword) {
      tempErrors.confirmPassword =
        "Confirm Password must be the same as the Password.";
      isValid = false;
    }
    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEP()) return;

    // if (password !== confirmPassword) {
    //   return setErrors({
    //     confirmPassword:
    //       "Confirm Password must be the same as the Password.",
    //   });
    // }

    const serverResponse = await dispatch(
      thunkSignup({
        email,
        username,
        password,
      })
    );

    if (serverResponse) {
      setErrors(serverResponse);
    } else {
      closeModal();
    }
  };

  return (
    <div className="signup-container">
      <h1
        style={{
          fontSize: "25px",
          color: "#ff6a00",
          backgroundColor: "#00202c",
          padding: "20px 20px 20px 0",
          margin: "0px",
        }}
      >
        <span style={{ fontWeight: "bold", backgroundColor: "transparent" }}>
          SIGN
        </span>{" "}
        <span style={{ fontWeight: "lighter", backgroundColor: "transparent" }}>
          UP
        </span>
      </h1>
      {errors.server && (
        <p className="error" style={{ color: "#f94880" }}>
          {errors.server}
        </p>
      )}
      <form onSubmit={handleSubmit}>
        <label style={{ color: "#ff6a00", marginTop: "40px" }}>
          EMAIL
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
            style={{
              backgroundColor: "#00202c",
              fontWeight: "550",
              color: "white",
              borderColor: "#ff6a00",
              borderRadius: "5px",
              width: "340px",
              height: "30px",
              borderWidth: "1px",
              padding: "5px 10px",
            }}
          />
        </label>
        {errors.email && <p className="error">{errors.email}</p>}
        <label style={{ color: "#ff6a00" }}>
          USERNAME
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder="Enter your username"
            style={{
              backgroundColor: "#00202c",
              fontWeight: "550",
              color: "white",
              borderColor: "#ff6a00",
              borderRadius: "5px",
              width: "340px",
              height: "30px",
              borderWidth: "1px",
              padding: "5px 10px",
            }}
          />
        </label>
        {errors.username && <p className="error">{errors.username}</p>}
        <label style={{ color: "#ff6a00" }}>
          PASSWORD
          <div style={{ position: "relative" }}>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
              style={{
                backgroundColor: "#00202c",
                fontWeight: "550",
                color: "white",
                borderColor: "#ff6a00",
                borderRadius: "5px",
                width: "340px",
                height: "30px",
                borderWidth: "1px",
                padding: "5px 10px",
              }}
            />
            {showPassword ? (
              <FaEyeSlash
                onClick={() => setShowPassword(false)}
                style={{
                  position: "absolute",
                  top: "12px",
                  right: "10px",
                  cursor: "pointer",
                  color: "#ff6a00",
                }}
              />
            ) : (
              <FaEye
                onClick={() => setShowPassword(true)}
                style={{
                  position: "absolute",
                  top: "12px",
                  right: "10px",
                  cursor: "pointer",
                  color: "#ff6a00",
                }}
              />
            )}
          </div>
        </label>
        {errors.password && <p className="error">{errors.password}</p>}
        <label style={{ color: "#ff6a00" }}>
          CONFIRM PASSWORD
          <div style={{ position: "relative" }}>
            <input
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              placeholder="Enter your password again"
              style={{
                backgroundColor: "#00202c",
                fontWeight: "550",
                color: "white",
                borderColor: "#ff6a00",
                borderRadius: "5px",
                width: "340px",
                height: "30px",
                borderWidth: "1px",
                padding: "5px 10px",
              }}
            />
            {showConfirmPassword ? (
              <FaEyeSlash
                onClick={() => setShowConfirmPassword(false)}
                style={{
                  position: "absolute",
                  top: "12px",
                  right: "10px",
                  cursor: "pointer",
                  color: "#ff6a00",
                }}
              />
            ) : (
              <FaEye
                onClick={() => setShowConfirmPassword(true)}
                style={{
                  position: "absolute",
                  top: "12px",
                  right: "10px",
                  cursor: "pointer",
                  color: "#ff6a00",
                }}
              />
            )}
          </div>
        </label>
        {errors.confirmPassword && (
          <p className="error">{errors.confirmPassword}</p>
        )}
        <button type="submit">Sign Up</button>
        <div onClick={toggleMenu} className="close-modal">
          <p>Already have an account?</p>
          <OpenModalMenuItem
            itemText="Log In"
            onItemClick={closeMenu}
            modalComponent={<LoginFormModal />}
          />
        </div>
      </form>
    </div>
  );
}

export default SignupFormModal;
