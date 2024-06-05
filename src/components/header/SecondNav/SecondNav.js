import './SecondNav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';
import { faTools } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import hotdog from './hotdog.jpg';
import snurkling from './snurkling.jpg';
import promo from './promo.jpg';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import { faBlog } from '@fortawesome/free-solid-svg-icons';


export default function SecondNav({ activeNav }) {
  const nav0 = () => {
    return (
      <div className='secondnav_container'>
        <div><a href=""> <FontAwesomeIcon icon={faCog} /> Settings</a></div>
        <div><a href=""><FontAwesomeIcon icon={faUserPlus} /> Create an Account</a></div>
        <div><a href=""><FontAwesomeIcon icon={faDesktop} size="lg" /> Display</a></div>
        <div><a href=""><FontAwesomeIcon icon={faUser} size="lg" /> My Profile</a></div>
        <div><a href=""><FontAwesomeIcon icon={faBlog} size="lg" /> Blog</a></div>
      </div>
    );
  };

  const nav1 = () => {
    return (
      <div className='secondnav_container'>
        
        <div> 
        <img src={hotdog} alt="Example" style={{ width: '150px', height: '100px', borderRadius: '10px' }} />
        Plan your trip with ease using our integrated booking platform.
          </div>
<div>
<img src={snurkling} alt="Example" style={{ width: '150px', height: '100px', borderRadius: '10px' }} />
Snorkeling is a popular water activity that individuals explore the underwater.
</div>
          </div>
    );
  };

  const nav2 = () => {
    return (
      <div className='secondnav_container'>
         <img src={promo} alt="Example" style={{ width: '150px', height: '100px', borderRadius: '10px',  marginTop: '20px'}} />
        <div>Don't miss out on this opportunity to create lasting memories and discover the wonders of the Philippines at unbeatable prices. Book now and let the adventure begin!"</div>
      </div>
    );
  };

  const nav3 = () => {
    return (
      <div className='secondnav_container'>
        <div><a href=""><FontAwesomeIcon icon={faCar} /> Go</a></div>
        
        <div><a href=""> <FontAwesomeIcon icon={faMapPin} /> Explore</a></div>
        <div><a href=""> <FontAwesomeIcon icon={faTools} /> Services</a></div>
        <div><a href=""> <FontAwesomeIcon icon={faEnvelope} /> Contact</a></div>
        <div><a href=""><FontAwesomeIcon icon={faList} /> List</a></div>
        <div><a href=""><FontAwesomeIcon icon={faEllipsisV} /> More</a></div>
        <div class="hotdog"><a href="">Book Now!</a></div>
      </div>
    );
  };

  const navState = (navIndex) => {
    switch(navIndex) {
      case 0:
        return nav0();
      case 1:
        return nav1();
      case 2:
        return nav2();
      case 3:
        return nav3();
      default:
        return nav0();
    }
  };

  return (
    <div className='secondnav'>
      {navState(activeNav)}
    </div>
  );
};