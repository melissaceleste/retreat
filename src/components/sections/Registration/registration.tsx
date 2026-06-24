import React, { useState } from 'react';
import styles from './registration.module.css';
import emailjs from 'emailjs-com';

const NEWSLETTER_OPTION = 'Nur für Newsletter anmelden';

export const Registration = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [emailWasSent, setEmailWasSent] = useState<null | boolean>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    time: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setEmailWasSent(null);

    const selectedOption = formData.time || 'Keine Auswahl';

    const payload = {
      ...formData,
      time: selectedOption,
      // Wird in EmailJS als {{subject}} im Betreff der Mail verwendet
      subject: selectedOption,
      newsletter_only: formData.time === NEWSLETTER_OPTION ? 'Ja' : 'Nein',
    };

    emailjs
      .send(
        'service_epsz3rv', // userId
        'template_f1xphrl', // template ID
        payload,
        'kFNzjMWkTCmvNtbTz', //public Key
      )
      .then(
        () => {
          setIsLoading(false);
          setEmailWasSent(true);
          setFormData({
            name: '',
            email: '',
            phone: '',
            time: '',
            message: '',
          });
        },
        () => {
          setIsLoading(false);
          setEmailWasSent(false);
        },
      );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className={styles.registration} id="anmeldung">
      <h2 className={styles.title}>Anmeldung</h2>
      <div className={styles.description}>
        Hört sich gut an? Dann melde dich hier (unverbindlich) an. Du kannst dich hier auch nur für
        den Newsletter eintragen — wähle dafür im Formular „Nur Newsletter anmelden“.
        <br />
        <br />
        Für ein Retreat ist es mir besonders wichtig, dass alle Teilnehmer:innen eine harmonische
        und spaßige Zeit gemeinsam haben. Immerhin ist es Urlaub für uns alle! :-) Daher möchte ich
        mit jedem/jeder einmal vorab telefonieren/facetimen oder ein paar Sprachnachrichten hin und
        her schicken, um zu schauen, ob wir die selben Vorstellungen von dieser Reise haben.
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
          <select
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className={styles.input}
          >
            <option value="">Bitte auswählen</option>
            <option value="Anmeldung Pop-up-Event in Hamburg">
              Anmeldung Pop-Up-Event in Hamburg
            </option>
            <option value="Anmeldung Newsletter">Anmeldung für den Newsletter</option>
          </select>
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

        <button type="submit" className={styles.button} disabled={isLoading}>
          Let's go!
        </button>
        {isLoading && (
          <div className={styles.registrationMessage}>
            E-Mail wird gesendet. Kleinen Moment<span className={styles.dots}>...</span>
          </div>
        )}
        {emailWasSent === true && (
          <div className={styles.registrationMessage}>
            Erfolgreich angemeldet!🎉 <br />
            Wie schön! Ich freu mich. <br /> Du erhälst in Kürze eine Nachricht von mir. (Kann einen
            Tag dauern)
          </div>
        )}
        {emailWasSent === false && (
          <div className={styles.error}>
            Hmm. Hier ist etwas schief gelaufen. Bitte melde dich direkt per E-Mail an mich:{' '}
            <a
              href="mailto:celeste.gries@proton.me
"
            >
              celeste.gries@proton.me
            </a>
          </div>
        )}
      </form>
    </div>
  );
};

// Telefonat und wenn das passiert ist,schicke ich eine finale Email als "Vertrag" mit allen Infos und Kosten und AGBs usw und meinen Konto-Daten auf die sie überweisen müssen. Nochmal googlen ob man besser paypal oder konto nimmt. Steuer für mich und auch Schutz für den Käufer
