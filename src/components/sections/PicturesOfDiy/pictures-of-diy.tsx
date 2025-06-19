import React from 'react';
import styles from './pictures-of-diy.module.css';

// Import der Basteln-Bilder
import bastelnMalen from '../../../pictures/basteln/basteln-malen.JPEG';
import bastelnMalen2 from '../../../pictures/basteln/basteln-malen2.JPEG';
import bastelnMalen4 from '../../../pictures/basteln/basteln-malen4.JPEG';
import bastelnHenna from '../../../pictures/basteln/basteln-henna.JPEG';
import bastelnSchmuck from '../../../pictures/basteln/basteln-schmuck.JPEG';
import bastelnSchmuck2 from '../../../pictures/basteln/basteln-schmuck2.JPEG';
import bastelnSchmuck3 from '../../../pictures/basteln/basteln-schmuck3.JPEG';
import bastelnFimo1 from '../../../pictures/basteln/basteln-fimo1.JPEG';
import bastelnFimo2 from '../../../pictures/basteln/basteln-fimo2.JPEG';
import bastelnScrapbooking from '../../../pictures/basteln/basteln-scrapbooking.JPEG';
import bastelnScrapbooking3 from '../../../pictures/basteln/basteln-scrapbooking3.JPEG';
import bastelnJournaling from '../../../pictures/basteln/basteln-journaling.JPEG';
import painting from '../../../pictures/basteln/painting.jpg';
import pinseldraußen from '../../../pictures/basteln/pinseldraußen.jpg';

const images = [
  { src: bastelnJournaling, alt: 'Scrapbooking', size: 'small' },
  { src: bastelnSchmuck, alt: 'Schmuck basteln', size: 'medium' },
  { src: bastelnFimo1, alt: 'Fimo', size: 'small' },
  { src: bastelnMalen2, alt: 'Malen', size: 'large' },
  { src: painting, alt: 'Malen', size: 'large' },
  { src: bastelnHenna, alt: ' Henna', size: 'small' },
  { src: bastelnSchmuck2, alt: 'Schmuck basteln', size: 'small' },
 // { src: pinseldraußen, alt: 'Malen', size: 'medium' },
  { src: bastelnSchmuck3, alt: 'Schmuck basteln', size: 'large' },
  { src: bastelnMalen4, alt: ' Malen', size: 'small' },
  { src: bastelnFimo2, alt: ' Fimo', size: 'medium' },
  { src: bastelnScrapbooking, alt: ' Scrapbooking', size: 'large' },
  { src: bastelnScrapbooking3, alt: ' Scrapbooking', size: 'medium' },
];

export const PicturesOfDiy = () => {
  return (
    <div className={styles.component}>
      {/* Masonry Grid */}
      <div className={styles.masonryGrid}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`${styles.masonryItem} ${styles[image.size]}`}
          >
            <div className={styles.imageContainer}>
              <img
                src={image.src}
                alt={image.alt}
                className={styles.image}
                loading="lazy"
              />
              <div className={styles.overlay}>
                <div className={styles.overlayContent}>
                  <h3>{image.alt}</h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
