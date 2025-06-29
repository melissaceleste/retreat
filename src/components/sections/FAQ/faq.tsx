import React, { useState } from 'react';
import styles from './faq.module.css';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "Was passiert, wenn es nicht genügend Anmeldungen gibt?",
    answer: "Sollten sich nicht genügend Teilnehmer:innen anmelden oder zu viele stornieren, versuche ich dich rechtzeitig zu informieren und du erhältst dein Geld zurück. Leider kann ich dies nur bis zu der Stornierungsfrist der Unterkunft ermöglichen, andernfalls kann nur ein Teil der Kosten erstattet werden."
  },
  {
    question: "Was ist im Preis inbegriffen?",
    answer: "Der Preis beinhaltet Unterkunft, Vollverpflegung, alle Bastel-Sessions und Materialien, sowie den Transfer vom/zum Flughafen."
  },
  {
    question: "Muss ich Vorkenntnisse haben?",
    answer: "Nein, alle Bastel-Sessions sind für Anfänger:innen geeignet. Es geht darum gemeinsam kreativ zu sein und Spaß zu haben."
  },
  {
    question: "Was muss ich mitbringen?",
    answer: "Bequeme Kleidung, Badebekleidung, Sonnenschutz und gute Laune. Alle Materialien für die Bastel-Sessions werden gestellt."
  },
  {
    question: "Wie komme ich zum Retreat?",
    answer: "Ich organisieren den Transfer vom nächstgelegenen Flughafen. Bitte teile mir deine Ankunftszeit rechtzeitig mit. Den Flug selbst musst du buchen. Ich unterstütze gerne bei der Planung."
  },
  {
    question: "Gibt es eine Altersbeschränkung?",
    answer: "Das Retreat richtet sich an Erwachsene. Jugendliche ab 16 Jahren sind willkommen, wenn sie in Begleitung einer Erwachsenen Person sind."
  },
  {
    question: "Wer sind die anderen Teilnehmer:innen?",
    answer: "Dieses Retreat ist für alle, die Lust haben auf Austausch, Kreativität und neue Connections. Die Gruppe wird bewusst bunt & offen gehalten – damit echte Begegnung möglich wird. Mir ist wichtig, einen safen & wertschätzenden Space zu schaffen. Deshalb möchte ich vorab ein kurzes Kennenlerngespräch mit dir führen. Sollte der Wunsch bestehen vorab schon in Kontakt mit den anderen Teilnehmer:innen zu treten, geb mir bescheid. Wenn du willst, connecte ich dich auch schon vorher mit den anderen Teilnehmer:innen über eine Whatsapp/Signal Gruppe."
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
