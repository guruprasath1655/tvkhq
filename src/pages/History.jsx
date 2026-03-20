import React from 'react';
import img2009 from '../assets/New folder/6.jpg';
import img2011 from '../assets/New folder/1.jpg';
import img2021 from '../assets/New folder/2.jpg';
import img2024Feb from '../assets/New folder/3.jpg';
import img2024Oct from '../assets/New folder/4.jpg';
import img2025 from '../assets/New folder/5.jpg';
import img2026 from '../assets/New folder/WhatsApp Image 2026-03-09 at 10.50.55 AM.jpeg';

const History = () => {
  const timelineData = [
    {
      year: "2009",
      date: "July 26",
      title: "The Foundation",
      desc: "Vijay Makkal Iyakkam (VMI) was officially launched in Pudukkottai. What started as a welfare club for fans quickly evolved into a massive social network.",
      img: img2009
    },
    {
      year: "2011",
      date: "Election Support",
      title: "First Political Impact",
      desc: "VMI officially supported the AIADMK-led alliance in the TN Assembly elections, demonstrating the influence of the 'Thalapathy' fan base on the ground.",
      img: img2011
    },
    {
      year: "2021",
      date: "October",
      title: "The Electoral Litmus Test",
      desc: "Testing the waters in the Rural Local Body elections, VMI contested independently and won a staggering 115+ seats across various districts.",
      img: img2021
    },
    {
      year: "2024",
      date: "February 02",
      title: "Birth of TVK",
      desc: "Vijay officially launched 'Tamilaga Vettri Kazhagam' (TVK). He announced his retirement from cinema after 'Thalapathy 69' to focus purely on the 2026 elections.",
      img: img2024Feb
    },
    {
      year: "2024",
      date: "October 27",
      title: "Vikravandi Conference",
      desc: "The historic first state-level conference (Maanaadu) was held in Vikravandi. Over 8 lakh people attended as Vijay unveiled the party's core ideologies.",
      img: img2024Oct
    },
    {
      year: "2025",
      date: "August 21",
      title: "Madurai Conference",
      desc: "The second state-level conference in Madurai where the party structure was expanded and the vision for the 2026 'New Chapter' was solidified.",
      img: img2025
    },
    {
      year: "2026",
      date: "March 07",
      title: "The 2026 Roadmap",
      desc: "At a major event in Mahabalipuram, TVK released its first set of promises, focusing on secular social justice and state rights ahead of the main polls.",
      img: img2026
    }
  ];

  return (
    <div style={{background: 'linear-gradient(rgba(123, 123, 123, 0.6), rgba(126, 126, 126, 0.5)), url("/assets/leader-banner.jpg") center/cover  '}}> 
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold display-4" style={{ color: '#800000' }}>Our Legacy</h1>
        <p className="lead text-muted">A journey from social welfare to political revolution.</p>
        <hr className="w-25 mx-auto border-warning border-3" />
      </div>

      <div className="position-relative">
        {/* Central Vertical Line (Visible on Desktop) */}
        <div className="d-none d-lg-block position-absolute start-50 translate-middle-x h-100 border-start border-2 border-danger"></div>

        {timelineData.map((item, index) => (
          <div key={index} className={`row align-items-center mb-5 ${index % 2 === 0 ? '' : 'flex-lg-row-reverse'}`}>
            {/* Image Column */}
            <div className="col-lg-5 text-center px-4">
              <div className="overflow-hidden  shadow-lg mb-3">
                <img src={item.img} alt={item.title} className="img-fluid hover-zoom" style={{ transition: '0.3s' }} />
              </div>
            </div>

            {/* Empty center gap for the line dot */}
            <div className="col-lg-2 d-none d-lg-flex justify-content-center position-relative">
               <div className="rounded-circle bg-warning border border-danger border-4" style={{ width: '25px', height: '25px', zIndex: 2 }}></div>
            </div>

            {/* Content Column */}
            <div className="col-lg-5 px-4 text-center text-lg-start">
              <span className="badge bg-danger mb-2">{item.year} - {item.date}</span>
              <h3 className="fw-bold">{item.title}</h3>
              <p className="text-muted">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default History;