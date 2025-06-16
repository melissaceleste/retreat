import React from 'react';
import { Tile } from '../../ui/Tile/tile';
import { Navbar } from '../Navigation/navbar';
import { Wave } from '../Waves/wave';

export const Header = () => {
  return (
    <Tile backgroundColor="var(--color-entspannt-beige)" color="var(--color-knall-pink)">
      <div className="head">
        <div className="navBar"><Navbar /></div>
        <div className="headline">Zusammenkunst</div>
        <div className="wave">
          <Wave color="var(--color-entspannt-beige)" />
        </div>
      </div>
    </Tile>
  );
}; 