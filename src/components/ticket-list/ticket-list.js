import React from 'react';

import TicketsAreAvailable from '../tickets-are-available';
import TicketListItem from '../ticket-list-item';

import calculateScroll from '../calculate-scroll';

import './ticket-list.scss';


export default class TicketList extends React.Component {

  state = { marginRight: calculateScroll() }

  render() {
    const { ticketsList = [] } = this.props;
    const { marginRight } = this.state;

    const bodyStyle = document.body.style;

    if (ticketsList.length === 0) bodyStyle.marginRight = `${marginRight}px`
    else { document.body.style.marginRight = '0'; }
    
    const thereAreNoTickets = ticketsList.length === 0 ? <TicketsAreAvailable /> : null;
    const ticketsAreAvailable = ticketsList ? <TicketListItem ticketsList={ticketsList} /> : null;

    return (
      <ul className="ticket-list">
        {thereAreNoTickets}
        {ticketsAreAvailable} 
      </ul>
    )
  }
}
