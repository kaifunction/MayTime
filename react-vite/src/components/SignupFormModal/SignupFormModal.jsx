import { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { thunkSignup } from "../../redux/session";
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
      return setErrors({
        confirmPassword: "Confirm Password must be the same as the Password.",
      });
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
          color: "#ff6a00",
          backgroundColor: "black",
          padding: "20px 20px 20px 0",
          margin: "0px",
        }}
      >
        SIGN UP
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
              backgroundColor: "black",
              color: "white",
              width: "300px",
              height: "30px",
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
              backgroundColor: "black",
              color: "white",
              width: "300px",
              height: "30px",
            }}
          />
        </label>
        {errors.username && <p className="error">{errors.username}</p>}
        <label style={{ color: "#ff6a00" }}>
          PASSWORD
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
            style={{
              backgroundColor: "black",
              color: "white",
              width: "300px",
              height: "30px",
            }}
          />
        </label>
        {errors.password && <p className="error">{errors.password}</p>}
        <label style={{ color: "#ff6a00" }}>
          CONFIRM PASSWORD
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            placeholder="Enter your password again"
            style={{
              backgroundColor: "black",
              color: "white",
              width: "300px",
              height: "30px",
            }}
          />
        </label>
        {errors.confirmPassword && (
          <p className="error">{errors.confirmPassword}</p>
        )}
        <button
          type="submit"
          style={{
            color: "black",
            cursor: "pointer",
            backgroundColor: "#ff6a00",
            padding: "10px",
            borderRadius: "10px",
          }}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignupFormModal;
