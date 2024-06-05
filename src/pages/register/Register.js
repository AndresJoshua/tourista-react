import { useNavigate } from 'react-router-dom';

import './Register.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons'; 
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons'; 
export default function Login() {
  const navigate = useNavigate();

  const registerHandler = (e) => {
    e.preventDefault()

    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const confirmation = document.getElementById("confirmation");

    if (password.value === confirmation.value) {
      localStorage.setItem("username", username.value);
      localStorage.setItem("password", password.value);

      navigate("/login");
    } else {
      alert("Passwords do not match");
    }
  }

  const loginHandler = () => {
    navigate("/login");
  };

  return (
    <form className="register" onSubmit={e => registerHandler(e)}>
      <h2>Register!</h2>
      
      <div style={{ position: 'relative', width: 'fit-content' }}>
      <input id="username" required type="text" placeholder="Username" style={{ paddingLeft: '50px', paddingRight: '100px'}} />
      <FontAwesomeIcon icon={faUser} style={{ position: 'absolute', left: '30px', top: '50%', transform: 'translateY(-50%)', zIndex: '1' }} />
    </div>
    <div style={{ position: 'relative', width: 'fit-content' }}>
      <input id="password" required type="password" placeholder="Password" style={{ paddingLeft: '50px', paddingRight: '100px'}} />
      <FontAwesomeIcon icon={faLock} style={{ position: 'absolute', left: '30px', top: '50%', transform: 'translateY(-50%)', zIndex: '1' }} />
    </div>
    <div style={{ position: 'relative', width: 'fit-content' }}>
      <input id="confirmation" required type="password" placeholder="Confirm Password" style={{ paddingLeft: '50px', paddingRight: '100px'}} />
      <FontAwesomeIcon icon={faEyeSlash} style={{ position: 'absolute', left: '25px', top: '50%', transform: 'translateY(-50%)', zIndex: '1' }} />
    </div>
      
      <input type="submit" value="Register" />
      <div className="links">
        <a onClick={loginHandler}>Login</a>
      </div>
    </form>
  );
}