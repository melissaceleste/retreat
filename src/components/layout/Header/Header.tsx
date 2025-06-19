import React from 'react';
import { Tile } from '../../ui/Tile/tile';
import { Navbar } from '../Navigation/navbar';
import { Wave } from '../Waves/wave';
import styles from './Header.module.css'

export const Header = () => {
  return (
    <Tile backgroundColor="var(--background-color)" color="var(--main-color-font)">
      <div className={styles.head}>
        <div className={styles.navBar}><Navbar /></div>
        <div className={styles.headline}>Zusammenkunst</div>
        <div className={styles.wave}>
          <Wave color="var(--background-color)" />
        </div>
      </div>
    </Tile>
  );
}; 
