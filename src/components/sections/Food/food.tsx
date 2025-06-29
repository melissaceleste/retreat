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
        <b>Plant-powered & planet-friendly: </b>Food is all i need – 100 % veggie oder vegan. Regional, saisonal, liebevoll zubereitet.
        Ob gemeinsames Schnippeln mit guter Musik oder entspanntes Ankommen ans gedeckte Buffet – wir spüren rein, was die Gruppe braucht. 🌱✨
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
              Starte easy in den Tag mit unserem bunten Frühstücksbuffet – frisches Obst, Aufstriche und knusprige lokale Backwaren. 🥐
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
            <p className={styles.description}>🍋 Lunch like it’s summer: Zur Mittagszeit wird’s leicht, frisch und lokal. Für mehr Leichtigkeit im Bauch und Flow im Kopf.</p>
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
            <p className={styles.description}>✨ Kitchen Vibes & Community Love: Abends zaubern wir gemeinsam Soulfood und feiern das Zusammensein. Kochen, lachen, Tag ausklingen.</p>
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
              🍓Snacks dürfen natürlich nicht fehlen! Zu jeder Zeit gibt es eine Auswahl an lokalen Leckereien. Von Obst
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
