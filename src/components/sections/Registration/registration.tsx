import React, { useState } from 'react';
import { FlexHorizontal } from '../../ui/FlexContainer/flex-horizontal';
import { Tile } from '../../ui/Tile/tile';
import styles from './registration.module.css';

export const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    time: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Hier kommt später die Logik für das Absenden des Formulars
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className={styles.registration} id="anmeldung">
      <h2 className={styles.title}>Anmeldung</h2>
      <div className={styles.description}>
        Hört sich gut an? Dann melde dich hier (unverbindlich) einmal bei mir an.
        . Mir ist es besonders wichtig, dass alle Teilnehmer:innen eine harmonische und spaßige Zeit gemeinsam haben.
        Immerhin ist es Urlaub für uns alle! :-) Daher möchte ich mit jedem/jeder einmal vorab telefonieren/facetimen
        oder ein paar Sprachnachrichten hin und her schicken, um zu schauen ob wir die selben Vorstellungen von dieser
        Reise haben.
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={styles.input}
            required
            placeholder="Name"
          />
        </div>

        <div className={styles.formGroup}>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={styles.input}
            required
            placeholder="E-Mail-Adresse"
          />
        </div>

        <div className={styles.formGroup}>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={styles.input}
            placeholder="Telefonnummer"
          />
        </div>

        <div className={styles.formGroup}>
          <input
            type="text"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className={styles.input}
            placeholder="Gewünschter Zeitraum"
          />
        </div>

        <div className={styles.formGroup}>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={styles.input}
            rows={4}
            placeholder="(optional) Anmerkungen: Erreichbarkeit, vorab Fragen, oder oder oder..."
          />
        </div>

        <button type="submit" className={styles.button}>
          Let's go!
        </button>
      </form>
    </div>
  );
};
// on submit soll mir eine Email mit den Daten geschickt werden
// hierfür nochmal ein neues Email-Postfach anlegen
// Telefonat und wenn das passiert ist,schicke ich eine finale Email als "Vertrag" mit allen Infos und Kosten und AGBs usw und meinen Konto-Daten auf die sie überweisen müssen. Nochmal googlen ob man besser paypal oder konto nimmt. Steuer für mich und auch Schutz für den Käufer
