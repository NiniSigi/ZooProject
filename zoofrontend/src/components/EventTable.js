import React, { useState } from 'react';

function EventTable({ events }) {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

  const sortedEvents = React.useMemo(() => {
    let sortableEvents = [...events];
    if (sortConfig.key !== null) {
      sortableEvents.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableEvents;
  }, [events, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  }

  return (
    <table className="table table-hover">
      <thead className="table-light">
        <tr>
          <th onClick={() => requestSort('eventName')}>Event</th>
          <th onClick={() => requestSort('time')}>Zeit</th>
          <th onClick={() => requestSort('targetGroup')}>Zielgruppe</th>
          <th onClick={() => requestSort('date')}>Datum</th>
        </tr>
      </thead>
      <tbody>
        {sortedEvents.map((event, index) => (
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
