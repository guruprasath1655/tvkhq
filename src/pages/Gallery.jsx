import React, { useState } from 'react';

const Gallery = () => {
  
  const newsUpdates = [
    {
      id: 1,
      date: "March 07, 2026",
      title: "Women's Day Special: 'Super Six' Scheme Unveiled",
      content: "President Vijay announced 6 free LPG cylinders per year and ₹2,500 monthly assistance for women in Mamallapuram.",
      tag: "Manifesto"
    },
    {
      id: 2,
      date: "March 04, 2026",
      title: "Thanjavur Conference: Higher Education Promise",
      content: "TVK pledges to bear full higher education costs for children of small farmers and landless laborers.",
      tag: "Education"
    },
    {
      id: 3,
      date: "Feb 23, 2026",
      title: "Vellore Rally: 'Pure Force vs Evil Force'",
      content: "Vijay rejects 'State vs Delhi' narrative, defining 2026 as a fight against corruption and the ruling DMK.",
      tag: "Campaign"
    }
  ];

 
  const photos = [
    { id: 1, url: "src\\assets\\New folder\\Oru Pera Varalaru _actorvijay _tvkvijayhq 💥👑___TVKVijay _WhistleForTVK _TVK _ThalapathyVijay _தமிழகவெற்றிக்கழகம்(W.jpg", caption: "Vikravandi Conference Crowd" },
    { id: 2, url: "src\\assets\\New folder\\கழகத் தலைவர் மக்கள் சந்திப்பு❤️__🌍📌 _ தஞ்சாவூர் _ 04.03.2026 ____tvkvijay _2.jpg", caption: "Thanjavur Farmers Meet" },
    { id: 3, url: "src\\assets\\New folder\\3.jpg", caption: "Flag Hoisting at Panaiyur HQ" },
    { id: 4, url: "src\\assets\\New folder\\WhatsApp Image 2026-03-09 at 10.50.55 AM.jpeg", caption: "Mamallapuram Women's Meet" },
    { id: 5, url: "src\\assets\\New folder\\IMG_20250715_162007_579.jpg.jpeg", caption: "Policy Declaration Speech" },
    { id: 6, url: "src\\assets\\New folder\\தமிழக வெற்றிக் கழகம் சார்பில் மதுரை வடக்கு சட்டமன்ற தொகு(H.jpg", caption: "Youth Wing Interaction" },
    { id: 7, url: "src\\assets\\New folder\\VIJAY.png", caption: "Symbol launch" },
    { id: 8, url: "src\\assets\\New folder\\தமிழக வெற்றிக் கழகம் சார்பில் மதுரை வடக்கு சட்டமன்ற தொகு(H.jpg", caption: "Youth Wing Interaction" },
    { id: 9, url: "src\\assets\\New folder\\தமிழக வெற்றிக் கழகம் சார்பில் மதுரை வடக்கு சட்டமன்ற தொகு(H.jpg", caption: "Youth Wing Interaction" }
  ];

  return (
        <div style={{background: 'linear-gradient(rgba(123, 123, 123, 0.6), rgba(126, 126, 126, 0.5)), url("/assets/leader-banner.jpg") center/cover  '}}> 

    <div className="container py-5">
      {/* new heading*/}
      <section className="mb-5">
        <h2 className="fw-bold border-bottom border-danger pb-2 mb-4">Latest News & Updates</h2>
        <div className="row">
          {newsUpdates.map(news => (
            <div className="col-md-4 mb-4" key={news.id}>
              <div className="card h-100 border-0 shadow-sm border-top border-4 border-danger">
                <div className="card-body">
                  <span className="badge bg-warning text-dark mb-2">{news.tag}</span>
                  <p className="small text-muted mb-1">{news.date}</p>
                  <h5 className="card-title fw-bold">{news.title}</h5>
                  <p className="card-text text-secondary">{news.content}</p>
                  <a href="#" className="btn btn-sm btn-outline-danger">Read More</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* photos */}
      <section>
        <h2 className="fw-bold border-bottom border-warning pb-2 mb-4">Photo Gallery</h2>
        <div className="row g-3">
          {photos.map(photo => (
            <div className="col-7 col-md-4" key={photo.id}>
              <div className="gallery-item position-relative overflow-hidden rounded shadow-sm">
                <img 
                  src={photo.url} 
                  alt={photo.caption} 
                  className="img-fluid w-100 h-100 object-fit-cover"
                  style={{ minHeight: '300px', transition: '0.4s' }}
                />
                <div className="gallery-overlay d-flex align-items-end p-3 ">
                  <p className="text-dark m-1 small fw-bold">{photo.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
    </div>
  );
};

export default Gallery;