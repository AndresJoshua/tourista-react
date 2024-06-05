import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SecondNav from './SecondNav/SecondNav';

import './Header.css'

export default function Header() {
  const [isShowSecondNav, setIsShowSecondNav ] = useState(false);
  const [activeNav, setActiveNav ] = useState(-1);

  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  const homeHandler = () => {
    navigate("/")
  };

  const loginHandler = () => {
    navigate("/login")
  };

  const logoutHandler = () => {
    localStorage.setItem("isLoggedIn", "false")
    navigate("/login")
  };

  const handleMouseEnter = (activeNavIndex) => {
    setIsShowSecondNav(true);
    setActiveNav(activeNavIndex);
  };

  const handleMouseLeave = () => {
    setIsShowSecondNav(false);
    setActiveNav(-1);
  };

  return (
    <nav className="header" onMouseLeave={handleMouseLeave}>
      <div className="logo" onClick={homeHandler} onMouseEnter={() => handleMouseEnter(-1)}>Tourista</div>
      <div className="nav_items">
        <div className="nav_item" onMouseEnter={() => handleMouseEnter(0)}><a onClick={homeHandler}>Home</a></div>
        <div className="nav_item" onMouseEnter={() => handleMouseEnter(1)}><a href="https://www.google.com" target="_blank">Features</a></div>
        <div className="nav_item" onMouseEnter={() => handleMouseEnter(2)}><a href="https://www.youtube.com" target="_blank">Promos</a></div>
        <div className="nav_item" onMouseEnter={() => handleMouseEnter(3)}><a>Menu</a></div>
      </div>
      {isShowSecondNav && activeNav !== -1 && <SecondNav activeNav={activeNav} />}
      {isLoggedIn === "true" ?
        <div className="logout_button"><a onClick={logoutHandler} onMouseEnter={() => handleMouseEnter(-1)}>Logout</a></div>
      :
        <div className="login_button"><a onClick={loginHandler} onMouseEnter={() => handleMouseEnter(-1)}>Login</a></div>
      }
    </nav>
  );
}