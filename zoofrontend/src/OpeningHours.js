import React from 'react';

const OpeningHours = () => {
  return (
    <div className="opening-hours bg-light py-3">
      <div className="container">
        <div className="row">
        <h2 className="h4">Öffnungszeiten</h2>
          <div className="col-md-6">
            <p><strong>März bis Oktober</strong></p>
            <p>Zoo: 9–18 Uhr</p>
            <p>Masoala Regenwald: 10–18 Uhr</p>
          </div>
          <div className="col-md-6">
            <p><strong>November bis Februar</strong></p>
            <p>Zoo: 9–17 Uhr</p>
            <p>Masoala Regenwald: 10–17 Uhr</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpeningHours;