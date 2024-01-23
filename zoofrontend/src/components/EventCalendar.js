import React, { useState, useEffect } from 'react';
import EventTable from './EventTable.js';

const EventCalendar = () => {
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');

  useEffect(() => {
    fetch('/api/zoo/calendar')
      .then(response => response.json())
      .then(data => setEvents(data))
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  const filteredEvents = selectedDate
    ? events.filter(event => new Date(event.eventDate).toLocaleDateString() === selectedDate)
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
          onChange={e => setSelectedDate(e.target.value)} 
        />
      </div>
      <EventTable events={filteredEvents} />
    </div>
  );
};

export default EventCalendar;
