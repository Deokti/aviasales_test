import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

ReactDOM.render(<App />, 
  document.getElementById('root'));


  // { 
      //   carrier: "S7", 
      //   price: 47326,
      //   segments: [
      //     {
      //       date: "2020-07-30T17:01:00.000Z",
      //       destination: "HKT",
      //       duration: 1644,
      //       origin: "MOW",
      //       stops: []
      //     },
      //     { 
      //       date: "2020-08-18T22:19:00.000Z",
      //       destination: "MOW",
      //       duration: 1079,
      //       origin: "HKT",
      //       stops: ["KUL", "BKK", "SIN"]
      //     }
      //   ]
      // },
      // {
      //   carrier: "S7",
      //   price: 68194,
      //   segments: [
      //     {
      //       date: "2020-07-30T05:00:00.000Z",
      //       destination: "HKT",
      //       duration: 1279,
      //       origin: "MOW",
      //       stops: ["IST", "KUL", "SIN"]
      //     },
      //     {
      //       date: "2020-08-19T13:20:00.000Z",
      //       destination: "MOW",
      //       duration: 1795,
      //       origin: "HKT",
      //       stops: []
      //     }
      //   ]
      // },
      // {
      //   carrier: "EK",
      //   price: 81239, 
      //   segments: [
      //     {
      //       date: "2020-07-30T16:09:00.000Z",
      //       destination: "HKT",
      //       duration: 1827,
      //       origin: "MOW",
      //       stops: ["SHA", "AUH"]
      //     },
      //     {
      //       date: "2020-08-19T02:05:00.000Z",
      //       destination: "MOW",
      //       duration: 1025,
      //       origin: "HKT",
      //       stops: ["SHA"],
      //     }
      //   ]
      // },
      // {
      //   carrier: "S7",
      //   price: 98292,
      //   segments: [
      //     {
      //       date: "2020-07-30T14:58:00.000Z",
      //       destination: "HKT",
      //       duration: 1514,
      //       origin: "MOW",
      //       stops: ["DXB", "SIN", "HKG"],
      //     },
      //     {
      //       date: "2020-08-19T16:11:00.000Z",
      //       destination: "MOW",
      //       duration: 1414,
      //       origin: "HKT",
      //       stops: [],
      //     }
      //   ]
      // },
      // {
      //   carrier: "TG",
      //   price: 15358,
      //   segments: [
      //     {
      //       date: "2020-07-30T09:25:00.000Z",
      //       destination: "HKT",
      //       duration: 1580,
      //       origin: "MOW",
      //       stops: ["HKG"],
      //     },
      //     {
      //       date: "2020-08-19T02:27:00.000Z",
      //       destination: "MOW",
      //       duration: 1769,
      //       origin: "HKT",
      //       stops: ["HKG", "SHA", "KUL"],
      //     }
      //   ]
      // }