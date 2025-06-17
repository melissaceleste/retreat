import React, { useState } from 'react';
import styles from './faq.module.css';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "Was ist im Preis inbegriffen?",
    answer: "Der Preis beinhaltet Unterkunft, Vollverpflegung, alle Workshops und Materialien, sowie den Transfer vom/zum Flughafen."
  },
  {
    question: "Muss ich Vorkenntnisse haben?",
    answer: "Nein, alle Workshops sind für Anfänger:innen geeignet. Wir passen das Programm an die Bedürfnisse der Gruppe an."
  },
  {
    question: "Was muss ich mitbringen?",
    answer: "Bequeme Kleidung, Badebekleidung, Sonnenschutz und gute Laune. Alle Materialien für die Workshops werden gestellt."
  },
  {
    question: "Wie komme ich zum Retreat?",
    answer: "Wir organisieren den Transfer vom nächstgelegenen Flughafen. Bitte teile uns deine Ankunftszeit mit."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.faq}>
      <h2 className={styles.title}>Häufig gestellte Fragen</h2>
      <div className={styles.faqList}>
        {faqItems.map((item, index) => (
          <div key={index} className={styles.faqItem}>
            <div 
              className={styles.question}
              onClick={() => toggleFAQ(index)}
            >
              {item.question}
              <span className={`${styles.icon} ${openIndex === index ? styles.iconOpen : ''}`}>
                ▼
              </span>
            </div>
            {openIndex === index && (
              <div className={styles.answer}>
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
