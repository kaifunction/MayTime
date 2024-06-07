import { useState } from "react";
import { thunkLogin } from "../../redux/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import "./LoginForm.css";

function LoginFormModal() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const { closeModal } = useModal();

  const handleSubmit = async (e) => {
    e.preventDefault();

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
    <>
      <h1 style={{color:'#ff6a00', backgroundColor:'black',padding:'20px', margin:'0px'}}>Log In</h1>
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
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{backgroundColor: 'black', color: 'white'}}
          />
        </label>
        {errors.password && <p style={{color:'#f94880',fontSize:'12px'}}>{errors.password}</p>}
        <button type="submit" style={{color:'black', backgroundColor:'#ff6a00', cursor:'pointer', padding:'10px', borderRadius:'10px'}}>Log In</button>
      </form>
    </>
  );
}

export default LoginFormModal;
