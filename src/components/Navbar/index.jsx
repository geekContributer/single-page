import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/Images/logo.svg';
import login from '../../assets/Images/login.png'; // Import the PNG image

import './navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [selectedLink, setSelectedLink] = useState(location.pathname);

  const handleLinkClick = (path) => {
    setSelectedLink(path);
  };

  return (
    <nav className="navbar navbar-expand-xxl navbar-light bg-light sticky">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <Logo className="mb-3" width="150" height="60" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                to="/home"
                className={`nav-link ${selectedLink === '/home'  ? 'active' : ''}`}
                onClick={() => handleLinkClick('/home')}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                className={`nav-link ${selectedLink === '/about' ? 'active' : ''}`}
                onClick={() => handleLinkClick('/about')}
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className={`nav-link ${selectedLink === '/services' ? 'active' : ''}`}
                onClick={() => handleLinkClick('/services')}
              >
                Traffic Map
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className={`nav-link ${selectedLink === '/contact' ? 'active' : ''}`}
                onClick={() => handleLinkClick('/contact')}
              >
                Trip Planner
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/projects"
                className={`nav-link ${selectedLink === '/projects' ? 'active' : ''}`}
                onClick={() => handleLinkClick('/projects')}
              >
                Construction Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/ev-charging"
                className={`nav-link ${selectedLink === '/ev-charging' ? 'active' : ''}`}
                onClick={() => handleLinkClick('/ev-charging')}
              >
                EV Charging Stations
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/road-map"
                className={`nav-link ${selectedLink === '/road-map' ? 'active' : ''}`}
                onClick={() => handleLinkClick('/road-map')}
              >
                Road Map
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/travel-times"
                className={`nav-link ${selectedLink === '/travel-times' ? 'active' : ''}`}
                onClick={() => handleLinkClick('/travel-times')}
              >
                Travel Times
              </Link>
            </li>
          </ul>
          <Link to="/login" className="btn ms-3 login-button">
          <img src={login} alt="icon" className="login-icon"/> Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
