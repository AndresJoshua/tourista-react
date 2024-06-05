import { useState } from 'react';
import './Banner.css'; // Assuming you've renamed the CSS file accordingly
import bannerImages from './data/data';

export default function Banner() {
  const [activeSlide, setActiveSlide] = useState(0);

  function sliderHandler(addMinus) {
    if (addMinus === 1) {
      if (activeSlide === bannerImages.length - 1) {
        setActiveSlide(0);
      } else {
        setActiveSlide(state => state + 1);
      }
    } else {
      if (activeSlide === 0) {
        setActiveSlide(bannerImages.length - 1);
      } else {
        setActiveSlide(state => state - 1);
      }
    }
  };

  return (
    <section className='banner'>
      <button className="slide-arrow" id="arrow-prev" onClick={() => sliderHandler(-1)} type='button'>&#8249;</button>
      <button className="slide-arrow" id="arrow-next" onClick={() => sliderHandler(1)} type='button'>&#8250;</button>
      <ul className="slides-container">
        {bannerImages.map(function(img, index) {
          return (
            <li key={img + index}>
              <img
                alt={'img' + index}
                className='slide'
                src={img}
                style={{ display: index === activeSlide ? 'block' : 'none' }}
              />
            </li>
          );
        })}
      </ul>
      <ul className="pagination-container">
        {bannerImages.map(function(dot, index) {
          return (
            <li
              className='dot'
              key={dot + index}
              onClick={() => setActiveSlide(index)}
              style={{ backgroundColor: index === activeSlide ? 'black' : 'gray' }}
            ></li>
          );
        })}
      </ul>
    </section>
  );
}
