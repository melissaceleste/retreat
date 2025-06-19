import React from 'react';
import styles from './about-me.module.css';
import { Tile } from '../../ui/Tile/tile';

import meImage from '../../../pictures/me/me1 Kopie.JPEG';

export const AboutMe = () => {
  return (
    <div className={styles.component}>
      <Tile backgroundColor="var(--background-color)" color="var(--main-color-font)">
        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <img 
              src={meImage} 
              alt="Melissa" 
              className={styles.image}
            />
          </div>
          
          <div className={styles.textContainer}>
            <h2 className={styles.title}>Über mich</h2>
            <p className={styles.description}>
              Hallo! Ich bin Melissa und die Gründerin von Zusammenkunst. 
              Ich bin Hauptberuflich Softwareentwicklerin, engagiere mich ehrenamtlich für Feminismus und sammel einfach viel zu viele Hobbys. Ich liebe es allesmögliche auszuprobieren und bin Stammgast in Bastelgeschäften. Ich bin single und habe keine Lust allein zu reisen, daher habe ich beschlossen, meine Hobbys mit anderen zu teilen und gemeinsam zu verreisen.
            </p>
            <p className={styles.description}>
              Ich habe lange nach dem passenden Retreat für mich gesucht.. Yoga Retreats.. Surf Retreats.. Healing Retreats..  Aber nichts mit kreativen Bastel-, Mal-, Ton-Sessions.
              Dadurch kam mir die Idee, dies einfach selbst zu veranstalten.
            </p>
            <p className={styles.description}>
              Mein Ziel ist es, einen sicheren Raum zu schaffen, in dem Menschen 
              ihre Kreativität entdecken, sich entspannen und neue Freundschaften 
              knüpfen können. Detox auf einer kreativen Ebene.
            </p>
            <p className={styles.description}>
              Ich freue mich darauf, dich bei einem meiner Retreats
              kennenzulernen und gemeinsam unvergessliche Momente zu erleben!
            </p>
          </div>
        </div>
      </Tile>
    </div>
  );
}; 
