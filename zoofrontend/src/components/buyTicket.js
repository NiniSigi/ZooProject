import React, { useState } from 'react';

const BuyTicket = () => {
  const [ticketType, setTicketType] = useState('');
  const [eventSelection, setEventSelection] = useState('');
  const [eventDate, setEventDate] = useState('');

  // Änderung hier: Initialisieren Sie 'name' mit dem Benutzernamen aus dem localStorage, falls vorhanden
  const [name, setName] = useState(localStorage.getItem('username') || '');

  const [ticketGenerated, setTicketGenerated] = useState(false);

  const calculatePrice = () => {
    switch (ticketType) {
      case 'dayTicket':
        return 20;
      case 'twoDayTicket':
        return 50;
      case 'tenPass':
        return 150;
      case 'annualPass':
        return 300;
      case 'event':
        switch (eventSelection) {
          case 'otterFeeding':
            return 30;
          case 'nightWalk':
            return 40;
          case 'birdShow':
            return 25;
          case 'reptileWorkshop':
            return 35;
          default:
            return 0;
        }
      default:
        return 0;
    }
  };

  const getTicketTypeName = (ticketType) => {
    const ticketTypeNames = {
      dayTicket: 'Tagesticket',
      twoDayTicket: 'Zweitageticket',
      tenPass: 'Zehnerkarte',
      annualPass: 'Jahreskarte',
      event: 'Eventticket',
    };

    return ticketTypeNames[ticketType] || 'Unbekanntes Ticket';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ticketType === 'event' && !eventSelection) {
      alert('Bitte wählen Sie ein Event aus.');
      return;
    }
    if (name && ticketType) {
      setTicketGenerated(true);
    } else {
      alert('Bitte füllen Sie alle erforderlichen Felder korrekt aus.');
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Eintrittskarten kaufen</h1>
      {!ticketGenerated ? (
        <form onSubmit={handleSubmit} className="mb-4">
          {/* Ticket Type Selection */}
          <div className="mb-3">
            <label htmlFor="ticketType" className="form-label">
              Tickettyp:
            </label>
            <select
              className="form-select"
              id="ticketType"
              value={ticketType}
              onChange={(e) => setTicketType(e.target.value)}
            >
              <option value="">Tickettyp wählen</option>
              <option value="dayTicket">Tagesticket</option>
              <option value="twoDayTicket">Zweitageticket</option>
              <option value="tenPass">Zehnerkarte</option>
              <option value="annualPass">Jahreskarte</option>
              <option value="event">Event</option>
            </select>
          </div>
          {/* Name Input */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          {/* Event Selection */}
          {ticketType === 'event' && (
            <div className="mb-3">
              <label htmlFor="eventSelection" className="form-label">
                Event:
              </label>
              <select
                className="form-select"
                id="eventSelection"
                value={eventSelection}
                onChange={(e) => setEventSelection(e.target.value)}
              >
                <option value="">Event wählen</option>
                <option value="otterFeeding">Otterfütterung</option>
                <option value="nightWalk">Nachtwanderung</option>
                <option value="birdShow">Vogelshow</option>
                <option value="reptileWorkshop">Reptilien-Workshop</option>
              </select>
            </div>
          )}
          {/* Date Input */}
          <div className="mb-3">
            <label htmlFor="eventDate" className="form-label">
              Datum:
            </label>
            <input
              type="date"
              className="form-control"
              id="eventDate"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
            />
          </div>
          {/* Submit Button */}
          <button type="submit" className="btn btn-primary">
            Ticket generieren
          </button>
        </form>
      ) : (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{getTicketTypeName(ticketType)}</h5>
            <p className="card-text">
              <strong>Name:</strong> {name}
            </p>
            {ticketType === 'event' && (
              <>
                <p className="card-text">
                  <strong>Event:</strong> {eventSelection}
                </p>
                <p className="card-text">
                  <strong>Datum:</strong> {eventDate}
                </p>
              </>
            )}
            <p className="card-text">
              <strong>Preis:</strong> {calculatePrice()} Euro
            </p>
            {/* Anzeigen des ausgewählten Datums im HTML-Feld */}
            {ticketType !== 'event' && (
              <p className="card-text">
                <strong>Datum:</strong> {eventDate}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default BuyTicket;
