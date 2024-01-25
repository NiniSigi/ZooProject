import React from 'react';
import './style.css';

const ZooMap = () => {
  return (
    <div className="container mt-5 text-center">
      
      {/* Hinzugefügter Text über der Karte */}
      <div className="alert alert-info" role="alert">
        Die roten Punkte auf der Karte zeigen die optimalen Fotografie-Stellen an.
      </div>

      <div className="zoo-map-container">
        <img src="/karte.png" alt="Zoo Karte" className="img-fluid" /> {/* Bootstrap-Klasse für responsive Images */}
      </div>
    
      <div className="zoo-map-buttons">
        <a 
          href="/Zooplan.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn btn-danger mb-3"
        >
          Open Zoo Plan (PDF)
        </a>
      </div>
    </div>
  );
};

export default ZooMap;
