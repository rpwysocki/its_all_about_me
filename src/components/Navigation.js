// Navigate pages
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (

    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/aboutme">AboutMe</NavLink>
      <NavLink to="/portfolio">Portfolio</NavLink>
      <NavLink to="/resume">Resume</NavLink>

    </nav>

  );
};

export default Navigation;