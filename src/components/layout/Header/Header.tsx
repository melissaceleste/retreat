import React from 'react';
import { Tile } from '../../ui/Tile/tile';
import { Navbar } from '../Navigation/navbar';
import { Wave } from '../Waves/wave';
import styles from './Header.module.css'

export const Header = () => {
  return (
    <Tile backgroundColor="var(--color-entspannt-beige)" color="var(--main-color-font)">
      <div className={styles.head}>
        <div className={styles.navBar}><Navbar /></div>
        <div className={styles.headline}>Zusammenkunst</div>
        <div className={styles.wave}>
          <Wave color="var(--color-entspannt-beige)" />
        </div>
      </div>
    </Tile>
  );
}; 
