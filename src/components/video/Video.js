import React from 'react';
import './Video.css';

export default function Header() {
  return (
    <div>
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/-nHDBiLFnzE?autoplay=1&mute=1&loop=1"
          title="Your Video Title"
          frameBorder="0"
          allowFullScreen
        ></iframe>

        {/* Text overlay */}
        <div className="text-overlay">
          <h2>MABUHAY!</h2>
         <p> Embark on an adventure with our breathtaking landscapes, vibrant <br/>
             cultures, and unforgettable experiences. Start planning your next <br/>
             adventure today!<br/></p>
        </div>
      </div>
      <div>
       
    </div>
    </div>
  );
};
