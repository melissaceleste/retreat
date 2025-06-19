import React, { useState, useEffect } from 'react';
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
import bastelnFimo3 from '../../../pictures/basteln/basteln-fimo3.JPEG';
import bastelnScrapbooking from '../../../pictures/basteln/basteln-scrapbooking.JPEG';
import bastelnScrapbooking3 from '../../../pictures/basteln/basteln-scrapbooking3.JPEG';
import bastelnJournaling from '../../../pictures/basteln/basteln-journaling.JPEG';
import pinsel from '../../../pictures/basteln/pinsel.jpg';
import painting from '../../../pictures/basteln/painting.jpg';
import pinseldraußen from '../../../pictures/basteln/pinseldraußen.jpg';

const images = [
  { src: bastelnMalen, alt: 'Basteln - Malen' },
  { src: bastelnSchmuck, alt: 'Basteln - Schmuck' },
  { src: bastelnFimo1, alt: 'Basteln - Fimo 1' },
  { src: bastelnMalen2, alt: 'Basteln - Malen 2' },
  { src: painting, alt: 'Painting' },
  { src: bastelnHenna, alt: 'Basteln - Henna' },
  { src: bastelnSchmuck2, alt: 'Basteln - Schmuck 2' },
  { src: pinseldraußen, alt: 'Pinsel draußen' },
  { src: bastelnSchmuck3, alt: 'Basteln - Schmuck 3' },
  { src: bastelnMalen4, alt: 'Basteln - Malen 4' },
  { src: bastelnFimo2, alt: 'Basteln - Fimo 2' },
  { src: bastelnScrapbooking, alt: 'Basteln - Scrapbooking' },
  { src: bastelnFimo3, alt: 'Basteln - Fimo 3' },
  { src: bastelnScrapbooking3, alt: 'Basteln - Scrapbooking 3' },
  { src: bastelnJournaling, alt: 'Basteln - Journaling' },
  { src: pinsel, alt: 'Pinsel' },
];

export const PicturesOfDiy = () => {
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
