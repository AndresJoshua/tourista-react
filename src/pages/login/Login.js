import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons'; 
import './Login.css';

export default function Login() {
  const navigate = useNavigate();

  const loginHandler = (e) => {
    e.preventDefault();

    const registeredUsername = localStorage.getItem("username");
    const registeredPassword = localStorage.getItem("password");

    const username = document.getElementById("username");
    const password = document.getElementById("password");

    if (username.value === registeredUsername && password.value === registeredPassword) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/");
    } else {
      alert('Username or Password is Incorrect');
    }
  }

  const registerHandler = () => {
    navigate("/register")
  };

  return (
    <form className="login" onSubmit={e => loginHandler(e)}>
      <h2>Login!</h2>
      
      <div style={{ position: 'relative', width: 'fit-content' }}>
      <input id="username" required type="text" placeholder="Username" style={{ paddingLeft: '50px', paddingRight: '100px'}} />
      <FontAwesomeIcon icon={faUser} style={{ position: 'absolute', left: '30px', top: '50%', transform: 'translateY(-50%)', zIndex: '1' }} />
    </div>
    <div style={{ position: 'relative', width: 'fit-content' }}>
      <input id="password" required type="password" placeholder="Password" style={{ paddingLeft: '50px', paddingRight: '100px'}} />
      <FontAwesomeIcon icon={faLock} style={{ position: 'absolute', left: '30px', top: '50%', transform: 'translateY(-50%)', zIndex: '1' }} />
    </div>
      <div clas="forgot">
      <a onClick={registerHandler}>Forgot Password?</a>
      </div>
      <input type="submit" value="Log In" />
      <div class="links">
  <a onClick={registerHandler}>Don't have an account yet? click <span>Register</span></a>
</div>

    </form>
  );
}