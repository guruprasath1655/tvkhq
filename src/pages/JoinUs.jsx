import React from 'react';

const JoinUs = () => (
      <div style={{background: 'linear-gradient(rgba(128, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("/assets/leader-banner.jpg") center/cover  '}}> 

  <div className="container py-5">
    <div className="row justify-content-center">
      <div className="col-md-6 p-4 shadow rounded bg-white">
        <h2 className="text-center mb-4">Join the Movement</h2>
        <form>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input type="text" className="form-control" placeholder="Enter your name" />
          </div>
          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <input type="tel" className="form-control" placeholder="Enter mobile number" />
          </div>
          <div className="mb-3">
            <label className="form-label">Membership Type</label>
            <select className="form-select">
              <option value="member">General Member</option>
              <option value="volunteer">Volunteer (Field Work)</option>
            </select>
          </div>
          <button type="submit" className="btn btn-danger w-100 py-2 fw-bold">Submit Application</button>
        </form>
      </div>
    </div>
  </div>
  </div>
);

export default JoinUs;