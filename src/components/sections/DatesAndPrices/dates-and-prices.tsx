import React from 'react';
import styles from './dates-and-prices.module.css';

const INSTAGRAM_URL = 'https://www.instagram.com/zusammenkunst_bymel/'; // TODO: Instagram-Profil eintragen
const TIKTOK_URL = 'https://www.tiktok.com/'; // TODO: TikTok-Profil eintragen

export const DatesAndPrices = () => {
  return (
    <div className={styles.datesAndPrices}>
      <h2 className={styles.title}>Termine & Preise</h2>
      <div className={styles.infoText}>
        <p>
          Unser letztes Retreat auf Mallorca war super schön – schau gern auf{' '}
          <a href={INSTAGRAM_URL} className={styles.link} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>{' '}
          vorbei.
        </p>
        <p>Weitere Reisen werden gerade geplant :-)</p>
        <p>
          Damit du nichts verpasst: folg uns auf{' '}
          <a href={INSTAGRAM_URL} className={styles.link} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>{' '}
          oder{' '}
          <a href={TIKTOK_URL} className={styles.link} target="_blank" rel="noopener noreferrer">
            TikTok
          </a>
          , oder trag dich unten in den{' '}
          <a href="#anmeldung" className={styles.link}>
            Newsletter
          </a>{' '}
          ein :)
        </p>
        <p>Solange komm doch gern zu unserem Pop-Up-Event in Hamburg!</p>
      </div>
    </div>
  );
};
