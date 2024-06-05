import React from 'react';
import './Footer.css';
import footer from './footer.jpg'; // Import your image file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="gutom">
        <a href=""><img src={footer} alt="Image" /></a>
      </div>

      <div className="Social-Media-Container">
      <div className="quick"><a href="">Quick Links</a></div>
      <div className="facebook"><a href=""><FontAwesomeIcon icon={faArrowRight} /> Settings</a></div>
      <div className="twitter"><a href=""><FontAwesomeIcon icon={faArrowRight} /> Display</a></div>
      <div className="profile"><a href=""><FontAwesomeIcon icon={faArrowRight} /> Profile</a></div>
      <div className="blog"><a href=""><FontAwesomeIcon icon={faArrowRight} /> Blog</a></div>
      </div>

      <div className="Navigation-Container">
      <div className="home"><a href="">Menu</a></div>   
      <div className="explore2"><a href=""><FontAwesomeIcon icon={faArrowRight} /> Explore</a></div>
      <div className="service2"><a href=""><FontAwesomeIcon icon={faArrowRight} /> Services</a></div>
      <div className="contact2"><a href=""><FontAwesomeIcon icon={faArrowRight} /> Contact</a></div>
      <div className="list2"><a href=""><FontAwesomeIcon icon={faArrowRight} /> List</a></div>
      </div>

      <div className="contact-container">
        <div className="contact"><a href="">Contact Us!</a></div>
        <div className="mobile"><a href=""><FontAwesomeIcon icon={faArrowRight} /> MobilePhone</a></div>
      <div className="telegram"><a href=""><FontAwesomeIcon icon={faArrowRight} /> Telegram</a></div>
      <div className="email"><a href=""><FontAwesomeIcon icon={faArrowRight} /> Email</a></div>
      <div className="telephone"><a href=""><FontAwesomeIcon icon={faArrowRight} /> TelePhone</a></div>
      </div>
    </footer>
  );
}

export default Footer;
