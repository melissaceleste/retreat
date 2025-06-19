import React from 'react';
import styles from './pictures-of-vibes.module.css';

// Import der Vibe-Bilder
import vibe1 from '../../../pictures/vibe/vibe1.JPEG';
import vibe2 from '../../../pictures/vibe/vibe2.JPEG';
import vibe3 from '../../../pictures/vibe/vibe3.JPEG';
import vibe5 from '../../../pictures/vibe/vibe5.JPEG';
import vibe6 from '../../../pictures/vibe/vibe6.JPEG';
import vibe9 from '../../../pictures/vibe/vibe9.JPEG';
import vibe10 from '../../../pictures/vibe/vibe10.JPEG';
import vibe11 from '../../../pictures/vibe/vibe11.JPG';
import vibe12 from '../../../pictures/vibe/vibe12.JPEG';
import vibe13 from '../../../pictures/vibe/vibe13.JPEG';
import group from '../../../pictures/vibe/group.JPEG';

const images = [
  { src: vibe1, alt: 'Vibe 1', size: 'large' },
  { src: vibe2, alt: 'Vibe 2', size: 'medium' },
  { src: vibe3, alt: 'Vibe 3', size: 'small' },
  { src: vibe5, alt: 'Vibe 5', size: 'medium' },
  { src: vibe6, alt: 'Vibe 6', size: 'large' },
  { src: vibe9, alt: 'Vibe 9', size: 'large' },
  { src: vibe10, alt: 'Vibe 10', size: 'large' },
  { src: vibe11, alt: 'Vibe 11', size: 'medium' },
  { src: vibe12, alt: 'Vibe 12', size: 'large' },
  { src: vibe13, alt: 'Vibe 13', size: 'small' },
  { src: group, alt: 'Gruppe', size: 'large' },
];

export const PicturesOfVibes = () => {
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
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; 
