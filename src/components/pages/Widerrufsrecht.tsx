import React from 'react';
import styles from './LegalPages.module.css';

interface WiderrufsrechtProps {
  onBack: () => void;
}

export const Widerrufsrecht: React.FC<WiderrufsrechtProps> = ({ onBack }) => {
  return (
    <div className={styles.legalPage}>
      <button onClick={onBack} className={styles.backButton}>
        ← Zurück
      </button>

      <div className={styles.content}>
        <h1>Widerrufsrecht</h1>
        <p>
          Du kannst deinen Vertrag innerhalb von 14 Tagen ohne Angabe von Gründen widerrufen. Die Frist beginnt ab dem
          Tag, an dem wir den Vertrag abschließen.
        </p>
        <p>
          Um dein Widerrufsrecht auszuüben, schreibe mir einfach eine eindeutige Erklärung (z.B. E-Mail), dass du den
          Vertrag widerrufen möchtest (Kontakt siehe oben).
        </p>
        <p>
          Folgen des Widerrufs:
          Wenn du fristgerecht widerrufst, erstatte ich dir alle Zahlungen zurück, sofern die Leistung noch nicht begonnen hat.
          Sollten sich nicht genügend Teilnehmer:innen anmelden oder zu viele stornieren, versuche ich dich rechtzeitig zu informieren und du erhältst dein Geld zurück.
          Leider kann ich dies nur bis zu der Stornierungsfrist der Unterkunft ermöglichen, andernfalls kann nur ein Teil der Kosten erstattet werden. Den Stornierungszeitpunkt der Unterkunft teile ich dir in der E-Mail mit, die du nach der Anmeldung erhältst.
        </p>
        <p>
          **Wichtig:**
          Wenn das Retreat vor Ablauf der Widerrufsfrist startet und du ausdrücklich zustimmst, endet dein
          Widerrufsrecht mit Beginn der Veranstaltung.
        </p>
      </div>
    </div>
  );
}; 
