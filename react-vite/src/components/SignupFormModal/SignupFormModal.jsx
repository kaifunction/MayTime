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
  const [errors, setErrors] = useState({});
  const { closeModal } = useModal();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return setErrors({
        confirmPassword:
          "Confirm Password field must be the same as the Password field",
      });
    }

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
      <h1 style={{color:'#ff6a00', backgroundColor:'black',padding:'20px 20px 20px 0',  margin:'0px'}}>SIGN UP</h1>
      {errors.server && <p style={{color:'#f94880'}}>{errors.server}</p>}
      <form onSubmit={handleSubmit}>
        <label style={{color:'#ff6a00', marginTop:'40px'}}>
          EMAIL
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{backgroundColor: 'black', color: 'white', width:'300px', height:'30px'}}
          />
        </label>
        {errors.email && <p className="error">{errors.email}</p>}
        <label style={{color:'#ff6a00'}}>
          USERNAME
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{backgroundColor: 'black', color: 'white', width:'300px', height:'30px'}}
          />
        </label>
        {errors.username && <p className="error">{errors.username}</p>}
        <label style={{color:'#ff6a00'}}>
          PASSWORD
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{backgroundColor: 'black', color: 'white', width:'300px', height:'30px'}}
          />
        </label>
        {errors.password && <p className="error">{errors.password}</p>}
        <label style={{color:'#ff6a00'}}>
          CONFIRM PASSWORD
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            style={{backgroundColor: 'black', color: 'white', width:'300px', height:'30px'}}
          />
        </label>
        {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
        <button type="submit" style={{color:'black', cursor:'pointer',backgroundColor:'#ff6a00',padding:'10px', borderRadius:'10px'}}>Sign Up</button>
      </form>
    </div>
  );
}

export default SignupFormModal;
