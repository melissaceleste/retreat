import React from 'react';
import styles from './dates-and-prices.module.css';
import { ImageSlideshow } from '../../ui/ImageSlideshow/ImageSlideshow';

import bali from '../../../pictures/living/Bali.png';
import bali0 from '../../../pictures/living/Bali0.png';
import bali1 from '../../../pictures/living/Bali1.png';
import bali2 from '../../../pictures/living/Bali2.png';
import bali3 from '../../../pictures/living/Bali3.png';
import bali4 from '../../../pictures/living/Bali4.png';

import mallorca1 from '../../../pictures/living/Mallorca1.png';
import mallorca2 from '../../../pictures/living/Mallorca2.png';
import mallorca3 from '../../../pictures/living/Mallorca3.png';
import mallorca4 from '../../../pictures/living/Mallorca4.png';

const baliImages = [bali0, bali, bali1, bali2, bali3, bali4];
const mallorcaImages = [mallorca1, mallorca2, mallorca3, mallorca4];

export const DatesAndPrices = () => {
  return (
    <div className={styles.datesAndPrices}>
      <h2 className={styles.title}>Termine & Preise</h2>
      
      <div className={styles.dateCard}>
        <ImageSlideshow images={baliImages} />
        <h3 className={styles.dateTitle}>Zusammenkunst goes Bali</h3>
        <div className={styles.dateInfo}>
          <p>12. - 17. Mai 2026</p>
          <p>6 Tage / 5 Nächte</p>
        </div>
        <div className={styles.price}>835 € pro Person</div> {/* 6+ Nina&Mich -> 265,4166666667 5 + Nina&Mich 318,5 | vllt auch 700, so dass ich meinen Flug drin hab*/}
        <a href="#anmeldung" className={styles.button}>Jetzt anmelden</a>
      </div>

      <div className={styles.dateCard}>
        <ImageSlideshow images={mallorcaImages} />
        <h3 className={styles.dateTitle}>Mallorca</h3>
        <div className={styles.dateInfo}>
          <p>13. - 18. Mai 2026</p>
          <p>6 Tage / 5 Nächte</p>
        </div>
        <div className={styles.price}>880 € pro Person</div>  {/*3.655,84 (8) / 6 = 522,2628571429*/}
        <a href="#anmeldung" className={styles.button}>Jetzt anmelden</a>
      </div>
    </div>
  );
};
