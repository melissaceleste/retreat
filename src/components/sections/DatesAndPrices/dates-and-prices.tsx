import React from 'react';
import styles from './dates-and-prices.module.css';
import { ImageSlideshow } from '../../ui/ImageSlideshow/ImageSlideshow';

import popup1 from '../../../pictures/popup/popup1.jpeg';
import popup2 from '../../../pictures/popup/popup2.jpeg';
import popup3 from '../../../pictures/popup/popup3.jpeg';
import popup4 from '../../../pictures/popup/popup4.jpeg';

import denmark1 from '../../../pictures/Bildschirmfoto 2026-06-29 um 13.10.55.png';
import denmark2 from '../../../pictures/Bildschirmfoto 2026-06-29 um 13.11.06.png';
import denmark3 from '../../../pictures/Bildschirmfoto 2026-06-29 um 13.11.22.png';
import denmark4 from '../../../pictures/Bildschirmfoto 2026-06-29 um 13.11.41.png';
import denmark5 from '../../../pictures/Bildschirmfoto 2026-06-29 um 13.11.48.png';
import denmark6 from '../../../pictures/Bildschirmfoto 2026-06-29 um 13.12.06.png';
import denmark7 from '../../../pictures/Bildschirmfoto 2026-06-29 um 13.12.34.png';

import frankreich1 from '../../../pictures/frankreich1.png';
import frankreich2 from '../../../pictures/frankreich2.png';
import frankreich4 from '../../../pictures/frankreich4.png';

import italien0 from '../../../pictures/italien0.png';
import italien1 from '../../../pictures/italien1.png';
import italien2 from '../../../pictures/italien2.png';
import italien3 from '../../../pictures/italien3.png';

import mallorca1 from '../../../pictures/living/Mallorca1.png';
import mallorca2 from '../../../pictures/living/Mallorca2.png';
import mallorca3 from '../../../pictures/living/Mallorca3.png';
import mallorca4 from '../../../pictures/living/Mallorca4.png';

const INSTAGRAM_URL = 'https://www.instagram.com/zusammenkunst_bymel/';

const popUpImages = [popup1, popup2, popup3, popup4];
const denmarkImages = [denmark1, denmark2, denmark3, denmark4, denmark5, denmark6, denmark7];
const franceImages = [frankreich1, frankreich2, frankreich4];
const italyImages = [italien0, italien1, italien2, italien3];
const mallorcaImages = [mallorca1, mallorca2, mallorca3, mallorca4];

const slideshowProps = { square: true, imageFit: 'contain' as const };

const DENMARK_AIRBNB =
  'https://www.airbnb.de/rooms/994651562208765005?check_in=2027-10-01&adults=8&source_impression_id=p3_1781777866_P3ozpHk3owJhceyr&guests=1&check_out=2027-10-08&modal=PHOTO_TOUR_SCROLLABLE';
const FRANCE_AIRBNB =
  'https://www.airbnb.de/rooms/1671121917709749263?adults=7&wishlist_item_id=11006431191617&check_in=2027-05-01&check_out=2027-05-06&source_impression_id=p3_1782071390_P3nzRbOufC0RJp3P&previous_page_section_name=1001&guests=7&modal=PHOTO_TOUR_SCROLLABLE';
const ITALY_AIRBNB =
  'https://www.airbnb.de/rooms/831176720968876567?adults=8&wishlist_item_id=11006369826004&source_impression_id=p3_1781783007_P37S5tZVK3Mx3it3&previous_page_section_name=1001&check_in=2027-06-01&guests=1&check_out=2027-06-07&modal=PHOTO_TOUR_SCROLLABLE';

