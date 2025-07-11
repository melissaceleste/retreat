import React from 'react';
import { Tile } from '../../ui/Tile/tile';
import { FlexHorizontal } from '../../ui/FlexContainer/flex-horizontal';
import { CreativeSession } from '../CreativeSession/creative-session';
import styles from './program.module.css';

export const Program = () => {
  return (
    <FlexHorizontal>
      <Tile backgroundColor="var(--background-color)" color="var(--main-color-font)">
        <div className={styles.program}>
          <p>
            <h1 className={styles.title}>Programm</h1>
            Das Programm ist anpassbar auf die Wünsche der Teilnehmer:innen.
            <br />
            <br />
            <b className={styles.dayTitle}>TAG 1</b>
            <ul>
              <li>Ankunft am Flughafen (Flug selbst organisieren, gerne helfe ich auch bei der Buchung)</li>
              <li>Transfer vom Flughafen zur Unterkunft</li>
              <li>Get Together - alle lernen sich beim ersten kalten Getränk oder Fooood (je nach Ankunft)
                kennen.
              </li>
            </ul>
            <br />
            <b className={styles.dayTitle}>TAG 2 - 4</b>
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
            <br />
            <b className={styles.dayTitle}>TAG 5</b>
            <br />
            Abschiedsfrühstück und transfer zum Flughafen :-)
          </p>
        </div>
      </Tile>
      <Tile backgroundColor="var(--second-color-font)" color="var(--color-purple)">
          <CreativeSession />
      </Tile>
    </FlexHorizontal>
  );
};
