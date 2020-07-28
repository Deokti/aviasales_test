import React from 'react';


import logo from '../../images/logo.svg'

const Header = () => {
  return (
    <div className="header">
      <a href='index.html' title="Aviasales">
        <img src={logo} alt="aviasales" />
      </a>
    </div>
  );
};

export default Header;