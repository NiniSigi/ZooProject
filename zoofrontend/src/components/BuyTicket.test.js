import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BuyTicket from './BuyTicket';

test('Tickettyp auswählen und Name eingeben', () => {
  render(<BuyTicket />);
  
  // Wähle den Tickettyp aus
  fireEvent.change(screen.getByLabelText(/Tickettyp:/i), { target: { value: 'dayTicket' } });
  expect(screen.getByLabelText(/Tickettyp:/i).value).toBe('dayTicket');
  
  // Eingabe des Namens
  fireEvent.change(screen.getByLabelText(/Name:/i), { target: { value: 'Max Mustermann' } });
  expect(screen.getByLabelText(/Name:/i).value).toBe('Max Mustermann');
});
