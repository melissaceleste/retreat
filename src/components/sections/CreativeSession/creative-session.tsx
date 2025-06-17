import React from 'react';
import styles from './creative-session.module.css';

export const CreativeSession = () => {
  return (
    <div className={styles.kreativeSession}>
      <div className={styles.title}>Kreative Sessions</div>
      <div>
        Hier werden wir kreativ und wollen ordentlich dyi-en und basteln. :-)
        Aktivitäten könnten sein:
        <ul className={styles.ulKreativeSession}>
          <li className={styles.list}>Malen mit Acryl-Farbe</li>
          <li className={styles.list}>Schmuck basteln mit Perlen</li>
          <li className={styles.list}>Schmuck-Anhänger oder anderes basteln aus Fimo</li>
          <li className={styles.list}>Makramee</li>
          <li className={styles.list}>Häkeln/Stricken</li>
          <li className={styles.list}>Henna-Tattoos</li>
          <li className={styles.list}>Ton-Stuff</li>
          <li className={styles.list}>Journaling/ Scratch-Booking</li>
        </ul>
        Alle benötigten Materialien stehen parat. <br/>
        Ich besorge alles und freue euch einen kleinen Einblick in die
        Aktivitäten zu geben.
        Ich bin selbst kein Profi in jedem Thema. Daher freue ich mich total, wenn wir einfach
        gemeinsam
        unsere Ideen teilen und tolle Dinge zaubern :-)
      </div>
    </div>
  );
};
