import React,{useState} from 'react';
import { ReactComponent as Logo } from '../../assets/Images/logo.svg';

import './footer.css';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
  
    const validateEmail = (email) => {
      const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return pattern.test(email);
    };
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      if (validateEmail(email)) {
        setError('');
        console.log("Email is valid: ", email);
      } else {
        setError('Please enter a valid email address.');
      }
    };
  
  return (
    <footer className="footer bg-color text-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="footer-logo">
            <Logo className="mb-3" width="150" height="40" />
            <div className='footer-list'>
                <a href="#link1" className="text-light footer-link">About</a>
                <a href="#link2" className="text-light footer-link">Road Map</a>
                <a href="#link3" className="text-light footer-link">FAQ's</a>
                <a href="#link4" className="text-light footer-link">External Link</a>
                <a href="#link5" className="text-light footer-link">Contact</a>
              </div>
            </div>
          </div>
          <div className="col-md-6 bottom-md">
            <h5>Join our Newsletter</h5>
            <p>"Stay updated with our latest news and offers."</p>
            <form onSubmit={handleFormSubmit} className="newsletter-input">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
              />
              <button type="submit" className="btn btn-warning">Send</button>
            </form>
          </div>
        </div>
        <hr className="footer-divider" />
        <div className="footer-bottom d-flex justify-content-between">
          <div>
            <a href="#terms" className="text-light">Terms</a> | 
            <a href="#legal" className="text-light"> Legal</a>
          </div>
          <div>
            <p className="mb-0">&copy; 2024 Your Company. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
