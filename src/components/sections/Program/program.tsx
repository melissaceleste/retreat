import React, { useState } from 'react';
import { Tile } from '../../ui/Tile/tile';
import { FlexHorizontal } from '../../ui/FlexContainer/flex-horizontal';
import { CreativeSession } from '../CreativeSession/creative-session';
import styles from './program.module.css';
import planKreta from '../../../pictures/planKreta.png';

export const Program = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) setShowModal(false);
  };

  return (
    <FlexHorizontal>
      <Tile backgroundColor="var(--background-color)" color="var(--main-color-font)">
        <div className={styles.program}>
          <h1 className={styles.title}>Programm</h1>
          <p>
            Das Programm ist anpassbar auf die Wünsche der Teilnehmer:innen. Beispiel:
            <br />
            <b className={styles.dayTitle}>TAG 1</b>
            <ul>
              <li>Ankunft am Flughafen (Flug selbst organisieren, gerne helfe ich auch bei der Buchung)</li>
              <li>Transfer vom Flughafen zur Unterkunft</li>
              <li>Get Together - alle lernen sich beim ersten kalten Getränk oder Fooood (je nach Ankunft) kennen.</li>
            </ul>
            <b className={styles.dayTitle}>TAG 2 - 4</b>
            <br />
            09:00 - 10:00 Frühstück
            <br />
            10:00 - 13:00 Kreative Session
            <br />
            13:00 - 14:00 Mittag
            <br />
            14:00 - 18:00 Kreative Session/ freie Gestaltung
            <br />
            ab 18:00 gemeinsames Kochen, Essen & Ausklingen des Abends beim Sonnenuntergang :-)
            <br />
            <b className={styles.dayTitle}>TAG 5</b>
            <br />
            Abschiedsfrühstück und transfer zum Flughafen :-)
          </p>
          {/* Bildvorschau */}
          <div style={{ marginTop: 14, textAlign: 'left', display: 'flex', gap: "8px"}}>
            <span style={{ fontSize: 12, color: 'var(--second-color-font)' }}>Schau gern den Plan vom <br/> letzten Retreat auf Kreta an:</span>
            <img
              src={planKreta}
              alt="Plan Kreta"
              style={{ width: 60, height: 'auto', marginTop: 8, cursor: 'pointer', borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.12)' }}
              onClick={handleOpenModal}
            />
          </div>
          {/* Modal Overlay */}
          {showModal && (
            <div
              onClick={handleCloseModal}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                background: 'rgba(0,0,0,0.7)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1000,
              }}
            >
              <div style={{ position: 'relative', maxWidth: '90vw', maxHeight: '90vh' }}>
                <img
                  src={planKreta}
                  alt="Plan Kreta groß"
                  style={{
                    maxWidth: '90vw',
                    maxHeight: '80vh',
                    borderRadius: 12,
                    boxShadow: '0 4px 24px rgba(0,0,0,0.25)',
                  }}
                />
                <div
                  onClick={() => setShowModal(false)}
                  style={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                    width: 32,
                    height: 32,
                    cursor: 'pointer',
                    fontSize: 30,
                    color: '#333',
                  }}
                  aria-label="Schließen"
                >
                  ×
                </div>
              </div>
            </div>
          )}
        </div>
      </Tile>
      <Tile backgroundColor="var(--second-color-font)"  color="var(--background-color)">
          <CreativeSession />
      </Tile>
    </FlexHorizontal>
  );
};
