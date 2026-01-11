import React, { useState } from "react";
import "../style.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-wrapper mx-auto">

        {/* Logo */}
        {/* <div className="navbar-logo me-5">
          <div className="logo-badge"><img src="https://png.pngtree.com/png-vector/20230518/ourmid/pngtree-medical-logo-vector-png-image_7101341.png" width={60} alt="" /></div>
          <span className="logo-text">HealthCare</span>
        </div> */}

        <div className="navbar-logo me-5">
          <div className="logo-badge"><img src="https://png.pngtree.com/png-vector/20240508/ourmid/pngtree-green-color-health-logo-png-image_12379778.png" width={75} alt="" /></div>
          <span className="logo-text">HealthCare</span>
        </div>

        {/* Desktop Links */}
        <ul className="navbar-links">
          <li>Home</li>
          <li>Services</li>
          <li>Doctors</li>
          <li>Appointments</li>
          <li>Contact</li>
        </ul>

        {/* CTA */}
        {/* <div className="navbar-action">
          <button className="nav-btn">Book Appointment</button>
        </div> */}

        {/* Hamburger */}
        <div
          className={`menu-icon ${open ? "active" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${open ? "show ps-5 text-center ms-5" : ""}`}>
        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>Doctors</li>
          <li>Appointments</li>
          <li>Contact</li>
          <button className="mobile-btn">Book Appointment</button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
