export default class AviasalesService {
  _searchId = 'https://front-test.beta.aviasales.ru/search';
  _getTicketsUrl = 'https://front-test.beta.aviasales.ru/tickets' // ?searchId=${_searchId}

  checkingServerStatus = (status) => Math.floor(status / 100);
  
  getSearchId = async () => {
    const response = await fetch(this._searchId)
    const json = await response.json();
    const searchId = await json.searchId;
    const tickets = await this.getTicket(searchId);
    return tickets.map(this._getTransformData);
  }
  
  getTicket = async (searchId) => {
    const response = await fetch(`${this._getTicketsUrl}?searchId=${searchId}`);

    if (this.checkingServerStatus(response.status) === 5) {
      return this.getTicket(searchId)
    };

    if (response.ok) {
      const json = await response.json();
      return json.stop ? json.tickets : this.getTicket(searchId);
    }
  }

  _getTransformData = (item) => {
    return {  
      price: this._transfrormPrice(item.price),
      airlineCode: item.carrier,
      fullFlight: item.segments[0].duration + item.segments[1].duration,
      there: {
        there_origin: item.segments[0].origin,
        there_destination: item.segments[0].destination,
        there_duration: item.segments[0].duration,
        there_departure: this._getDepartureTime(item.segments[0].date),
        there_arrival: this._getTimeFromMins(item.segments[0].duration),
        there_travel: this._getTrevelTime(item.segments[0].date, item.segments[0].duration),
        there_stops: item.segments[0].stops
      },
      back: {
        back_origin: item.segments[1].origin,
        back_destination: item.segments[1].destination,
        back_duration: item.segments[1].duration,
        back_departure: this._getDepartureTime(item.segments[1].date),
        back_arrival: this._getTimeFromMins(item.segments[1].duration),
        back_travel:this._getTrevelTime(item.segments[1].date, item.segments[1].duration),
        back_stops: item.segments[1].stops,
      }
    }
  }

  // Если число меньше 10, то впереди добавляется ноль
  _lessThanTenAddZero = (number) => number < 10 ? `0${number}` : number; 

  // Вычисляется время взлёта самолёта
  _getDepartureTime = (time) => `${this._lessThanTenAddZero(new Date(time).getHours())}:${this._lessThanTenAddZero(new Date(time).getMinutes())}`;

  // Вычисляется время прилёта самолёта
  _getTrevelTime = (startDepartite, minutes) => {
    const date = new Date(startDepartite)
    const getHours = this._getTimeFromMins(minutes).slice(0, 2);
    const getMinutes = this._getTimeFromMins(minutes).slice(4, 6)

    date.setHours(date.getHours() + parseInt(getHours));
    date.setMinutes(date.getMinutes() + parseInt(getMinutes));
 
    return `${this._lessThanTenAddZero(date.getHours())}:${this._lessThanTenAddZero(date.getMinutes())}`;
  }

  // Функция, которая трансформирует минцты в часы и минуты, 
  // Позволяя узнать, сколько вообще часов занял полёт
  _getTimeFromMins = (mins) => {
    const hours = Math.trunc(mins/60);
    const minutes = mins % 60;
    return `${this._lessThanTenAddZero(hours)}ч ${this._lessThanTenAddZero(minutes)}м`
  };

  // В цене добавляется пробел у большим чисел 10 000, 15 000
  _transfrormPrice = (price) => String(price).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
}
