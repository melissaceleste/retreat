import React from 'react';
import { Link } from 'react-scroll';
import './navbar.css';

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="about" smooth={true} duration={500}>About</Link>
        </li>
        <li>
          <Link to="programm" smooth={true} duration={500}>Programm</Link>
        </li>
        <li>
          <Link to="living" smooth={true} duration={500}>Living</Link>
        </li>
        <li>
          <Link to="booking" smooth={true} duration={500}>Booking</Link>
        </li>
        <li>
          <Link to="fqa" smooth={true} duration={500}>FQA</Link>
        </li>
      </ul>
    </nav>
  );
};
