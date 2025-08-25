
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // valgfritt for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        https://oslostudenthub.no
      </div>
      <ul className="navbar-links">
        <li><Link to="/eventer">Eventer</Link></li>
        <li><Link to="/oppgaver">Mine oppgaver</Link></li>
        <li><Link to="/dokumenter">Dokumenter</Link></li>
        
      </ul>
    </nav>
  );
};

export default Navbar;
