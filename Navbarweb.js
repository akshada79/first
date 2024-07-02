import React from 'react';
import { Link } from 'react-router-dom';
// import './Navbar.css'; 

const Navbarweb = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <a href="#home">Visual Vibes</a>
                </div>
                <div className="navbar-links">
                    <Link to='/Home'>Home</Link>
                    <a href="#about" className="nav-link">About Us</a>
                    <a href="#gallery" className="nav-link">Gallery</a>
                    <Link to='/BookNow'>Book Now</Link>

                </div>
            </div>
        </nav>
    );
}

export default Navbarweb;
