// Header.js
import React from 'react';
import Navigation from './Navigation';


const Header = () => {
  return (
    <header className="row justify-between align-center">
      <h3>It's all about me!</h3>
      <h1>Ryan Wysocki</h1>
      <nav className="row">
        <Navigation />
      </nav>
    </header>
  );
};

export default Header;