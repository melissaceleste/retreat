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
          <Link to="about" smooth={true} duration={500} offset={-300}>About</Link>
        </li>
        <li className={styles.li}>
          <Link to="programm" smooth={true} duration={500} offset={-380}>Programm</Link>
        </li>
        <li className={styles.li}>
          <Link to="food" smooth={true} duration={500} offset={-300}>Verpflegung</Link>
        </li>
        <li className={styles.li}>
          <Link to="accommodation" smooth={true} duration={500} offset={-300}>Unterkunft</Link>
        </li>
        <li className={styles.li}>
          <Link to="datesAndPrices" smooth={true} duration={500} offset={-300}>Termine und Preise</Link>
        </li>
        <li className={styles.li}>
          <Link to="faq" smooth={true} duration={500} offset={-300}>FAQ</Link>
        </li>
        <li className={styles.li}>
          <Link to="aboutMe" smooth={true} duration={500} offset={-220}>About Me</Link>
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
              <Link to="about" smooth={true} duration={500} offset={-300} onClick={closeMenu}>About</Link>
            </li>
            <li className={styles.sideMenuItem}>
              <Link to="programm" smooth={true} duration={500} offset={-320} onClick={closeMenu}>Programm</Link>
            </li>
            <li className={styles.sideMenuItem}>
              <Link to="food" smooth={true} duration={500} offset={-180} onClick={closeMenu}>Verpflegung</Link>
            </li>
            <li className={styles.sideMenuItem}>
              <Link to="accommodation" smooth={true} duration={500} offset={-210} onClick={closeMenu}>Unterkunft</Link>
            </li>
            <li className={styles.sideMenuItem}>
              <Link to="datesAndPrices" smooth={true} duration={500} offset={-220} onClick={closeMenu}>Datum und Preise</Link>
            </li>
            <li className={styles.sideMenuItem}>
              <Link to="faq" smooth={true} duration={500} offset={-200} onClick={closeMenu}>FAQ</Link>
            </li>
            <li className={styles.sideMenuItem}>
              <Link to="aboutMe" smooth={true} duration={500} offset={-220} onClick={closeMenu}>About Me</Link>
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
