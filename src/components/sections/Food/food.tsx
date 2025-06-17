import React from 'react';
import styles from './food.module.css';

export const Food = () => {
  return (
    <div className={styles.food}>
      <h2 className={styles.title}>Verpflegung</h2>
      <div className={styles.content}>
        <div className={styles.mealCard}>
          <img 
            src="/images/breakfast.jpg" 
            alt="Frühstück" 
            className={styles.image}
          />
          <div className={styles.details}>
            <h3 className={styles.mealTitle}>Frühstück</h3>
            <p className={styles.description}>
              Starte den Tag mit einem reichhaltigen Frühstück. Frisches Obst, 
              lokale Backwaren und verschiedene Aufstriche stehen zur Verfügung.
            </p>
            <div className={styles.dietary}>
              <span className={styles.tag}>Vegetarisch</span>
              <span className={styles.tag}>Vegan</span>
              <span className={styles.tag}>Glutenfrei</span>
            </div>
          </div>
        </div>

        <div className={styles.mealCard}>
          <img 
            src="/images/lunch.jpg" 
            alt="Mittagessen" 
            className={styles.image}
          />
          <div className={styles.details}>
            <h3 className={styles.mealTitle}>Mittagessen</h3>
            <p className={styles.description}>
              Genieße ein leckeres Mittagessen mit frischen, lokalen Zutaten. 
              Jeden Tag gibt es eine neue Überraschung.
            </p>
            <div className={styles.dietary}>
              <span className={styles.tag}>Vegetarisch</span>
              <span className={styles.tag}>Vegan</span>
              <span className={styles.tag}>Laktosefrei</span>
            </div>
          </div>
        </div>

        <div className={styles.mealCard}>
          <img 
            src="/images/dinner.jpg" 
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
              <span className={styles.tag}>Glutenfrei</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
