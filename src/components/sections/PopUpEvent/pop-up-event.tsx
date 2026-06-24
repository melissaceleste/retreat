import React from 'react';
import styles from './pop-up-event.module.css';

import popup1 from '../../../pictures/popup/seite1.png';
import popup2 from '../../../pictures/popup/seite2.png';
import popup3 from '../../../pictures/popup/seite3.png';
import popup4 from '../../../pictures/popup/seite4.png';

const images = [
  { src: popup1, alt: 'Pop-Up Event 1' },
  { src: popup2, alt: 'Pop-Up Event 2' },
  { src: popup3, alt: 'Pop-Up Event 3' },
  { src: popup4, alt: 'Pop-Up Event 4' },
];

export const PopUpEvent = () => {
  return (
    <section className={styles.component}>
      <p className={styles.title}>Zusammenkunst goes Pop Up Event</p>
      <div className={styles.imageGrid}>
        {images.map((image, index) => (
          <div key={index} className={styles.imageItem}>
            <img src={image.src} alt={image.alt} className={styles.image} loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
};
