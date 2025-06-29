import React from 'react';
import styles from './accommodation.module.css';

export const Accommodation = () => {
  return (
    <div className={styles.accommodation}>
      <h2 className={styles.title}>Unterkunft</h2>
      <p className={styles.description}><b>Space to connect – and to disconnect: </b>
         schöne, ruhige Villen oder Finka mit genug Platz zum allein oder gemeinsam sein. Du teilst dir ein gemütliches Doppelzimmer mit einer anderen Teilnehmer:in – oder gönnst dir ein Einzelzimmer, wenn du lieber für dich bist (beachte: das verändert natürlich die Gruppengröße & den Preis ein wenig).</p>
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
