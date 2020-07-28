import React from 'react';

import './tickets-are-available.scss';

const TicketsAreAvailable = () => {
  return (
    <div className="tickets-are-available">
      <h4 className="tickets-are-available__title">К сожалению билетов нет!</h4>
      <span className="tickets-are-available__subtitle">Если у вас фильтр, пожалуйста смените его.</span>
    </div>
  );
}

export default TicketsAreAvailable;