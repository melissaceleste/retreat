import React, { useState } from 'react';
import styles from './registration.module.css';
import emailjs from 'emailjs-com';

export const Registration = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [emailWasSent, setEmailWasSent] = useState<null | boolean>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    time: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setEmailWasSent(null);

    emailjs.send(
      'service_epsz3rv',      // userId
      'template_f1xphrl',     // template ID
      formData,               // Das Objekt mit den Formulardaten
      'kFNzjMWkTCmvNtbTz'          //public Key
    )
    .then(() => {
        setIsLoading(false);
        setEmailWasSent(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          time: '',
          message: ''
        });
    }, () => {
        setIsLoading(false);
        setEmailWasSent(false);
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
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
        Hört sich gut an? Dann melde dich hier (unverbindlich) an.
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

        <div className={styles.formGroup} style={{ position: 'relative' }}>
          {/* Warteliste Banner */}
          <div style={{
            position: 'absolute',
            top: '-10px',
            right: '10px',
            background: '#ff416c, -webkit-linear-gradient(to right, #ff416c, #ff4b2b), linear-gradient(to right, #ff416c, #ff4b2b)',
            color: 'black',
            padding: '6px 12px',
            borderRadius: '15px',
            fontSize: '12px',
            fontWeight: 'bold',
            fontFamily: 'var(--jungle)',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            boxShadow: '0 3px 8px rgba(255, 65, 108, 0.3)',
            zIndex: 10,
            transform: 'rotate(-3deg)',
            border: '2px solid black'
          }}>
            pack mich auf die Warteliste
          </div>
          <select
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className={styles.input}
            required
            disabled
            style={{ 
              opacity: '0.6', 
              filter: 'grayscale(0.3)',
              cursor: 'not-allowed'
            }}
          >
            <option value="">Gewünschtes Retreat auswählen</option>
            <option value="Bali Retreat September 2026">Bali Retreat September 2026 (Folgt bald)</option>
            <option value="Mallorca Retreat Mai 2026">Mallorca Retreat Mai 2026 (Ausgebucht)</option>
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
        {isLoading && <div className={styles.registrationMessage}>E-Mail wird gesendet. Kleinen Moment<span className={styles.dots}>...</span></div>}
        {emailWasSent === true && <div className={styles.registrationMessage}>Erfolgreich angemeldet!🎉 <br />
          Wie schön! Ich freu mich. <br /> Du erhälst in Kürze eine Nachricht von mir. (Kann einen Tag dauern)</div>}
        {emailWasSent === false && (
          <div className={styles.error}>
            Hmm. Hier ist etwas schief gelaufen. Bitte melde dich direkt per E-Mail an mich: <a href="mailto:celeste.gries@proton.me
">celeste.gries@proton.me
          </a>
          </div>
        )}
      </form>
    </div>
  );
};

// Telefonat und wenn das passiert ist,schicke ich eine finale Email als "Vertrag" mit allen Infos und Kosten und AGBs usw und meinen Konto-Daten auf die sie überweisen müssen. Nochmal googlen ob man besser paypal oder konto nimmt. Steuer für mich und auch Schutz für den Käufer
