import React from "react";
import "./home.css";

const Whyus = () => {
  return (
    <section className="full-height-section d-flex flex-column justify-content-center align-items-center text-center">
      <div className="container">
        <h1 className="header-text text-medium mb-4">
          The Central Texas Construction Partnership Program is dedicated to
          coordinated construction over the next 10+ years in Central Texas
          area.
        </h1>

        <img
          src="https://img.freepik.com/premium-photo/diverse-group-people-collaborating-around-laptop-table_956369-4882.jpg"
          alt="Descriptive Alt Text"
          className="img-fluid mb-4"
        />
        <h2 className="why-us-header text-medium mb-4">Why Us?</h2>
        <p className="description-text mb-4">
          The Central Texas Construction mobile app provides public
          notifications and other mapping services for construction work zones
          to optimize mobility and travel demand for the regional network.
        </p>
        <div className="row text-center">
          <div className="col-md-4 feature-item">
            <svg
              width="50"
              height="50"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="feature-icon mb-2"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <h3 className="feature-header">Traffic Snapshots</h3>
            <p className="feature-description">
              We ale offering real-time traffic snapshots for your convenience,
              helping you plan your route with ease.{" "}
            </p>
          </div>
          <div className="col-md-4 feature-item">
            <svg
              width="50"
              height="50"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="feature-icon mb-2"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <h3 className="feature-header">Message Signs</h3>
            <p className="feature-description">
              Recoive importont road messages through our signs, keeping you
              safe and informed on the road.
            </p>
          </div>
          <div className="col-md-4 feature-item">
            <svg
              width="50"
              height="50"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="feature-icon mb-2"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <h3 className="feature-header">Road Work/Closures</h3>
            <p className="feature-description">
              Stay informed Bboutead wors and dosurs with our updates, ensuring
              smoother travels ahead.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whyus;
