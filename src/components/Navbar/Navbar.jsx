import React from 'react';

import logo from '../assets/logo.svg';

const Navbar = () => {
  return (
    <nav className='flex justify-between'>
      <div>
        <img src={logo} />
      </div>
      <div>
        <ul className='flex'>
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
