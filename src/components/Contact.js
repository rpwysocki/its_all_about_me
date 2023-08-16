// Add links to Github, email, and LinkedIn
import React from 'react';
import { NavLink } from 'react-router-dom';
import email from "../assets/images/email.png";
import linkedin from "../assets/images/linkedin.png";
import github from "../assets/images/github.png";

const Contact = () => {
  return (
    <nav>
      <NavLink><a href='mailto: ryanwysocki78@gmail.com' className='email'><img className='email' src={ email }/></a></NavLink>
      <NavLink><a href='https://github.com/rpwysocki' className='github'><img className='github' src={ github }/></a></NavLink>
      <NavLink><a href='https://www.linkedin.com/in/ryan-wysocki-76513117' className='linkedin'><img className='linkedin' src={ linkedin }/></a></NavLink>
      
    </nav>
  );
};

export default Contact;
