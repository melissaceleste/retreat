import React, { useState } from 'react';
import { FlexHorizontal } from '../../ui/FlexContainer/flex-horizontal';
import { Tile } from '../../ui/Tile/tile';
import styles from './registration.module.css';

export const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
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
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>E-Mail</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="phone" className={styles.label}>Telefon</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message" className={styles.label}>Nachricht</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={styles.input}
            rows={4}
          />
        </div>

        <button type="submit" className={styles.button}>
          Anmelden
        </button>
      </form>
    </div>
  );
};
// on submit soll mir eine Email mit den Daten geschickt werden
// hierfür nochmal ein neues Email-Postfach anlegen
// Telefonat und wenn das passiert ist,schicke ich eine finale Email als "Vertrag" mit allen Infos und Kosten und AGBs usw und meinen Konto-Daten auf die sie überweisen müssen. Nochmal googlen ob man besser paypal oder konto nimmt. Steuer für mich und auch Schutz für den Käufer
