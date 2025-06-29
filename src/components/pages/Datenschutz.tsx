import React from 'react';
import styles from './LegalPages.module.css';

interface DatenschutzProps {
  onBack: () => void;
}

export const Datenschutz: React.FC<DatenschutzProps> = ({ onBack }) => {
  return (
    <div className={styles.legalPage}>
      <button onClick={onBack} className={styles.backButton}>
        ← Zurück
      </button>

      <div className={styles.content}>
        <h1>Datenschutzerklärung</h1>
        <p>
          Datenschutzerklärung
        </p>
        <p>

          Dein Schutz und der verantwortungsvolle Umgang mit deinen personenbezogenen Daten sind mir wichtig. Ich erhebe
          und verarbeite deine Daten ausschließlich zur Organisation und Durchführung des Art Retreats.
        </p>
        <p>

          Welche Daten ich erhebe:
          - Name, Adresse, E-Mail, Telefonnummer (für Anmeldung und Kontakt)
          <br/>
          Zahlungsinformationen (zur Abwicklung der Buchung), werden von mir nicht gespeichert. Überweisung findet per Bank-Überweisung oder Paypal statt.
        </p>
        Ich verwende deine Daten nur, um deine Buchung abzuwickeln und mit dir bezüglich des Retreats zu
        kommunizieren. Eine Weitergabe an Dritte erfolgt nur, wenn es zur Durchführung notwendig ist (z.B.
        Zahlungsdienstleister).
        <p>
          Du hast das Recht, jederzeit Auskunft über deine gespeicherten Daten zu erhalten, sie berichtigen oder löschen
          zu lassen. Bei Fragen zum Datenschutz kannst du dich jederzeit an mich wenden (siehe Kontakt).
        </p>
      </div>
    </div>
  );
}; 
