import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-4 mt-auto">
      <div className="container text-center text-md-left">
        <div className="row text-center text-md-left">
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold" style={{ color: '#FFD700' }}>TVK HQ</h5>
            <p>
              Dedicated to serving the people and pushing towards a brighter future. Join us in our journey.
            </p>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold" style={{ color: '#FFD700' }}>Links</h5>
            <p><Link to="/" className="text-white text-decoration-none">Home</Link></p>
            <p><Link to="/leader" className="text-white text-decoration-none">Our Leader</Link></p>
            <p><Link to="/history" className="text-white text-decoration-none">History</Link></p>
            <p><Link to="/gallery" className="text-white text-decoration-none">Gallery</Link></p>
          </div>

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold" style={{ color: '#FFD700' }}>Contact</h5>
            <p><i className="fas fa-home mr-3"></i> Chennai, Tamil Nadu, India</p>
            <p><i className="fas fa-envelope mr-3"></i> info@tvk.org</p>
            <p><i className="fas fa-phone mr-3"></i> +91 98765 43210</p>
          </div>
        </div>

        <hr className="mb-4" />

        <div className="row align-items-center">
          <div className="col-md">
            <p className="text-center text-md-right ">
              © 2026 TVKHQ . All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
