import './anmeldung.css';

export const Anmeldung = () => {
  return (
    <div className="anmeldung">
      <div className="title">Hab Bock! Bin dabei :-)</div>
      <div className="subtitle">Anmeldung</div>
      <div>
        Hört sich gut an? Dann melde dich hier (unverbindlich) einmal bei mir an.
        . Mir ist es besonders wichtig, dass alle Teilnehmer:innen eine harmonische und spaßige Zeit gemeinsam haben.
        Immerhin ist es Urlaub für uns alle! :-) Daher möchte ich mit jedem/jeder einmal vorab telefonieren/facetimen
        oder ein paar Sprachnachrichten hin und her schicken, um zu schauen ob wir die selben Vorstellungen von dieser
        Reise haben.
      </div>
      <form>
        <input type="text" placeholder="Vorname" />
        <input type="text" placeholder="Nachname" />
        <input type="text" placeholder="Telefonnummer" />
        <input type="text" placeholder="E-Mail" />
        <input type="text" placeholder="Gewünschter Zeitraum" />
        <textarea placeholder="(optional) Anmerkungen: Erreichbarkeit, vorab Fragen, oder oder oder..." />
        <button type="submit">let's go</button>
      </form>
    </div>
  );
};
// on submit soll mir eine Email mit den Daten geschickt werden
// hierfür nochmal ein neues Email-Postfach anlegen
// Telefonat und wenn das passiert ist,schicke ich eine finale Email als "Vertrag" mit allen Infos und Kosten und AGBs usw und meinen Konto-Daten auf die sie überweisen müssen. Nochmal googlen ob man besser paypal oder konto nimmt. Steuer für mich und auch Schutz für den Käufer
