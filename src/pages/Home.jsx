import React from 'react';

const Home = () => (
  <div className="home-container">
    {/* Hero Banner */}
    <div className=" text-white text-center py-5" style={{background: 'linear-gradient(rgba(128, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url("/assets/leader-banner.jpg") center/cover  '}}>
      <div className="container py-5">
        <h1 className="display-3 fw-bold" >TAMILAGA VETTRI KAZHAGAM</h1>
        <p className="lead">Preparation for 2026. The People's Movement.</p>
        
        {/* Flag Display */}
        <div className="my-4">
           <img src="\20260309_184811.jpg" alt="TVK banner" style={{width: '100%'}} />
        </div>

        
      </div>
    </div>
  </div>
);

export default Home;
