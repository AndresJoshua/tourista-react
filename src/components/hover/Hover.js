
import React from 'react';
import './Hover.css';
import bannerImages from './data/data';

export default function Header() {
  return (
    <div className="width">
      <div className="container">
        <img src={bannerImages[0]} alt="Avatar" className="image" />
        <div className="middle">
          <div className="text">Travel Tips & Info</div>
        </div>
      </div>
      <div className="container2">
        <img src={bannerImages[1]} alt="Avatar" className="image image2" />
        <div className="middle2">
          <div className="text2">What to do?</div>
        </div>
      </div>
      <div className="container3">
        <img src={bannerImages[2]} alt="Avatar" className="image image3" />
        <div className="middle3">
          <div className="text3">Where to go?</div>
        </div>
      </div>
    </div>
  );
}

