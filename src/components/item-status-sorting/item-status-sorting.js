import React from 'react';

import './item-status-sorting.scss';

const statusSorting = [
  { name: 'cheaper', label: 'Самый дешевый' },
  { name: 'faster', label: 'Самый быстрый' },
]

const ItemStatusSorting = ({ sorting, onChangeStatusSorting }) => {
  const createStatusSorting = statusSorting.map(({ name, label }) => {
    const isActive = sorting === name ? 'status-sorting-item-active' : '';

    return (
      <li key={name} title={label}
        className={`status-sorting__item ${isActive}`} 
        onClick={() => onChangeStatusSorting(name)}>
        {label}
      </li>
    );
  });

  return (
    <div className="status-sorting">
      <ul className="status-sorting__list">
        {createStatusSorting}
      </ul>
    </div>
  );

};

export default ItemStatusSorting;