import React, { useState, useEffect } from 'react';
import styles from './pictures-of-vibes.module.css';

// Import der Vibe-Bilder
import vibe1 from '../../../pictures/vibe/vibe1.JPEG';
import vibe2 from '../../../pictures/vibe/vibe2.JPEG';
import vibe3 from '../../../pictures/vibe/vibe3.JPEG';
import vibe5 from '../../../pictures/vibe/vibe5.JPEG';
import vibe6 from '../../../pictures/vibe/vibe6.JPEG';
import vibe7 from '../../../pictures/vibe/vibe7.JPEG';
import vibe8 from '../../../pictures/vibe/vibe8.JPEG';
import vibe9 from '../../../pictures/vibe/vibe9.JPEG';
import vibe10 from '../../../pictures/vibe/vibe10.JPEG';
import vibe11 from '../../../pictures/vibe/vibe11.JPG';
import vibe12 from '../../../pictures/vibe/vibe12.JPEG';
import vibe13 from '../../../pictures/vibe/vibe13.JPEG';
import group from '../../../pictures/vibe/group.JPEG';

const images = [
  { src: vibe1, alt: 'Vibe 1' },
  { src: vibe2, alt: 'Vibe 2' },
  { src: vibe3, alt: 'Vibe 3' },
  { src: vibe5, alt: 'Vibe 5' },
  { src: vibe6, alt: 'Vibe 6' },
  { src: vibe7, alt: 'Vibe 7' },
  { src: vibe8, alt: 'Vibe 8' },
  { src: vibe9, alt: 'Vibe 9' },
  { src: vibe10, alt: 'Vibe 10' },
  { src: vibe11, alt: 'Vibe 11' },
  { src: vibe12, alt: 'Vibe 12' },
  { src: vibe13, alt: 'Vibe 13' },
  { src: group, alt: 'Gruppe' },
];

export const PicuresOfVibes = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    }, 4000); // Wechsel alle 4 Sekunden

    return () => clearInterval(interval);
  }, [isTransitioning]);

  const goToPrevious = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToNext = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <div className={styles.component}>
      <h2 className={styles.title}>Retreat Vibes</h2>
      <div className={styles.slideshowContainer}>
        <div className={styles.slideshow}>
          {images.map((image, index) => (
            <div
              key={index}
              className={`${styles.slide} ${
                index === currentIndex ? styles.active : ''
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={styles.slideImage}
              />
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button 
          className={`${styles.navButton} ${styles.prevButton}`}
          onClick={goToPrevious}
          aria-label="Vorheriges Bild"
        >
          ‹
        </button>
        <button 
          className={`${styles.navButton} ${styles.nextButton}`}
          onClick={goToNext}
          aria-label="Nächstes Bild"
        >
          ›
        </button>
      </div>
    </div>
  );
}; 
