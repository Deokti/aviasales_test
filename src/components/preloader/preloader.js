import React from 'react';

import preload from '../../images/preloader.gif';

import './preloader.scss';

const Preload = () => {
  return (
    <div className="prealoder">
      <img src={preload} alt="loading..." className="ploader-gif" />
    </div>
  );
};

export default Preload;