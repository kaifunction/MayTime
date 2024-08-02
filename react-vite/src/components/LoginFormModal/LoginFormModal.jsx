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
      <h1 style={{color:'#ff6a00', backgroundColor:'black',padding:'20px 20px 20px 0', margin:'0px'}}>Log In</h1>
      <form onSubmit={handleSubmit}>
        <label style={{color:'#ff6a00', marginTop:'60px'}}>
          Email :
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{backgroundColor: 'black', color: 'white', marginLeft:'20px', width:'200px'}}
          />
        </label>
        {errors.email && <p className="error">{errors.email}</p>}
        <label style={{color:'#ff6a00'}}>
          Password :
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{backgroundColor: 'black', color: 'white', marginLeft:'20px', width:'168px'}}
          />
        </label>
        {errors.password && <p className="error">{errors.password}</p>}
        <button type="submit" style={{color:'black', backgroundColor:'#ff6a00', cursor:'pointer', padding:'10px', borderRadius:'10px'}}>Log In</button>
      </form>
    </div>
  );
}

export default LoginFormModal;
