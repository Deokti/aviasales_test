import React from 'react';

import './ticket-list-item.scss';

const TicketListItem = ({ ticketsList }) => {
  let amountKey = 0;

  const checkAmountStops = (stopsLenght) => {
    if (stopsLenght.length === 0) return 'Пересадок нет';
    return stopsLenght.length > 1 ? `${stopsLenght.length} пересадки` : `${stopsLenght.length} пересадка`;
  }

  return ticketsList.map(item => {
    const { price, airlineCode, there, back } = item;
    const { there_origin, there_departure, there_destination, there_travel, there_arrival, there_stops } = there;
    const { back_origin, back_departure, back_destination, back_travel, back_arrival, back_stops } = back;

    return (
      <li className="ticket-list__item" key={amountKey++}>
        <div className="ticket-list__item-header">
          <h3 className="ticket-list__item-price">{`${price} Р`}</h3>
          <img src={`https://pics.avs.io/99/36/${airlineCode}.png`} alt={airlineCode} className="ticket-list__item-logo" />
        </div>
        <div className="ticket-list__item-there">
          <div className="ticket-list__element ticket-list__item-direction">
            <span className="ticket-list__title ticket-list__item-title">{`${there_origin} – ${there_destination}`}</span>
            <span className="ticket-list__value ticket-list__item-value">{`${there_departure} – ${there_travel}`}</span>
          </div>
          <div className="ticket-list__element ticket-list__item-time">
            <span className="ticket-list__title ticket-list__item-title">В пути</span>
            <span className="ticket-list__value ticket-list__item-value">{there_arrival}</span>
          </div>
          <div className="ticket-list__element ticket-list__item-transfer">
            <span className="ticket-list__title ticket-list__item-title">{checkAmountStops(there_stops)}</span>
            <span className="ticket-list__value ticket-list__item-value">{there_stops.join(', ')}</span>
          </div>
        </div>
        <div className="ticket-list__item-back">
          <div className="ticket-list__element ticket-list__item-direction">
              <span className="ticket-list__title ticket-list__item-title">{`${back_origin} – ${back_destination}`}</span>
              <span className="ticket-list__value ticket-list__item-value">{`${back_departure} – ${back_travel}`}</span>
            </div>
            <div className="ticket-list__element ticket-list__item-time">
              <span className="ticket-list__title ticket-list__item-title">В пути</span>
              <span className="ticket-list__value ticket-list__item-value">{back_arrival}</span>
            </div>
            <div className="ticket-list__element ticket-list__item-transfer">
              <span className="ticket-list__title ticket-list__item-title">{checkAmountStops(back_stops)}</span>
              <span className="ticket-list__value ticket-list__item-value">{back_stops.join(', ')}</span>
            </div>
        </div>
      </li>
    )
  });
}

export default TicketListItem;