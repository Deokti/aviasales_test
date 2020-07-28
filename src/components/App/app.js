import React, { Component } from 'react';

import Header from '../header';
import AmountTransfersFilter from '../amount-transfers-filter';
import ItemStatusSorting from '../item-status-sorting';
import TicketList from '../ticket-list';
import AviasalesService from '../../Services/aviasales-service';

import Preload from '../preloader';
import calculateScroll from '../calculate-scroll';

import './app.scss';

export default class App extends Component {
  aviasalesService = new AviasalesService();

  state = { 
    ticketsList: [],
    statusSorting: 'cheaper',
    loading: true,
    marginRightBody: calculateScroll(),
    filterCheckbox: [
      { name: 'all', label: 'Все', checked: true },
      { 
        name: 'no-transfers', 
        label: 'Без пересадок', 
        checked: false, 
        numberOfTransfers: 0 
      },
      { 
        name: 'one-transfers', 
        label: '1 пересадка', 
        checked: false, 
        numberOfTransfers: 1 
      },
      { 
        name: 'two-transfers', 
        label: '2 пересадки', 
        checked: false, 
        numberOfTransfers: 2 
      },
      { 
        name: 'three-transfers', 
        label: '3 пересадки', 
        checked: false, 
        numberOfTransfers: 3 
      },
    ],
  }

  onCheckedFilter = (value) => this.setState((state) => {
      const filter = this.onToggleFilter(this.state.filterCheckbox, value, true);
      return { filterCheckbox: [...filter] };
    });
  
  onNoCheckedFilter = (value) => this.setState((state) => {
      const filter = this.onToggleFilter(this.state.filterCheckbox, value, false);
      return { filterCheckbox: [...filter] };
    });
  
  onToggleFilter = (array, name, currentState) => {
    const elementIndex = array.findIndex((item) => item.name === name);
    const currentElement = array[elementIndex];
    const currentElementName = { ...currentElement, checked: currentState }

    return [
      ...array.slice(0, elementIndex),
      currentElementName,
      ...array.slice(elementIndex + 1)
    ];
  }

  sortingItems = (items, statusSorting) => {
    if (statusSorting === 'cheaper') {
      return items
        .sort((prev, next) => prev.price.replace(/\s/g, '') - next.price.replace(/\s/g, ''))
        .slice(0, 5);
    } else if (statusSorting === 'faster') {
      return items
        .sort((prev, next) => prev.fullFlight - next.fullFlight)
        .slice(0, 5);
    }
  }


  // Возращаем массив билетов, с помощью filter, тем самым фильтруя их
  // Внутри обращаемся к arrayCheckbox и на каждой итерации получаем элемент
  // После чего возвращаем те билеты, у которых есть checked: true, b чьё имя
  // является all или numberOfTransfers схож с колличеством перелётов в билете
  updateFilterStatus = (ticketsList, arrayCheckbox) => {  
    return ticketsList.filter(ticket => {
      return arrayCheckbox.find(checkbox => {
        return (
          checkbox.checked && (
            checkbox.name === 'all' ||
            (checkbox.numberOfTransfers === ticket.there.there_stops.length && 
              checkbox.numberOfTransfers === ticket.back.back_stops.length)
          )
        )
      });
    });
  }

  componentDidUpdate(_, prevState) {
    if (this.state.filterCheckbox !== prevState.filterCheckbox) {
      this.updateFilterStatus(this.state.filterCheckbox, this.state.ticketsList);
    }
  }

  getDataFromService = () => {
    this.aviasalesService.getSearchId()
      .then(this.updateTicketsList)
  }

  updateTicketsList = (newTicketsList) => {
    const { ticketsList } = this.state;

    if (!ticketsList) return false;
    
    this.setState({ 
      ticketsList: newTicketsList,
      loading: false,
      marginRightBody: 0,
    });
  }

  
  componentDidMount() { this.getDataFromService(); }

  onChangeStatusSorting = (name) => this.setState({ statusSorting: name });


  render() {
    const { statusSorting, ticketsList, loading, marginRightBody, filterCheckbox } = this.state;

    const updateFilterStatus = this.updateFilterStatus(ticketsList, filterCheckbox);

    const allSortingItems = this.sortingItems(updateFilterStatus, statusSorting);

    const load = loading ? <Preload /> : null;
    const ticketListView = !load ? <TicketList ticketsList={allSortingItems} /> : null;

    // Для того, чтобы убрать резкий рывок, когда билетов нет
    document.body.style.marginRight = `${marginRightBody}px`;

    return (
      <section className='App'>
        <div className="container">
          <div className="App-header">
            <Header />
          </div>

          <div className="App-container">
            <div className="App-container-left">
              <AmountTransfersFilter 
                filterCheckbox={filterCheckbox} 
                onCheckedFilter={this.onCheckedFilter} 
                onNoCheckedFilter={this.onNoCheckedFilter} />
            </div>
            <div className="App-container-right">
              <div className="App-container-right-sorting">
                <ItemStatusSorting 
                  sorting={statusSorting}
                  onChangeStatusSorting={this.onChangeStatusSorting} />
              </div>
              <div className="App-container-right-tickets">
                {load}
                {ticketListView}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

