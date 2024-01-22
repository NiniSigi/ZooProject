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
      <form className="form-inline">
        <button className="btn btn-outline-success" type="submit">Login</button>
      </form>
    </nav>
  );
};

export default NavBar;
