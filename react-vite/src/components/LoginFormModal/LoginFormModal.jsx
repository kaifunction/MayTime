import { useState } from "react";
import { thunkLogin } from "../../redux/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
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

  }

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
      <h1 style={{fontSize:'25px', color:'#ff6a00', backgroundColor:'black',padding:'20px 20px 20px 0', margin:'0px'}}><span style={{fontWeight:'bold', backgroundColor:'transparent'}}>LOG</span> <span style={{fontWeight:'lighter', backgroundColor:'transparent'}}>IN</span></h1>
      <form onSubmit={handleSubmit}>
        <label style={{color:'#ff6a00', marginTop:'40px'}}>
          EMAIL
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
            style={{backgroundColor: 'black', color: 'white', width:'300px', height:'30px'}}
          />
        </label>
        {errors.email && <p className="error">{errors.email}</p>}
        <label style={{color:'#ff6a00'}}>
          PASSWORD
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
            style={{backgroundColor: 'black', color: 'white', width:'300px', height:'30px'}}
          />
        </label>
        {errors.password && <p className="error">{errors.password}</p>}
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default LoginFormModal;
