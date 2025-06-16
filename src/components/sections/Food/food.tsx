import React from 'react';
import { FlexHorizontal } from '../../ui/FlexContainer/flex-horizontal';
import { Tile } from '../../ui/Tile/tile';
import food from '../../../pictures/vibe/food.jpg';
import './food.css';

export const Verpflegung = () => {
  return (
    <div className="verpflegung">
      <img src={food} width="100%" height="auto" alt="Food" />
      <FlexHorizontal>
        <Tile backgroundColor="var(--color-green)" color="var(--color-lila-blau)">
          <div className="left">
            <p>
              Verpflegung
              <br />
              Die gesamte Verpflegung ist im Preis inklusive. Dabei handelt es sich um Vegetarisches und wenn gewünscht auch veganen Stuff.
              <br />
              Frühstück:
              <br />
              ein ordentliches Buffet aus süßen und salzigen Leckereien :-)
              <br />
              Mittag:
              <br />
              leichte Kost (Salate, Bowls, Finger-Food)
              <br />
              Abend:
              <br />
              hier freue ich mich, wenn wir zusammen kochen oder einen Koch-Plan aus zwei Teilnehmer:innen machen.
              <br />
              Zwischendurch:
              <br />
              Snacks sind wichtig! :P
              <br />
              Getränke:
              <br />
              Frischgepresste Säfte, Wein, Bier, Aperoli
            </p>
          </div>
        </Tile>
        <Tile backgroundColor="var(--color-lila-dunkelblau)" color="var(--color-rosa)">
          <div className="right">
            Swipeshow mit Bildern vom Food
          </div>
        </Tile>
      </FlexHorizontal>
    </div>
  );
};
