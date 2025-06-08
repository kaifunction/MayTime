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
  const [isSubmitting, setIsSubmitting] = useState(false);

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

    setIsSubmitting(true);
    const serverResponse = await dispatch(
      thunkLogin({
        email,
        password,
      })
    );
    setIsSubmitting(false);

    if (serverResponse) {
      setErrors(serverResponse);
    } else {
      closeModal();
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-moddal-h1">
        <span style={{ fontWeight: "bold" }}>LOG</span>{" "}
        <span style={{ fontWeight: "lighter", backgroundColor: "transparent" }}>
          IN
        </span>
      </h1>
      <form onSubmit={handleSubmit}>
        <label className="login-label">
          <span style={{ display: "inline" }}>
            Email&nbsp;<span style={{ color: "red" }}>*</span>
          </span>
          <input
            className="login-input"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email（请输入邮箱）"
          />
        </label>
        {errors.email && <p className="error">{errors.email}</p>}
        <label className="login-label">
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
              className="login-input-password"
            />
            {showPassword ? (
              <FaEyeSlash
                onClick={() => setShowPassword(false)}
                className="faeyeslash"
              />
            ) : (
              <FaEye onClick={() => setShowPassword(true)} className="faeye" />
            )}
          </div>
        </label>
        {errors.password && <p className="error">{errors.password}</p>}
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Logging in..." : "LOG IN"}
        </button>
        <div onClick={toggleMenu} className="close-modal">
          {/* <p style={{marginRight:'5px'}}>Forgot your password? </p> */}
          <br />
          <div className="signup-redirect">
            <p>Don&apos;t have an account?</p>
            <OpenModalMenuItem
              itemText="Sign Up"
              onItemClick={closeMenu}
              modalComponent={<SignupFormModal />}
              className="SignUpModal"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginFormModal;
