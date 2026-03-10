import React from 'react';
import { Link } from 'react-router-dom';

const Leader = () => {
  const ideologies = [
    { name: "Periyar E.V.R", role: "Social Reform & Rationalism", desc: "Focus on women's education, social reform, and equality." },
    { name: "K. Kamarajar", role: "Education & Governance", desc: "The benchmark for honest administration and universal education." },
    { name: "B.R. Ambedkar", role: "Social Justice", desc: "Upholding the rights of the marginalized and constitutional values." },
    { name: "Velu Nachiyar", role: "Bravery & Resistance", desc: "Symbol of Tamil courage and the fight for freedom." }
  ];

  return (
    <div className="leader-container bg-light min-vh-100">
      {/* Hero Section */}
      <div className="bg-dark text-white py-5 mb-5" style={{ 
        background: 'linear-gradient(rgba(128, 0, 0, 0.8), rgba(0, 0, 0, 0.9)), url("/assets/leader-banner.jpg") center/cover',
        minHeight: '400px',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4 text-center">
              <img src="src\assets\New folder\image.png" className="rounded-circle border border-4 border-warning shadow-lg" style={{ width: '280px', height: '280px', objectFit: 'cover' }} alt="Leader Vijay" />
            </div>
            <div className="col-md-8">
              <h1 className="display-3 fw-bold">Vijay</h1>
              <h3 className="text-warning">President, Tamilaga Vettri Kazhagam</h3>
              <p className="lead mt-3 italic">"Pirappokkum Ella Uyirkkum — All are equal by birth."</p>
              <div className="mt-4">
                <button className="btn btn-warning btn-lg fw-bold me-3"><a href="https://tvkmanifesto2026.com/home-en/#formsectn" target="_blank" className="text-white text-decoration-none">View Manifesto</a></button>
                <button className="btn btn-outline-light btn-lg">Watch Conference</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Vision Content */}
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-8">
            <h2 className="fw-bold mb-4" style={{ color: '#800000' }}>The Political Vision: Secular Social Justice</h2>
            <p className="text-muted fs-5">
              The TVK, under the leadership of Vijay, stands as a third-party alternative to the existing political landscape in Tamil Nadu. Our ideology is rooted in <strong>Secular Social Justice</strong>, a blend of Dravidian principles and Tamil nationalism.
            </p>
            <p className="text-muted fs-5">
              During the historic 2024 Vikravandi conference, our leader made it clear: 100% no compromise on communal harmony. Our goal for 2026 is to establish a corruption-free, transparent, and caste-free administration.
            </p>
            
            <div className="p-4 bg-white border-5 border-danger shadow-sm my-4">
              <h5 className="fw-bold text-danger italic">"Politics is not a pastime for me. It is a deep quest. I have decided to dedicate myself entirely to the service of the people."</h5>
            </div>
          </div>
          
          <div className="col-lg-4">
            <div className="card shadow-sm border-0 bg-white">
              <div className="card-body">
                <h4 className="fw-bold mb-3" style={{ color: '#800000' }}>Key Goals for 2026</h4>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">✔️ Abolition of NEET</li>
                  <li className="list-group-item">✔️ State Autonomy Rights</li>
                  <li className="list-group-item">✔️ Women Safety & Education</li>
                  <li className="list-group-item">✔️ Addiction-Free Tamil Nadu</li>
                  <li className="list-group-item">✔️ Proportional Representation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Ideological Icons */}
        <h2 className="text-center fw-bold mb-5" style={{ color: '#800000' }}>Our Ideological Guiding Lights</h2>
        <div className="row g-4 mb-5">
          {ideologies.map((item, index) => (
            <div className="col-md-3" key={index}>
              <div className="card h-100 text-center border-0 shadow-sm hover-up p-3">
                <div className="card-body">
                  <h5 className="fw-bold">{item.name}</h5>
                  <p className="small text-danger fw-bold">{item.role}</p>
                  <p className="small text-muted">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leader;