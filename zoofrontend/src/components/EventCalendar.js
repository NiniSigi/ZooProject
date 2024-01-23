import React, { useState, useEffect } from 'react';
import EventTable from './EventTable.js';

const EventCalendar = () => {
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/api/zoo/calendar')
      .then(response => response.json())
      .then(data => setEvents(data))
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  const formatDate = (date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = `${d.getMonth() + 1}`.padStart(2, '0');
    const day = `${d.getDate()}`.padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const filteredEvents = selectedDate
    ? events.filter(event => formatDate(event.date) === selectedDate)
    : events;

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Zoo Events</h1>
      <div className="mb-3">
        <label htmlFor="datePicker" className="form-label">Datum:</label>
        <input 
          type="date" 
          className="form-control" 
          id="datePicker" 
          value={selectedDate}
          onChange={e => setSelectedDate(e.target.value)} 
        />
      </div>
      <EventTable events={filteredEvents} />
    </div>
  );
};

export default EventCalendar;
