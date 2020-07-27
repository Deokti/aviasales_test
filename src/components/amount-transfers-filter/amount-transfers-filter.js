import React from 'react';


import './amount-transfers-filter.scss';


const AmountTransfersFilter = ({ filterCheckbox, onCheckedFilter, onNoCheckedFilter }) => {

  const checkCheckboxAndGetName = (event) => {
    const data = event.target.dataset.name;

    if (event.target.checked) onCheckedFilter(data);
    else if (!event.target.checked) onNoCheckedFilter(data);
  }

  const createFilterTransfers = filterCheckbox.map(({ name, label, checked }) => {
    return (
      <li key={name} title={label} 
        className="amount-transfers__item">
        <label className="amount-transfers__item-label">
          <input type="checkbox"
            data-name={name} defaultChecked={checked}
            onChange={checkCheckboxAndGetName}
            className="amount-transfers__item-checkbox" />
          <span className="amount-transfers__item-checkbox-fake"></span>
          <span className="amount-transfers__item-name">{label}</span>
        </label>
      </li> 
    );
  });

  return (
    <div className="amount-transfers">
      <h3 className="amount-transfers__title">Количество пересадок</h3>

      <form name="filter-form">
        <ul className="amount-transfers__list">
          {createFilterTransfers}
        </ul>
      </form>
      
    </div>
  );
};

export default AmountTransfersFilter;