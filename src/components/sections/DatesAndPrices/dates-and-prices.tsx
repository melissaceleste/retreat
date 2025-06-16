import { FlexHorizontal } from '../../ui/FlexContainer/flex-horizontal';
import { Tile } from '../../ui/Tile/tile';
import './dates-and-prices.css';

export const DatesAndPrices = () => {
  return (
    <div className="termineUndKosten">
      <FlexHorizontal>
        <Tile backgroundColor="var(--color-yellow)" color="var(--color-blue)">
          <div className="left">
            <p>
              Termine & Kosten
              <br />
              Hier findest du die aktuellen Termine und Preise für unsere Retreats:
              <br /><br />
              • 01.06.2024 - 08.06.2024
              <br />
              • 15.06.2024 - 22.06.2024
              <br />
              • 01.07.2024 - 08.07.2024
              <br /><br />
              Preis pro Person: 1.299€
              <br />
              Inklusive:
              <br />
              - 7 Übernachtungen
              <br />
              - Vollverpflegung
              <br />
              - Alle Workshops
              <br />
              - Transfer vom/zum Flughafen
            </p>
          </div>
        </Tile>
        <Tile backgroundColor="var(--color-dark-green)" color="var(--color-purple)">
          <div className="right">
            <p>
              Kontakt & Anmeldung
              <br />
              Für weitere Informationen oder zur Anmeldung:
              <br /><br />
              E-Mail: info@retreat.com
              <br />
              Telefon: +49 123 456789
              <br /><br />
              Wir freuen uns auf deine Nachricht!
            </p>
          </div>
        </Tile>
      </FlexHorizontal>
    </div>
  );
};
