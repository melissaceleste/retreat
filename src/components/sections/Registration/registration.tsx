import { FlexHorizontal } from '../../ui/FlexContainer/flex-horizontal';
import { Tile } from '../../ui/Tile/tile';
import './registration.css';

export const Registration = () => {
  return (
    <div className="anmeldung">
      <FlexHorizontal>
        <Tile backgroundColor="var(--color-blue)" color="var(--color-entspannt-beige)">
          <div>
            <div className="title">Anmeldung</div>
            <div className="form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">E-Mail</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Telefon</label>
                <input type="tel" id="phone" name="phone" />
              </div>
              <div className="form-group">
                <label htmlFor="dates">Gewünschte Termine</label>
                <select id="dates" name="dates" required>
                  <option value="">Bitte wählen</option>
                  <option value="01.06.2024">01.06.2024 - 08.06.2024</option>
                  <option value="15.06.2024">15.06.2024 - 22.06.2024</option>
                  <option value="01.07.2024">01.07.2024 - 08.07.2024</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="room">Zimmerwunsch</label>
                <select id="room" name="room" required>
                  <option value="">Bitte wählen</option>
                  <option value="single">Einzelzimmer</option>
                  <option value="double">Doppelzimmer</option>
                  <option value="shared">Gemeinschaftszimmer</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Nachricht (optional)</label>
                <textarea id="message" name="message" rows={4}></textarea>
              </div>
              <button type="submit" className="submit-button">Anmelden</button>
            </div>
          </div>
        </Tile>
      </FlexHorizontal>
    </div>
  );
};
// on submit soll mir eine Email mit den Daten geschickt werden
// hierfür nochmal ein neues Email-Postfach anlegen
// Telefonat und wenn das passiert ist,schicke ich eine finale Email als "Vertrag" mit allen Infos und Kosten und AGBs usw und meinen Konto-Daten auf die sie überweisen müssen. Nochmal googlen ob man besser paypal oder konto nimmt. Steuer für mich und auch Schutz für den Käufer
