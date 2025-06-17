import React from 'react';
import styles from './accommodation.module.css';

export const Accommodation = () => {
  return (
    <div className={styles.accommodation}>
      <h2 className={styles.title}>Unterkunft</h2>
      <div className={styles.content}>
        <div className={styles.roomCard}>
          <img 
            src="/images/single-room.jpg" 
            alt="Einzelzimmer" 
            className={styles.image}
          />
          <div className={styles.details}>
            <h3 className={styles.roomTitle}>Einzelzimmer</h3>
            <p className={styles.description}>
              Genieße deine Privatsphäre in einem komfortablen Einzelzimmer mit eigenem Bad.
            </p>
            <ul className={styles.features}>
              <li className={styles.feature}>
                <span className={styles.featureIcon}>✓</span>
                Eigenes Bad
              </li>
              <li className={styles.feature}>
                <span className={styles.featureIcon}>✓</span>
                Balkon mit Meerblick
              </li>
              <li className={styles.feature}>
                <span className={styles.featureIcon}>✓</span>
                Klimaanlage
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.roomCard}>
          <img 
            src="/images/double-room.jpg" 
            alt="Doppelzimmer" 
            className={styles.image}
          />
          <div className={styles.details}>
            <h3 className={styles.roomTitle}>Doppelzimmer</h3>
            <p className={styles.description}>
              Teile dir ein geräumiges Zimmer mit einer anderen Teilnehmerin.
            </p>
            <ul className={styles.features}>
              <li className={styles.feature}>
                <span className={styles.featureIcon}>✓</span>
                Gemeinsames Bad
              </li>
              <li className={styles.feature}>
                <span className={styles.featureIcon}>✓</span>
                Balkon mit Meerblick
              </li>
              <li className={styles.feature}>
                <span className={styles.featureIcon}>✓</span>
                Klimaanlage
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
