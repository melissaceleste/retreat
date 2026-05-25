import React from 'react';
import styles from './Footer.module.css';

interface FooterProps {
  onNavigate?: (page: 'main' | 'impressum' | 'datenschutz' | 'agb' | 'widerrufsrecht') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const handleNavigation = (page: 'main' | 'impressum' | 'datenschutz' | 'agb' | 'widerrufsrecht') => {
    if (onNavigate) {
      onNavigate(page);
    }
  };

  return (
    <footer className={styles.component}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h4>Kontakt</h4>
          <p>
            <a href="mailto:info@zusammenkunst.de" className={styles.emailLink}>
              kontakt@zusammenkunst.de
            </a>
          </p>
          <p>Fragen? Schreib mir gerne eine Email!</p>
        </div>

        <div className={styles.footerSection}>
          <h4>Zusammenkunst</h4>
          <p>Kreative Retreats für alle, die gerne basteln, malen und neue Menschen kennenlernen möchten.</p>
          <p>Gemeinsam kreativ sein, gemeinsam verreisen.</p>
        </div>

        <div className={styles.footerSection}>
          <h4>Rechtliches</h4>
          <ul className={styles.footerList}>
            <li><button onClick={() => handleNavigation('impressum')} className={styles.footerLink}>Impressum</button></li>
            <li><button onClick={() => handleNavigation('datenschutz')} className={styles.footerLink}>Datenschutz</button></li>
            <li><button onClick={() => handleNavigation('agb')} className={styles.footerLink}>AGB</button></li>
            <li><button onClick={() => handleNavigation('widerrufsrecht')} className={styles.footerLink}>Widerrufsrecht</button></li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h4>Social Media</h4>
          <p>Da ich eigentlich versuche weniger auf Social Media zu sein, streube ich mich grad noch ein wenig dazu <b>zusammenkunst</b> auf Insta und co. zu bringen. Vielleicht verbreitet es ich ja auch ohne :P</p>
          <div className={styles.socialLinks}>
            <a
              href="https://www.instagram.com/zusammenkunst_bymel/"
              className={styles.socialLink}
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              📸 Instagram
            </a>
            <a href="#" className={styles.socialLink} aria-label="TikTok">
              🎵 TikTok (folgt - vielleicht)
            </a>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>&copy; {currentYear} Zusammenkunst. Alle Rechte vorbehalten.</p>
        <p>Entwickelt von mir ت️</p>
      </div>
    </footer>
  );
}; 
