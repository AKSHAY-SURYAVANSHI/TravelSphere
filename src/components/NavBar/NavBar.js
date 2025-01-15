import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/authContext';
import './NavBar.css';
import { assets } from '../../assets/assets';

const   NavBar = () => {
    const { isLogged, user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout(); // Call logout from context
    };

    return (
        <div className="navbar">
            <div className="navbar-container">
                <div className="left-container">
                    <figure>
                        <img src={assets.logo} alt='' />
                        <figcaption>travelsphere</figcaption>
                    </figure>
                    <Link to='/'><button>Home</button></Link>
                </div>
                <div className="right-container">
                    <Link to='/bookings'><button>My Bookings</button></Link>
                    {isLogged ? (
                        <>
                            <span>Welcome, {user.userName || 'User'}</span>
                            <button onClick={handleLogout}>Logout</button>
                        </>
                    ) : (
                        <Link to='/signin'><img src={assets.user} alt='' /></Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NavBar;
