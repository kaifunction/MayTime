import { useState, useEffect, useRef } from "react";
import { thunkLogin } from "../../redux/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import OpenModalMenuItem from "../Navigation/OpenModalMenuItem";
import SignupFormModal from "../SignupFormModal";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./LoginForm.css";

function LoginFormModal() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const { closeModal } = useModal();
  const [showMenu, setShowMenu] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

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
    let tempErrors = { email: "", password: "" };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      tempErrors.email = "Email is required.";
      isValid = false;
    } else if (!emailRegex.test(email)) {
      tempErrors.email = "Email is invalid.";
      isValid = false;
    }

    if (!password) {
      tempErrors.password = "Password is required.";
      isValid = false;
    } else if (password.length < 6 || password.length > 50) {
      tempErrors.password = "Password must be between 6 and 50 characters.";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEP()) return;

    const serverResponse = await dispatch(
      thunkLogin({
        email,
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
    <div className="login-container">
      <h1
        style={{
          fontSize: "25px",
          color: "#ff6a00",
          backgroundColor: "#00202c",
          padding: "20px 20px 20px 0",
          margin: "0px",
        }}
      >
        <span style={{ fontWeight: "bold" }}>LOG</span>{" "}
        <span style={{ fontWeight: "lighter", backgroundColor: "transparent" }}>
          IN
        </span>
      </h1>
      <form onSubmit={handleSubmit}>
        <label style={{ color: "#ff6a00", marginTop: "40px" }}>
          <span style={{ display: "inline" }}>
            Email&nbsp;<span style={{ color: "red" }}>*</span>
          </span>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email（请输入邮箱）"
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
          <span style={{ display: "inline" }}>
            Password&nbsp;<span style={{ color: "red" }}>*</span>
          </span>
          <div style={{ position: "relative", width: "360px" }}>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password（请输入密码）"
              style={{
                backgroundColor: "#00202c",
                fontWeight: "550",
                color: "white",
                borderColor: "#ff6a00",
                borderRadius: "5px",
                width: "100%",
                height: "41px",
                borderWidth: "1px",
                padding: "5px 35px 5px 10px", // 注意右边 padding 预留给图标
                boxSizing: "border-box",
              }}
            />
            {showPassword ? (
              <FaEyeSlash
                onClick={() => setShowPassword(false)}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                  color: "#ff6a00",
                }}
              />
            ) : (
              <FaEye
                onClick={() => setShowPassword(true)}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                  color: "#ff6a00",
                }}
              />
            )}
          </div>
        </label>
        {errors.password && <p className="error">{errors.password}</p>}
        <button type="submit">LOG IN</button>
        <div onClick={toggleMenu} className="close-modal">
          {/* <p style={{marginRight:'5px'}}>Forgot your password? </p> */}
          <br />
          <p>Don&apos;t have an account?</p>
          <OpenModalMenuItem
            itemText="Sign Up"
            onItemClick={closeMenu}
            modalComponent={<SignupFormModal />}
            className="two-buttons"
          />
        </div>
      </form>
    </div>
  );
}

export default LoginFormModal;
