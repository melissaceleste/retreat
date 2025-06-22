import React from 'react';
import styles from './Footer.module.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h4>Kontakt</h4>
          <p>
            <a href="mailto:melissa@zusammenkunst.de" className={styles.emailLink}>
              melissa@zusammenkunst.de
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
            <li><a href="#" className={styles.footerLink}>Impressum</a></li>
            <li><a href="#" className={styles.footerLink}>Datenschutz</a></li>
            <li><a href="#" className={styles.footerLink}>AGB</a></li>
            <li><a href="#" className={styles.footerLink}>Widerrufsrecht</a></li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h4>Social Media</h4>
          <div className={styles.socialLinks}>
            <a href="#" className={styles.socialLink} aria-label="Instagram">
              📸 Instagram
            </a>
            <a href="#" className={styles.socialLink} aria-label="Facebook">
              📘 Facebook
            </a>
            <a href="#" className={styles.socialLink} aria-label="TikTok">
              🎵 TikTok
            </a>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>&copy; {currentYear} Zusammenkunst. Alle Rechte vorbehalten.</p>
        <p>Entwickelt mit ❤️ für kreative Seelen</p>
      </div>
    </footer>
  );
}; 