export const DatesAndPrices = () => {
  return (
    <div className={styles.datesAndPrices}>
      <h2 className={styles.title}>Termine & Preise</h2>
      <p className={styles.intro}>
        Retreats 2027 — zur frühzeitigen Planung freue ich mich über deine Rückmeldung. Die Preise
        sind vorläufig und können je nach Teilnehmerzahl und Zimmerbelegung noch um ca. 50–100 €
        variieren. Enthalten sind Transfer vom Abholort, Unterkunft, Vollverpflegung, kreative
        Workshops inkl. Material sowie Ausflüge in der Umgebung.
      </p>

      <section className={styles.popUpSection}>
        <div className={`${styles.dateCard} ${styles.popUpCard}`}>
          <div className={`${styles.badge} ${styles.badgePopUp}`}>Pop-Up</div>
          <ImageSlideshow images={popUpImages} {...slideshowProps} />
          <h3 className={styles.dateTitle}>Pop-Up-Event Hamburg</h3>
          <div className={styles.dateInfo}>
            <p>26.Juli 2026</p>
            <p>1 Tag · kreativ zusammen sein</p>
          </div>
          <div className={styles.price}>46-48 Euro</div>
          <a href="#anmeldung" className={styles.button}>
            Jetzt anmelden
          </a>
        </div>
      </section>

      <section className={`${styles.retreatSection} ${styles.summerSection}`}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionEmoji} aria-hidden="true">
            ☀️
          </span>
          <div className={styles.sectionHeaderText}>
            <h3 className={styles.sectionTitle}>Sommer-Retreat 2027</h3>
            <p className={styles.sectionSubtitle}>
              <strong>Ihr entscheidet mit:</strong> Welches von drei Zielen wünscht ihr euch? Melde
              deine Präferenz an — die Anmeldungen bestimmen, wohin es geht.
            </p>
          </div>
        </div>

        <div className={styles.choiceGrid}>
          <div className={`${styles.dateCard} ${styles.choiceCard}`}>
            <span className={styles.choiceLabel}>Option 1 · 🇫🇷</span>
            <ImageSlideshow images={franceImages} {...slideshowProps} />
            <h3 className={styles.dateTitle}>Südfrankreich</h3>
            <p className={styles.choiceDestination}>Saint-Paul-de-Vence</p>
            <div className={styles.dateInfo}>
              <p>02.–07. Mai 2027</p>
              <p className={styles.dateHint}>Termin kann sich leicht verschieben</p>
              <p>5 Tage / 4 Nächte</p>
              <p>Abholung: Nizza, Antibes, Cannes</p>
            </div>
            <div className={styles.price}>ca. 880 € pro Person</div>
            <a
              href={FRANCE_AIRBNB}
              className={styles.externalLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Unterkunft ansehen
            </a>
            <a href="#anmeldung" className={styles.button}>
              Stimme für Frankreich
            </a>
          </div>

          <div className={`${styles.dateCard} ${styles.choiceCard}`}>
            <span className={styles.choiceLabel}>Option 2 · 🇮🇹</span>
            <ImageSlideshow images={italyImages} {...slideshowProps} />
            <h3 className={styles.dateTitle}>Norditalien</h3>
            <p className={styles.choiceDestination}>Piemont</p>
            <div className={styles.dateInfo}>
              <p>30. Mai – 04. Juni 2027</p>
              <p className={styles.dateHint}>Termin kann sich leicht verschieben</p>
              <p>5 Tage / 4 Nächte</p>
              <p>Abholung: Genua, Turin, Asti</p>
            </div>
            <div className={styles.price}>ca. 850 € pro Person</div>
            <a
              href={ITALY_AIRBNB}
              className={styles.externalLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Unterkunft ansehen
            </a>
            <a href="#anmeldung" className={styles.button}>
              Stimme für Italien
            </a>
          </div>

          <div className={`${styles.dateCard} ${styles.choiceCard}`}>
            <span className={styles.choiceLabel}>Option 3 · 🏝️</span>
            <ImageSlideshow images={mallorcaImages} {...slideshowProps} />
            <h3 className={styles.dateTitle}>Mallorca</h3>
            <p className={styles.choiceDestination}>Nochmal zurück?</p>
            <div className={styles.dateInfo}>
              <p>Beliebte Unterkunft von letztem Jahr</p>
              <p>Termin nach Abstimmung</p>
            </div>
            <div className={styles.price}>ca. 850 € pro Person</div>
            <p className={styles.dateNote}>
              Eindrücke auf{' '}
              <a
                href={INSTAGRAM_URL}
                className={styles.inlineLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </p>
            <a href="#anmeldung" className={styles.button}>
              Stimme für Mallorca
            </a>
          </div>
        </div>
      </section>

      <section className={`${styles.retreatSection} ${styles.autumnSection}`}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionEmoji} aria-hidden="true">
            🍂
          </span>
          <div className={styles.sectionHeaderText}>
            <h3 className={styles.sectionTitle}>Herbst-Retreat 2027</h3>
          </div>
        </div>

        <div className={styles.singleCardWrap}>
          <div className={`${styles.dateCard} ${styles.autumnCard}`}>
            <div className={`${styles.badge} ${styles.badgeAutumn}`}>Oktober 2027</div>
            <ImageSlideshow images={denmarkImages} {...slideshowProps} />
            <h3 className={styles.dateTitle}>Dänemark</h3>
            <div className={styles.dateInfo}>
              <p>02.–08. Oktober 2027</p>
              <p className={styles.dateHint}>Termin kann sich um 1–2 Wochen verschieben</p>
              <p>6 Tage / 5 Nächte · 7–8 Plätze</p>
              <p>Abholung: Rødby, Gedser, Nykøbing Falster</p>
            </div>
            <div className={styles.price}>
              <p>ca. 880 € Einzelzimmer</p>
              <p>ca. 520 € pro Person im Doppelzimmer</p>
            </div>
            <p className={styles.dateNote}>
              Für die Unterkunftsbuchung brauche ich möglichst zeitnah verbindliche
              Interessenbekundungen.
            </p>
            <a
              href={DENMARK_AIRBNB}
              className={styles.externalLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Unterkunft ansehen
            </a>
            <a href="#anmeldung" className={styles.button}>
              Interesse melden
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
