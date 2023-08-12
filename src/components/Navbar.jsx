import React from 'react';

import logo from '../assets/logo.svg';

const Navbar = () => {
  return (
    <nav className='bg-black'>
      <ul>
        <li>
          <img src={logo} />
        </li>
        <li>About</li>
        <li>Services</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
