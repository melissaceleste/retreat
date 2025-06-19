import React from 'react';
import styles from './food.module.css';
import breakfastImage from './../../../pictures/real-pictures/breakfast.JPEG';
import snacksImage from './../../../pictures/real-pictures/snacks.JPEG';
import abendsImage from './../../../pictures/vibe/abends.jpg';
import mittagsImage from './../../../pictures/vibe/food.jpg';

export const Food = () => {
  return (
    <div className={styles.food}>
      <h2 className={styles.title}>Verpflegung</h2>
      <div className={styles.description}>
        Wir legen großen Wert auf eine gesunde und ausgewogene Ernährung. Alle Mahlzeiten sind vegetarisch und
        vegan, mit frischen, lokalen Zutaten zubereitet. Je nach Lust und Dynamik der Gruppe können wir die Mahlzeiten gemeinsam vorbereiten oder sie stehen euch fertig bereit. :-)
      </div>
      <div className={styles.content}>
        <div className={styles.mealCard}>
          <img
            src={breakfastImage}
            alt="Frühstück"
            className={styles.image}
          />
          <div className={styles.details}>
            <h3 className={styles.mealTitle}>Frühstück</h3>
            <p className={styles.description}>
              Wir starten jeden Tag mit einem reichhaltigen Frühstücksbuffet. Frisches Obst,
              lokale Backwaren und verschiedene Aufstriche.
            </p>
            <div className={styles.dietary}>
              <span className={styles.tag}>Vegetarisch</span>
              <span className={styles.tag}>Vegan</span>
            </div>
          </div>
        </div>

        <div className={styles.mealCard}>
          <img
            src={mittagsImage}
            alt="Mittagessen"
            className={styles.image}
          />
          <div className={styles.details}>
            <h3 className={styles.mealTitle}>Mittagessen</h3>
            <p className={styles.description}>
              Mittags genießen wir sommerliche, leichte Gerichte mit frischen, lokalen Zutaten.
              Jeden Tag gibt es eine neue Überraschung.
            </p>
            <div className={styles.dietary}>
              <span className={styles.tag}>Vegetarisch</span>
              <span className={styles.tag}>Vegan</span>
            </div>
          </div>
        </div>

        <div className={styles.mealCard}>
          <img
            src={abendsImage}
            alt="Abendessen"
            className={styles.image}
          />
          <div className={styles.details}>
            <h3 className={styles.mealTitle}>Abendessen</h3>
            <p className={styles.description}>
              Gemeinsames Kochen und Genießen am Abend. Wir bereiten zusammen
              leckere Gerichte zu und lassen den Tag gemütlich ausklingen.
            </p>
            <div className={styles.dietary}>
              <span className={styles.tag}>Vegetarisch</span>
              <span className={styles.tag}>Vegan</span>
            </div>
          </div>
        </div>

        <div className={styles.mealCard}>
          <img
            src={snacksImage}
            alt="Abendessen"
            className={styles.image}
          />
          <div className={styles.details}>
            <h3 className={styles.mealTitle}>Snacks</h3>
            <p className={styles.description}>
              Snacks dürfen natürlich nicht fehlen! Zu jeder Zeit gibt es eine Auswahl an lokalen Leckereien. Von Obst
              bis Schoki über Eis. :-)
            </p>
            <div className={styles.dietary}>
              <span className={styles.tag}>Vegetarisch</span>
              <span className={styles.tag}>Vegan</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
