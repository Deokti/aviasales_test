import React from 'react';

import TicketsAreAvailable from '../tickets-are-available';
import TicketListItem from '../ticket-list-item';

import './ticket-list.scss';

const TicketList = ({ ticketsList = [] }) => {


  const thereAreNoTickets = ticketsList.length === 0 ? <TicketsAreAvailable /> : null;
  const ticketsAreAvailable = ticketsList ? <TicketListItem ticketsList={ticketsList} /> : null;
  
  return (
    <ul className="ticket-list">
      {thereAreNoTickets}
      {ticketsAreAvailable} 
    </ul>
  )
};


export default TicketList;