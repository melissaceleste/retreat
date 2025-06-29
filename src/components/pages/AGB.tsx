import React from 'react';
import styles from './LegalPages.module.css';

interface AGBProps {
  onBack: () => void;
}

export const AGB: React.FC<AGBProps> = ({ onBack }) => {
  return (
    <div className={styles.legalPage}>
      <button onClick={onBack} className={styles.backButton}>
        ← Zurück
      </button>

      <div className={styles.content}>
        <h1>Allgemeine Geschäftsbedingungen</h1>
        <p>
          1. Was du bekommst <br/>
          Das Art Retreat beinhaltet eine gemeinsame Reise mit künstlerischen Workshops. Alle Details zu Leistungen,
          Unterkunft und Programm, kannst du der Website entnehmen.
        </p>
        <p>
          2. Buchung und Zahlung <br />
          Nach der Anmeldung hier auf der Website erhälst du eine E-Mail mit den Zahlungsinformationen.
          Deine Buchung ist verbindlich, sobald du den Betrag bis zum vereinbarten Termin bezahlst hast.
        </p>
        <p>
          3. Rücktritt und Stornierung <br />
          Du kannst bis 14 Tage vor Beginn des Retreats kostenfrei zurücktreten. Bei späterem Rücktritt berechne ich 50 %
          des Reisepreises. Wenn du nicht erscheinst und dich nicht abmeldest, wird der volle Preis fällig. <br/>
          Sollten sich nicht genügend Teilnehmer:innen anmelden oder zu viele stornieren, versuche ich dich rechtzeitig zu informieren und du erhältst dein Geld zurück.
          Leider kann ich dies nur bis zu der Stornierungsfrist der Unterkunft ermöglichen, andernfalls kann nur ein Teil der Kosten erstattet werden. Den Stornierungszeitpunkt der Unterkunft teile ich dir in der E-Mail mit, die du nach der Anmeldung erhältst.
        </p>
        <p>
          4. Haftung <br />
          Die Teilnahme erfolgt auf eigene Verantwortung. Für Schäden oder Verletzungen übernehme ich keine Haftung,
          außer
          bei grober Fahrlässigkeit oder Vorsatz.
        </p>
        <p>
          5. Änderungen <br />
          Kleine Änderungen im Programm behalte ich mir vor, z.B. bei Wetter oder Verfügbarkeiten.
        </p>
        <p>
          6. Sonstiges <br />
          Es gilt deutsches Recht.
        </p>
      </div>
    </div>
  );
}; 
