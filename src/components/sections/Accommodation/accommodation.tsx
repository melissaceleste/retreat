import React from 'react';
import styles from './accommodation.module.css';

export const Accommodation = () => {
  return (
    <div className={styles.accommodation}>
      <h2 className={styles.title}>Unterkunft</h2>
      <p className={styles.description}>Bei den Unterkünften handelt es sich immer um schöne Villen mit ausreichend Platz für alle, sodass man auch mal
        Ruhe für sich genießen kann. Vorgesehen sind Doppelzimmer, die man sich immer zu zweit teilt. Natürlich kann man sich aber auch ein Zimmer alleine buchen. Dann wird es im Gesamtpreis natürlich teurer, da die Gruppe dadurch auch kleiner ist.</p>
      <div className={styles.content}>
        <div className={styles.roomCard}>
          <div className={styles.details}>
            <h3 className={styles.roomTitle}>Einzelzimmer</h3>
            <p className={styles.description}>
              Genieße deine Privatsphäre in einem komfortablen Einzelzimmer mit eigenem Bad.
            </p>
            <ul className={styles.features}>
              <li className={styles.feature}>
                <span className={styles.featureIcon}>✓</span>
                Eigenes Bad (abhängig von Unterkunft)
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.roomCard}>
          <div className={styles.details}>
            <h3 className={styles.roomTitle}>Doppelzimmer</h3>
            <p className={styles.description}>
              Teile dir ein geräumiges Zimmer mit einer anderen Teilnehmer:in.
            </p>
            <ul className={styles.features}>
              <li className={styles.feature}>
                <span className={styles.featureIcon}>✓</span>
                Gemeinsames Bad
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
