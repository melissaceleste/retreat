import React from 'react';
import { Link } from 'react-scroll';
import styles from './navbar.module.css';

export const Navbar = () => {
  return (
    <nav>
      <ul className={styles.ulNavigation}>
        <li className={styles.li}>
          <Link to="about" smooth={true} duration={500}>About</Link>
        </li>
        <li className={styles.li}>
          <Link to="programm" smooth={true} duration={500}>Programm</Link>
        </li>
        <li className={styles.li}>
          <Link to="living" smooth={true} duration={500}>Living</Link>
        </li>
        <li className={styles.li}>
          <Link to="booking" smooth={true} duration={500}>Booking</Link>
        </li>
        <li className={styles.li}>
          <Link to="fqa" smooth={true} duration={500}>FQA</Link>
        </li>
      </ul>
    </nav>
  );
};
