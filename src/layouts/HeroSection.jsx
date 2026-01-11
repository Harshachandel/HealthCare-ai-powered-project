// HeroSection.jsx - ULTRA ATTRACTIVE VERSION
import React from 'react';
import '../style.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="content-left">
          <div className="badge">
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            AI Voice Assistant
          </div>

          <h1 className="title">
            Speak Your <span className="title-highlight">Symptoms</span>
          </h1>
          
          <p className="description">
            AI analyzes voice patterns & symptoms instantly. 
            Get accurate medical insights with complete privacy.
          </p>

          <div className="stats-row">
            <div className="stat">
              <div className="stat-number">99.8%</div>
              <div className="stat-label">Accuracy</div>
            </div>
            <div className="stat">
              <div className="stat-number">HIPAA</div>
              <div className="stat-label">Secure</div>
            </div>
            <div className="stat">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Live</div>
            </div>
          </div>

          <div className="cta-group">
            <button className="btn-main">
              <svg viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.884 9.709a.5.5 0 00.708 0l2.294-2.294a1 1 0 10-1.414-1.414L9 7.542l-1.172-1.541a1 1 0 10-1.414 1.414l2.294 2.294zM19 10a9 9 0 11-17.998 0A9.002 9.002 0 0119 10z" clipRule="evenodd"/>
              </svg>
              Start Now
            </button>
            <button className="btn-outline">Watch Demo</button>
          </div>
        </div>

        <div className="demo-panel">
          <div className="panel-header">
            <div className="live-dot"></div>
            <span className="header-text">LIVE</span>
          </div>
          
          <div className="audio-display">
            <div className="audio-peak"></div>
            <div className="audio-peak"></div>
            <div className="audio-peak"></div>
            <div className="audio-peak"></div>
            <div className="audio-peak"></div>
          </div>
          
          <div className="status-text">Voice Processing</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
