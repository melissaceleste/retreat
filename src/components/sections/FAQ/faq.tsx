import { Tile } from '../../ui/Tile/tile';
import './faq.css';

export const FAQ = () => {
  return (
    <div className="faq">
      <Tile backgroundColor="var(--color-yellow)" color="var(--color-blue)">
        <div>
          <div className="title">Häufig gestellte Fragen</div>
          <div className="faq-item">
            <div className="question">Was muss ich mitbringen?</div>
            <div className="answer">
              • Bequeme Kleidung für die Workshops
              <br />
              • Badekleidung für den Pool
              <br />
              • Sonnenschutz
              <br />
              • Persönliche Hygieneartikel
              <br />
              • Gute Laune und Neugierde
            </div>
          </div>
          <div className="faq-item">
            <div className="question">Wie komme ich zum Retreat?</div>
            <div className="answer">
              Wir organisieren den Transfer vom/zum Flughafen. Bitte teile uns deine Ankunftszeit mit, damit wir dich pünktlich abholen können.
            </div>
          </div>
          <div className="faq-item">
            <div className="question">Gibt es WLAN?</div>
            <div className="answer">
              Ja, in allen Unterkünften ist WLAN verfügbar. Wir empfehlen jedoch, die Zeit im Retreat zu nutzen, um digital zu entschleunigen.
            </div>
          </div>
          <div className="faq-item">
            <div className="question">Kann ich auch alleine teilnehmen?</div>
            <div className="answer">
              Absolut! Viele unserer Teilnehmer:innen kommen alleine und finden schnell Anschluss in der Gruppe. Die Workshops und gemeinsamen Aktivitäten bieten viele Möglichkeiten zum Kennenlernen.
            </div>
          </div>
        </div>
      </Tile>
    </div>
  );
};
// Fragen nur anzeigen und wenn man drauf klickt, schieben sich die Antworten auf
