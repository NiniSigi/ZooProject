import React from 'react';

function EventTable({ events }) {
  return (
    <table className="table table-hover">
      <thead className="table-light">
        <tr>
          <th>Event</th>
          <th>Zeit</th>
          <th>Zielgruppe</th>
          <th>Datum</th>
        </tr>
      </thead>
      <tbody>
        {events.map((event, index) => (
          <tr key={index}>
            <td>{event.eventName}</td> 
            <td>{event.time}</td>      
            <td>{event.targetGroup}</td> 
            <td>{new Date(event.date).toLocaleDateString()}</td> 
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EventTable;
