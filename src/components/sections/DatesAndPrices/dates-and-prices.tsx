import React from 'react';
import styles from './dates-and-prices.module.css';
import { ImageSlideshow } from '../../ui/ImageSlideshow/ImageSlideshow';

import popup1 from '../../../pictures/popup/popup1.jpeg';
import popup2 from '../../../pictures/popup/popup2.jpeg';
import popup3 from '../../../pictures/popup/popup3.jpeg';
import popup4 from '../../../pictures/popup/popup4.jpeg';

import denmark0 from '../../../pictures/dänemark0.png';
import denmark1 from '../../../pictures/dänemark1.png';
import denmark2 from '../../../pictures/dänemark2.png';
import denmark3 from '../../../pictures/dänemark3.png';

import frankreich1 from '../../../pictures/frankreich1.png';
import frankreich2 from '../../../pictures/frankreich2.png';
import frankreich4 from '../../../pictures/frankreich4.png';

const popUpImages = [popup1, popup2, popup3, popup4];
const denmarkImages = [denmark0, denmark1, denmark2, denmark3];
const franceImages = [frankreich1, frankreich2, frankreich4];

const slideshowProps = { square: true, imageFit: 'contain' as const };

const DENMARK_ACCOMMODATION =
  'https://www.novasol.de/ferienhaeuser/hasmark-strand-g51480?adult=7&child=0&pets=0&range=3&nights=6&accommodationType=novasol_cottages&placesId=5&regionName=D%C3%A4nemark&destinationCategory=208&start=04-10-2026&destinationId=208&id=5&index=search&accommodationTypes=&features=ent_beachnearby%2Cent_swimmingpool%2Cent_sauna%2Cent_hottubspabathnov&siteFeatures=&page=1&sort=recommended&salesMarket=280&displayMode=LIST&bedrooms=sixplusbed&bathrooms=threebath&grade=gradefour';
const FRANCE_AIRBNB =
  'https://www.airbnb.de/rooms/1671121917709749263?adults=7&wishlist_item_id=11006431191617&check_in=2027-05-01&check_out=2027-05-06&source_impression_id=p3_1782071390_P3nzRbOufC0RJp3P&previous_page_section_name=1001&guests=7&modal=PHOTO_TOUR_SCROLLABLE';

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

      <section className={styles.retreatsWrapper}>
        <div className={styles.retreatsGrid}>
          <div className={`${styles.retreatSection} ${styles.summerSection}`}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionEmoji} aria-hidden="true">
                ☀️
              </span>
              <div className={styles.sectionHeaderText}>
                <h3 className={styles.sectionTitle}>Sommer-Retreat 2027</h3>
              </div>
            </div>

            <div className={`${styles.dateCard} ${styles.autumnCard}`}>
              <ImageSlideshow images={franceImages} {...slideshowProps} />
              <h3 className={styles.dateTitle}>Südfrankreich</h3>
              <div className={styles.dateInfo}>
                <p>Saint-Paul-de-Vence</p>
                <p>17.–21. Mai 2027 | 4 Nächte</p>
                <p>Abholung: Nizza, Antibes, Cannes</p>
              </div>
              <div className={styles.price}>ca. 780 € pro Person</div>
              <a
                href={FRANCE_AIRBNB}
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

          <div className={`${styles.retreatSection} ${styles.autumnSection}`}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionEmoji} aria-hidden="true">
                🍂
              </span>
              <div className={styles.sectionHeaderText}>
                <h3 className={styles.sectionTitle}>Herbst-Retreat 2027</h3>
              </div>
            </div>

            <div className={`${styles.dateCard} ${styles.autumnCard}`}>
              <ImageSlideshow images={denmarkImages} {...slideshowProps} />
              <h3 className={styles.dateTitle}>Dänemark</h3>
              <div className={styles.dateInfo}>
                <p>02.–07. Oktober 2027 | 5 Nächte</p>
                <p>Abholung: Odense</p>
              </div>
              <div className={styles.price}>
                <p>ca. 670 € Einzelzimmer</p>
                <p>ca. 470 € pro Person im Doppelzimmer</p>
              </div>
              <a
                href={DENMARK_ACCOMMODATION}
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
        </div>
      </section>
    </div>
  );
};
