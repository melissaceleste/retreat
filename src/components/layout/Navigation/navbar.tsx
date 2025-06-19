import React, { useState } from 'react';
import { Link } from 'react-scroll';
import styles from './navbar.module.css';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={styles.navContainer}>
      {/* Desktop Navigation */}
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

      {/* Mobile Burger Menu Button */}
      <button 
        className={`${styles.burgerButton} ${isMenuOpen ? styles.active : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className={styles.burgerLine}></span>
        <span className={styles.burgerLine}></span>
        <span className={styles.burgerLine}></span>
      </button>

      {/* Mobile Side Menu */}
      <div className={`${styles.sideMenu} ${isMenuOpen ? styles.open : ''}`}>
        <div className={styles.sideMenuContent}>
          <button className={styles.closeButton} onClick={closeMenu}>
            ×
          </button>
          <ul className={styles.sideMenuList}>
            <li className={styles.sideMenuItem}>
              <Link to="about" smooth={true} duration={500} onClick={closeMenu}>About</Link>
            </li>
            <li className={styles.sideMenuItem}>
              <Link to="programm" smooth={true} duration={500} onClick={closeMenu}>Programm</Link>
            </li>
            <li className={styles.sideMenuItem}>
              <Link to="living" smooth={true} duration={500} onClick={closeMenu}>Living</Link>
            </li>
            <li className={styles.sideMenuItem}>
              <Link to="booking" smooth={true} duration={500} onClick={closeMenu}>Booking</Link>
            </li>
            <li className={styles.sideMenuItem}>
              <Link to="fqa" smooth={true} duration={500} onClick={closeMenu}>FQA</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div className={styles.overlay} onClick={closeMenu}></div>
      )}
    </nav>
  );
};
