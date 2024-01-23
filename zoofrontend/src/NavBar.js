import React from 'react';
import './navbar.css'; 
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
    <Link className="navbar-brand" to="/">
      <img src="/zooLogo.png" alt="Zoo Logo" height="50" /> {/* Logo mit sinnvoller Größe */}
    </Link>
    <div className="collapse navbar-collapse justify-content-center">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/zoo-map">Zoo Karte</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/event-calendar">Eventkalender</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/animal-info">Tierinfos</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/buy-ticket">Tickets kaufen</Link>
        </li>
      </ul>
    </div>
    <ul className="navbar-nav">
        <li className="nav-item login">
          <Link className="nav-link" to="/login"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
</svg></Link>
        </li>
        
      </ul>
     
    </nav>
  );
};

export default NavBar;
