import React from 'react';
import './Footer2.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faGoogle, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer2 = () => {
  return (
    <footer className="footer2">
      <div className="gutom2">
        <a href="">Tourista</a>
      </div>
      <div className="social-icons">
        <a href="https://www.facebook.com">
          <FontAwesomeIcon icon={faFacebook} size="2x" color="#3b5998" />
        </a>
        <a href="https://www.twitter.com">
          <FontAwesomeIcon icon={faTwitter} size="2x" color="#1da1f2" />
        </a>
        <a href="https://www.google.com">
          <FontAwesomeIcon icon={faGoogle} size="2x" color="#DB4437" />
        </a>
        <a href="https://www.youtube.com">
          <FontAwesomeIcon icon={faYoutube} size="2x" color="#FF0000" />
        </a>
        <a href="https://www.instagram.com">
          <FontAwesomeIcon icon={faInstagram} size="2x" color="#833AB4" />
        </a>
      </div>

    </footer>
  );
}

export default Footer2;