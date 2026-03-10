import React, { useState } from 'react'; // 1. Import useState
import { Link } from 'react-router-dom';

const Navbar = () => {
  // 2. Create a state to track if the menu is open or closed
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">
        <Link className="navbar-brand fw-bold" style={{ color: '#FFD700' }} to="/">TVK HQ</Link>
        
        {/* 3. Add onClick to the button */}
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* 4. Use a template literal to toggle the 'show' class based on state */}
        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={() => setIsNavCollapsed(true)}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/leader" onClick={() => setIsNavCollapsed(true)}>Our Leader</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/history" onClick={() => setIsNavCollapsed(true)}>History</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/gallery" onClick={() => setIsNavCollapsed(true)}>Gallery</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link btn btn-warning text-white ms-lg-2" to="/join" onClick={() => setIsNavCollapsed(true)}>Join Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;