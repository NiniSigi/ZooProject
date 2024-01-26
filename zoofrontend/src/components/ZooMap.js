import React from 'react';
import './style.css';

const ZooMap = () => {
  return (
    <div className="container mt-5 text-center">

      {/* Entfernter Alert-Bereich */}

      <div className="zoo-map-container">
        {/* Verwenden Sie <embed> oder <iframe> für das PDF */}
        <embed 
          src="/Zooplan.pdf" 
          type="application/pdf" 
          className="img-fluid" 
          style={{ height: "980px", width: "100%" }} 
        />
      </div>


    </div>
  );
};

export default ZooMap;
