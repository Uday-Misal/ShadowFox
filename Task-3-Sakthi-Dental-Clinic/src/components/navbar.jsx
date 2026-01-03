import { Link } from "react-router-dom";
import { useState } from "react";
import "../style/navbar.css";
import logo from "../assets/Logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container nav-wrapper">

        <Link to="/" className="nav-brand">
          <img src={logo} alt="Sakthi Dental Clinic" />
          <span>Sakthi Dental Clinic</span>
        </Link>

        {/* Desktop links */}
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/treatments">Treatments</Link></li>
          <li><Link to="/faq">FAQs</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        <button className="btn btn-primary nav-cta">
          Fix an Appointment
        </button>

    
        <div className="hamburger" onClick={() => setOpen(!open)}>
          ☰
        </div>
      </div>

  
      {open && (
        <div className="mobile-menu">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setOpen(false)}>About</Link>
          <Link to="/treatments" onClick={() => setOpen(false)}>Treatments</Link>
          <Link to="/faq" onClick={() => setOpen(false)}>FAQs</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
