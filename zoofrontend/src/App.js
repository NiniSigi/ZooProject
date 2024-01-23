import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';
import OpeningHours from './OpeningHours';
import ZooMap from './components/ZooMap';
import BuyTicket from './components/buyTicket';
import EventCalendar from './components/EventCalendar';
import AnimalInfo from './components/AnimalInfo';
import Login from './components/Login';
import './style.css';

const App = () => {
  return (
    <Router>
      <NavBar />
      <div className="container my-4">
        <Routes>
          <Route exact path="/" element={
            <>
              <OpeningHours />
              <div className="row text-center mt-4">
                <div className="col">
                  <Link to="/event-calendar" className="text-decoration-none">
                    <div className="p-3 border bg-light">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar-event-fill" viewBox="0 0 16 16">
                        <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2m-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5"/>
                      </svg>
                      <p>Kalender</p>
                    </div>
                  </Link>
                </div>
                <div className="col">
                  <Link to="/zoo-map" className="text-decoration-none">
                    <div className="p-3 border bg-light">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-map-fill" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.598-.49L10.5.99 5.598.01a.5.5 0 0 0-.196 0l-5 1A.5.5 0 0 0 0 1.5v14a.5.5 0 0 0 .598.49l4.902-.98 4.902.98a.5.5 0 0 0 .196 0l5-1A.5.5 0 0 0 16 14.5zM5 14.09V1.11l.5-.1.5.1v12.98l-.402-.08a.5.5 0 0 0-.196 0zm5 .8V1.91l.402.08a.5.5 0 0 0 .196 0L11 1.91v12.98l-.5.1z"/>
                      </svg>
                      <p>Karte</p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="row text-center mt-4">
                <div className="col">
                  <Link to="/animal-info" className="text-decoration-none">
                    <div className="p-3 border bg-light">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-square-fill" viewBox="0 0 16 16">
                        <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm8.93 4.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                      </svg>
                      <p>Tierinfos</p>
                    </div>
                  </Link>
                </div>
                <div className="col">
                  <Link to="/buy-ticket" className="text-decoration-none">
                    <div className="p-3 border bg-light">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-ticket-detailed-fill" viewBox="0 0 16 16">
                        <path d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5V6a.5.5 0 0 1-.5.5 1.5 1.5 0 0 0 0 3 .5.5 0 0 1 .5.5v1.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 11.5V10a.5.5 0 0 1 .5-.5 1.5 1.5 0 1 0 0-3A.5.5 0 0 1 0 6zm4 1a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5m0 5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5M4 8a1 1 0 0 0 1 1h6a1 1 0 1 0 0-2H5a1 1 0 0 0-1 1"/>
                      </svg>
                      <p>Ticket</p>
                    </div>
                  </Link>
                </div>
              </div>
            </>
          } />
          <Route path="/zoo-map" element={<ZooMap />} />
          <Route path="/event-calendar" element={<EventCalendar />} />
          <Route path="/animal-info" element={<AnimalInfo />} />
          <Route path="/buy-ticket" element={<BuyTicket />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
