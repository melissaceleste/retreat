import React from 'react';
import styles from './dates-and-prices.module.css';

export const DatesAndPrices = () => {
  return (
    <div className={styles.datesAndPrices}>
      <h2 className={styles.title}>Termine & Preise</h2>
      
      <div className={styles.dateCard}>
        <h3 className={styles.dateTitle}>Frühjahr 2024</h3>
        <div className={styles.dateInfo}>
          <p>15. - 20. April 2024</p>
          <p>6 Tage / 5 Nächte</p>
        </div>
        <div className={styles.price}>1.299 € pro Person</div>
        <a href="#anmeldung" className={styles.button}>Jetzt anmelden</a>
      </div>

      <div className={styles.dateCard}>
        <h3 className={styles.dateTitle}>Sommer 2024</h3>
        <div className={styles.dateInfo}>
          <p>1. - 6. Juli 2024</p>
          <p>6 Tage / 5 Nächte</p>
        </div>
        <div className={styles.price}>1.399 € pro Person</div>
        <a href="#anmeldung" className={styles.button}>Jetzt anmelden</a>
      </div>

      <div className={styles.dateCard}>
        <h3 className={styles.dateTitle}>Herbst 2024</h3>
        <div className={styles.dateInfo}>
          <p>23. - 28. September 2024</p>
          <p>6 Tage / 5 Nächte</p>
        </div>
        <div className={styles.price}>1.299 € pro Person</div>
        <a href="#anmeldung" className={styles.button}>Jetzt anmelden</a>
      </div>
    </div>
  );
};
