// FindDoctor.js
import React from 'react';
import '../style.css'; // Assuming style.css is in the same folder or adjust path
import doctors from '../data/doctorsData';

const FindDoctor = () => {
  

  return (
    <div className="find-doctor-section">
      <div className="section-header">
        <h2>Best Skin Hospital in India | Best Dermatology Hospitals in India | Fortis Healthcare</h2>
        <button className="read-more-btn">Read more</button>
      </div>
      <div className="team-wrapper">
        <div className="label">Our Team Experts</div>
        <div className="doctors-grid">
          {doctors.map((doctor, index) => (
            <div key={index} className="doctor-card">
              <div className="doctor-image-placeholder">
                <img src={doctor.image} alt={doctor.name} className="doctor-img" />
              </div>
              <div className="doctor-info">
                <h3>{doctor.name}</h3>
                <p>{doctor.title}</p>
                <div className="action-buttons">
                  <button className="profile-btn">View Profile</button>
                  <button className="appointment-btn">Book Appointment</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FindDoctor;

