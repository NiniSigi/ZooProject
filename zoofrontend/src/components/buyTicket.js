import React, { useState } from 'react';

const BuyTicket = () => {
  const [ticketType, setTicketType] = useState('');
  const [date, setDate] = useState('');
  const [arrivalDate, setArrivalDate] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [name, setName] = useState('');
  const [ticketGenerated, setTicketGenerated] = useState(false);

  const calculatePrice = () => {
    switch(ticketType) {
      case 'dayTicket':
        return 20;
      case 'twoDayTicket':
        return 50;
      case 'tenPass':
        return 150;
      case 'annualPass':
        return 300;
      default:
        return 0;
    }
  };

  const validateTwoDayTicketDates = () => {
    const arrival = new Date(arrivalDate);
    const departure = new Date(departureDate);
    const nextDay = new Date(arrival);
    nextDay.setDate(nextDay.getDate() + 1);

    return departure.getTime() === nextDay.getTime();
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && (ticketType === 'dayTicket' || ticketType === 'annualPass') && date) {
      setTicketGenerated(true);
    } else if (ticketType === 'twoDayTicket' && arrivalDate && departureDate && validateTwoDayTicketDates()) {
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
          <div className="mb-3">
            <label htmlFor="ticketType" className="form-label">Tickettyp:</label>
            <select className="form-select" id="ticketType" value={ticketType} onChange={(e) => setTicketType(e.target.value)}>
              <option value="">Tickettyp wählen</option>
              <option value="dayTicket">Tagesticket</option>
              <option value="twoDayTicket">Zweitageticket</option>
              <option value="tenPass">Zehnerkarte</option>
              <option value="annualPass">Jahreskarte</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name:</label>
            <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          {ticketType === 'dayTicket' || ticketType === 'annualPass' ? (
            <div className="mb-3">
              <label htmlFor="date" className="form-label">{ticketType === 'annualPass' ? 'Gültig ab' : 'Datum'}:</label>
              <input type="date" className="form-control" id="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
          ) : null}
          {ticketType === 'twoDayTicket' && (
            <>
              <div className="mb-3">
                <label htmlFor="arrivalDate" className="form-label">Anreisedatum:</label>
                <input type="date" className="form-control" id="arrivalDate" value={arrivalDate} onChange={(e) => setArrivalDate(e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="departureDate" className="form-label">Abreisedatum:</label>
                <input type="date" className="form-control" id="departureDate" value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} />
              </div>
            </>
          )}
          <button type="submit" className="btn btn-primary">Ticket generieren</button>
        </form>
      ) : (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Ihr Ticket</h5>
            <p className="card-text"><strong>Tickettyp:</strong> {ticketType}</p>
            {(ticketType === 'dayTicket' || ticketType === 'annualPass') && <p className="card-text"><strong>{ticketType === 'annualPass' ? 'Gültig ab' : 'Datum'}:</strong> {date}</p>}
            {ticketType === 'twoDayTicket' && <>
              <p className="card-text"><strong>Anreisedatum:</strong> {arrivalDate}</p>
              <p className="card-text"><strong>Abreisedatum:</strong> {departureDate}</p>
            </>}
            <p className="card-text"><strong>Name:</strong> {name}</p>
            <p className="card-text"><strong>Preis:</strong> {calculatePrice()} Euro</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BuyTicket;
