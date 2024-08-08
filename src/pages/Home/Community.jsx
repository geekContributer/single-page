import React from 'react';
import {ReactComponent as Logo} from "../../assets/Images/arrow.svg"
import './home.css';

const features = [
    { id: 1, number: '18M', header: 'Users downloads the Mobile applications' },
    { id: 2, number: '26K', header: 'Placebolder Text' },
    { id: 3, number: '15K', header: 'Placebolder Text' },
    { id: 4, number: '800', header: 'Placebolder Text' },

  ];
const Community = () => {
  return (
    <section className="community-section py-5 bg-color">
      <div className="container">
        <div className="row mb-5 align-items-center">
          <div className="col-md-6 mb-4 mb-md-0 text-center">
            <img src="https://img.freepik.com/free-photo/business-coworkers-shaking-hands-during-meeting-office-focus-is-businessman_637285-7009.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1723075200&semt=ais_hybrid" alt="Descriptive Alt Text" className="img-fluid-commudity" />
          </div>
          <div className="col-md-6">
            <h2 className="community-header mb-3">Our Comitment to <br/> Keeping You Informed</h2>
            <p className="community-description text-small mb-4">
            The Central Texas Construction mobile app provides public notifications and other mapping services for construction work zones to optimize mobility and travel demand for the regional network.
            <br/><br/>
            Our mission is grand and our commitment unwavering: to revolutionize your travel experience. With a relentless focus on innovation and excellence, we deliver unparalleled services in traffic management, road works monitoring. and road message dissemination. Join us as we pave the way to safer, smoother, and more informed journeys for all.
            </p>
            <button className="btn sign-up-button text-small"> 
             Sign Now
            <Logo className="" width="40" height="25" />
             </button>
          </div>
        </div>

        <div className="row text-center">
          {features.map(feature => (
            <div key={feature.id} className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
              <div className="number-circle">{feature.number}</div>
              <h3 className="commodity-feature text-small">{feature.header}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Community;
