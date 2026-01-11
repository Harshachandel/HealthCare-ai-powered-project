// FeaturesSection.jsx - EXACT STRUCTURE MATCH
import React from 'react';
import '../style.css';

const FeaturesSection = () => {
  return (
    <section className="fsct">
      <div className="fsctCont">
        {/* EXACT LEFT WHITE PANEL - Image + Text Side by Side */}
        <div className="fsctLeft">
          <img 
            src="https://blog.practo.com/wp-content/uploads/2020/06/Practo-Insight_Cover-Page_1576x620.jpg" 
            alt="MRI Scan" 
            className="fsctImgMain"
          />
          <div className="fsctTxt">
            <div className="fsctLogo">Medlogo</div>
            <h2 className="fsctTitle">Know About Our:</h2>
            <h3 className="fsctSubTitle">Clinic Management Software</h3>
            <p className="fsctDesc">
              Process essential info in one accessible place. Our software 
              digitally manages prescriptions, bills, and appointments.
            </p>
            <div className="fsctBtns">
              <button className="fsctBtn1">Try Now</button>
              <button className="fsctBtn2">Book Demo</button>
            </div>
          </div>
        </div>

        {/* EXACT RIGHT 3 SQUARE CARDS - Vertical Stack */}
        <div className="fsctRight">
          <div className="fsctCard">
            <img src="https://ugc.futurelearn.com/uploads/images/2f/73/header_2f73d369-6dae-4b92-8b27-7ddb591856b3.jpg" alt="Syringe" className="fsctCardImg" />
            <div className="fsctCardTxt">
              <h4>We help enhance</h4>
              <p className='pb-5'>hospital operations with</p>
            </div>
          </div>

          <div className="fsctCard">
            <img src="https://86fb6716.delivery.rocketcdn.me/wp-content/uploads/2025/07/Digital-Transformation-Insights-Feature-Image.jpg" alt="Heartbeat" className="fsctCardImg" />
            <div className="fsctCardTxt">
              <h4>AI Heartbeat</h4>
              <p className='pb-5'>Monitor</p>
            </div>
          </div>

          <div className="fsctCard">
            <img src="https://images.stockcake.com/public/0/7/4/0746ef10-9e91-44dc-8ee6-b1b9451b7623_large/virtual-doctor-consultation-stockcake.jpg" alt="Clinic Door" className="fsctCardImg" />
            <div className="fsctCardTxt">
              <h4>Digital</h4>
              <p className='pb-5'>Clinic</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
