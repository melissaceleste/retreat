import React, { useState, useEffect } from 'react';
import styles from './ColorPicker.module.css';

export const ColorPicker = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mainColorFont, setMainColorFont] = useState('#F597FF'); // Default pink
  const [secondColorFont, setSecondColorFont] = useState('#00B2A9'); // Default green
  const [backgroundColor, setBackgroundColor] = useState('#FFF6ED'); // Default beige

  // CSS-Variablen aktualisieren
  useEffect(() => {
    document.documentElement.style.setProperty('--main-color-font', mainColorFont);
    document.documentElement.style.setProperty('--second-color-font', secondColorFont);
    document.documentElement.style.setProperty('--background-color', backgroundColor);
  }, [mainColorFont, secondColorFont, backgroundColor]);

  const handleColorChange = (colorType: string, value: string) => {
    switch (colorType) {
      case 'main':
        setMainColorFont(value);
        break;
      case 'second':
        setSecondColorFont(value);
        break;
      case 'background':
        setBackgroundColor(value);
        break;
    }
  };

  const resetColors = () => {
    setMainColorFont('#F597FF');
    setSecondColorFont('#00B2A9');
    setBackgroundColor('#FFF6ED');
  };

  if (!isVisible) {
    return (
      <div className={styles.visibleButton} onClick={() => setIsVisible(true)}>
        <span className={styles.buttonIcon}>🎨</span>
        <span className={styles.buttonText}>Farben</span>
      </div>
    );
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.colorPicker}>
        <div className={styles.header}><h3>🎨</h3>
          <p>Ich kann mich einfach nicht für eine Farbe entscheiden und lieb es rumzuspielen. Vielleicht hast du ja auch
            Freude dran. :-)</p>
        </div>

        <div className={styles.colorSection}>
          <label>
            <span>Hauptfarbe (Font):</span>
            <div className={styles.colorInput}>
              <input
                type="color"
                value={mainColorFont}
                onChange={(e) => handleColorChange('main', e.target.value)}
              />
              <input
                type="text"
                value={mainColorFont}
                onChange={(e) => handleColorChange('main', e.target.value)}
                placeholder="#F597FF"
              />
            </div>
          </label>
        </div>

        <div className={styles.colorSection}>
          <label>
            <span>Zweitfarbe (Font):</span>
            <div className={styles.colorInput}>
              <input
                type="color"
                value={secondColorFont}
                onChange={(e) => handleColorChange('second', e.target.value)}
              />
              <input
                type="text"
                value={secondColorFont}
                onChange={(e) => handleColorChange('second', e.target.value)}
                placeholder="#00B2A9"
              />
            </div>
          </label>
        </div>

        <div className={styles.colorSection}>
          <label>
            <span>Hintergrundfarbe:</span>
            <div className={styles.colorInput}>
              <input
                type="color"
                value={backgroundColor}
                onChange={(e) => handleColorChange('background', e.target.value)}
              />
              <input
                type="text"
                value={backgroundColor}
                onChange={(e) => handleColorChange('background', e.target.value)}
                placeholder="#FFF6ED"
              />
            </div>
          </label>
        </div>

        <div className={styles.actions}>
          <button className={styles.resetButton} onClick={resetColors}>
            Reset
          </button>
          <button className={styles.closeButton} onClick={() => setIsVisible(false)}>
            Schließen
          </button>
        </div>
      </div>
    </div>
  );
}; 
