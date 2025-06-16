import React from 'react';
import { Tile } from '../../ui/Tile/tile';
import { FlexHorizontal } from '../../ui/FlexContainer/flex-horizontal';
import beach from '../../../pictures/vibe/strand1.jpg';
import './about.css';

export const About = () => {
  return (
    <div className="about">
      <FlexHorizontal marginTop="350px">
        <Tile backgroundColor="var(--color-entspannt-beige)" color="var(--color-knall-pink)" fontSize="22px">
          <FlexHorizontal>
            <Tile backgroundColor="var(--color-entspannt-beige)" color="var(--color-peach)">
              <div className="imageBorder">
                <img src={beach} width="450px" height="auto" />
              </div>
            </Tile>
            <Tile backgroundColor="var(--color-entspannt-beige)" color="var(--color-knall-pink)">
              <div className="right">
                <p>
                  about -
                  <br />
                  Stell dir vor:
                  <br />
                  Eine Woche an einem sonnigen Ort, umgeben von lieben Menschen, die Lust auf Malen, Basteln & Tonen haben.
                  <br />
                  Du musst kein*e wild*e Künstler*in sein, nur Spaß daran haben, neue Menschen kennen- und voneinander zu lernen.
                  <br />
                </p>
              </div>
            </Tile>
          </FlexHorizontal>
        </Tile>
      </FlexHorizontal>
    </div>
  );
};
