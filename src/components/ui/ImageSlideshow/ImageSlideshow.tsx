import React, { useState } from 'react';
import styles from './ImageSlideshow.module.css';

interface ImageSlideshowProps {
  images: string[];
  square?: boolean;
  imageFit?: 'cover' | 'contain';
}

export const ImageSlideshow: React.FC<ImageSlideshowProps> = ({
  images,
  square = false,
  imageFit = 'cover',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className={styles.slideshowWrapper}>
      <div
        className={`${styles.slideshowContainer} ${square ? styles.slideshowSquare : ''}`}
      >
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className={`${styles.image} ${square ? styles.imageSquare : ''}`}
          style={{ objectFit: imageFit }}
        />
        <button onClick={goToPrevious} className={styles.arrowLeft}>❮</button>
        <button onClick={goToNext} className={styles.arrowRight}>❯</button>
      </div>
    </div>
  );
};
