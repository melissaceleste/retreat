import React from 'react';
import { Tile } from '../../ui/Tile/tile';
import { FlexHorizontal } from '../../ui/FlexContainer/flex-horizontal';
import { CreativeSession } from '../CreativeSession/creative-session';

export const Program = () => {
  return (
    <FlexHorizontal>
      <Tile backgroundColor="var(--color-entspannt-beige)" color="var(--color-knall-pink)">
        <div className="left">
          <p>
            Programm
            <br />
            Das Programm ist anpassbar auf die Wünsche der Teilnehmer:innen.
            <br />
            TAG 1
            <br />
            Ankunft am Flughafen (Flug selbst organisieren, gerne helfe ich auch bei der Buchung)
            <br />
            Transfer vom Flughafen zur Unterkunft
            <br />
            Get Together - alle lernen sich beim ersten kalten Getränk oder Fooood (je nach Ankunft) kennen.
            <br />
            TAG 2 - 4
            <br />
            09:00 - 10:00 Frühstück
            <br />
            10:00 - 13:00 Kreative Session
            <br />
            13:00 - 14:00 Mittag
            <br />
            14:00 - 18:00 Kreative Session/ freie Gestaltung
            <br />
            ab 18:00 gemeinsames Kochen, Essen & Ausklingen des Abends beim Sonnenuntergang :-)
            <br />
            TAG 5
            <br />
            Abschiedsfrühstück und transfer zum Flughafen :-)
          </p>
        </div>
      </Tile>
      <Tile backgroundColor="var(--color-dark-green)" color="var(--color-purple)">
        <div className="right">
          <CreativeSession />
        </div>
      </Tile>
    </FlexHorizontal>
  );
};
