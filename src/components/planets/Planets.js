import { useState } from 'react';
import './Planets.css';
import planets from './data/data';

export default function Planets() {
  const [activePlanet, setActivePlanet] = useState(0);

  const tabButtonHandler = (planetNum) => {
    setActivePlanet(planetNum);
  };

  const tabButtons = () => {
    return (
      <div className='tabButtons'>
        <button onClick={() => tabButtonHandler(0)} type='button'>Fort Santiago</button>
        <button onClick={() => tabButtonHandler(1)} type='button'>Ocean Park</button>
        <button onClick={() => tabButtonHandler(2)} type='button'>Rizal Park</button>
      </div>
    );
  };

  const leftImages = () => {
    return (
      <div>
        {activePlanet === 0 && <img alt='mercury' className='planet' src={planets.fort} />}
        {activePlanet === 1 && <img alt='venus' className='planet' src={planets.ocean} />}
        {activePlanet === 2 && <img alt='earth' className='planet' src={planets.rizal2} />}
      </div>
    );
  };

  const rightDescriptions = () => {
    return (
      <div className='descriptions'>
        {activePlanet === 0 && (
          <>
            <div className='description_title'>Fort Santiago</div>
            <div className='description_list'>
              <ul>
                <li>A historical citadel located in Manila, Philippines.</li>
                <li>Renowned for its significance during the Spanish colonial period and World War II. </li>
                <li>Served as a defensive fortress guarding the entrance to the Pasig River.</li>
              </ul>
            </div>
          </>
        )}

        {activePlanet === 1 && (
          <>
            <div className='description_title'>Ocean Park</div>
            <div className='description_list'>
              <ul>
                <li>A renowned marine theme park located in Manila.</li>
                <li>Offering visitors a captivating experience </li>
                <li>With its diverse marine life exhibits and thrilling attractions. Nestled within the bustling city,</li>
              </ul>
            </div>
          </>
        )}

        {activePlanet === 2 && (
          <>
            <div className='description_title'>Rizal Park</div>
            <div className='description_list'>
              <ul>
                <li>Luneta Park, is a historic urban park located in Manila, Philippines.</li>
                <li>It is one of the most iconic and significant landmarks, named after Dr. Jose Rizal.</li>
                <li>The Philippine Revolution against Spanish colonial rule.</li>
              </ul>
            </div>
          </>
        )}
      </div>
    );
  };

  return (
    <div className='planets_section'>
      <div className='main'>
        {leftImages()}
        {rightDescriptions()}
      </div>
      {tabButtons()} {/* Render tabButtons below rightDescriptions */}
    </div>
  );
}
