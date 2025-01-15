import React from 'react'
import './footer.css'
import { assets } from '../../assets/assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram , faFacebook, faGoogle, faTwitter} from '@fortawesome/free-brands-svg-icons'


const footer = () => {
  return (
    <div className="footer-container">
        <div className="footer-left-container">
            <figure>
              <img src={assets.logo} alt='' />
              <figcaption>TravelSphere</figcaption>
            </figure>
            <div className="socials">
                <FontAwesomeIcon icon={faFacebook}/>
                <FontAwesomeIcon icon={faInstagram}/>
                <FontAwesomeIcon icon={faGoogle}/>
                <FontAwesomeIcon icon={faTwitter}/>
            </div>
        </div>  
        <div className="footer-center-container">
        <table class="footer-table border-1">
        <tr>
            <td>TnC</td>
            <td>Contact</td>
        </tr>
        <tr>
            <td>FAQ's</td>
            <td>Privacy Policy</td>
        </tr>
        <tr>
            <td>About Us</td>
            <td></td>
        </tr>
    </table>
        </div>
        <div className="footer-right-container">
            <input placeholder='enter your email to subscribe'></input>
            <button>→</button>
            <div className="right">
                <p>&copy; 2024 All rights Reserved by AKSHAY SURYAVANSHI</p>
            </div>
            
        </div>
    </div>
  )
}

export default footer