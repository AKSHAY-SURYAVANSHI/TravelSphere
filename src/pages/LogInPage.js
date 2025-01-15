import React from 'react'
import NavBar from '../components/NavBar/NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './LogInpage.css';
import LogIn from '../components/LogIn/LogIn';

const LoginPage = () => {
  return (
    <div className='background'>
      <NavBar />
      <div className="LoginForm">
        <LogIn/>
      </div>
      <div className="welcomeback">
        <h1>Welcome <br /> Back</h1>
        <p>
          Your next adventure is just around the corner! Sign in to unlock a world of exciting new destinations, exclusive travel deals, and personalized recommendations designed to make your journey unforgettable. Let’s get you back on track to exploring the world!
        </p>
        <div className="socials">
          <FontAwesomeIcon className="fa-icon" icon={faFacebook} />
          <FontAwesomeIcon className="fa-icon" icon={faTwitter} />
          <FontAwesomeIcon className="fa-icon" icon={faInstagram} />
          <FontAwesomeIcon className="fa-icon" icon={faYoutube} />
        </div>
      </div>
    </div>
  )
}

export default LoginPage