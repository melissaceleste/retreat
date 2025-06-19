import React from 'react';
import { Tile } from '../../ui/Tile/tile';
import { FlexHorizontal } from '../../ui/FlexContainer/flex-horizontal';
import beach from '../../../pictures/vibe/strand1.jpg';
import styles from './about.module.css';

export const About = () => {
  return (
    <div className={styles.about}>
      <FlexHorizontal>
        <Tile backgroundColor="var(--color-entspannt-beige)" color="var(--color-knall-pink)" fontSize="22px">
          <FlexHorizontal>
            <Tile backgroundColor="var(--color-entspannt-beige)" color="var(--color-peach)">
              <div className={styles.imageBorder}>
                <img src={beach} width="450px" height="auto" />
              </div>
            </Tile>
            <Tile backgroundColor="var(--color-entspannt-beige)" color="var(--color-knall-pink)">
              <div className={styles.textContainer}>
                <p>
                  <h1 className={styles.title}>about</h1>
                  Stell dir vor:
                  <br />
                  Verreisen, mit fremden Menschen, die alle ein
                  Hobby teilen - kreativ zu sein.
                  <br />Neue Menschen kennenlernen, gemeinsam basteln, gemeinsam kochen und das irgendwo auf einer warmen Insel.
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
