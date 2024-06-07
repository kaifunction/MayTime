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
    <>
      <h1 style={{color:'#ff6a00', backgroundColor:'black',padding:'20px', margin:'0px'}}>Sign Up</h1>
      {errors.server && <p style={{color:'#f94880'}}>{errors.server}</p>}
      <form onSubmit={handleSubmit}>
        <label style={{color:'#ff6a00'}}>
          Email
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{backgroundColor: 'black', color: 'white'}}
          />
        </label>
        {errors.email && <p style={{color:'#f94880',fontSize:'12px'}}>{errors.email}</p>}
        <label style={{color:'#ff6a00'}}>
          Username
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{backgroundColor: 'black', color: 'white'}}
          />
        </label>
        {errors.username && <p style={{color:'#f94880',fontSize:'12px'}}>{errors.username}</p>}
        <label style={{color:'#ff6a00'}}>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{backgroundColor: 'black', color: 'white'}}
          />
        </label>
        {errors.password && <p style={{color:'#f94880'}}>{errors.password}</p>}
        <label style={{color:'#ff6a00'}}>
          Confirm Password
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            style={{backgroundColor: 'black', color: 'white'}}
          />
        </label>
        {errors.confirmPassword && <p style={{color:'#f94880'}}>{errors.confirmPassword}</p>}
        <button type="submit" style={{color:'black', cursor:'pointer',backgroundColor:'#ff6a00',padding:'10px', borderRadius:'10px'}}>Sign Up</button>
      </form>
    </>
  );
}

export default SignupFormModal;
