import './program.css';

export const Program = () => {
  return (
    <div className="program">
      <div className="title">Programm</div>
      <div>Das Programm ist anpassbar auf die Wünsche der Teilnehmer:innen.</div>
      <div className="subtitle"> TAG 1</div>
      <ul className="ul">
        <li className="list">Ankunft am Flughafen (Flug selbst organisieren, gerne helfe ich auch bei der Buchung)</li>
        <li className="list">Transfer vom Flughafen zur Unterkunft</li>
        <li className="list"> Get Together - alle lernen sich beim ersten kalten Getränk oder Fooood (je nach Ankunft)
          kennen.
        </li>
      </ul>
      <div className="subtitle">TAG 2 - 4</div>
      <b className="hours"> 09:00 - 10:00</b> Frühstück <br />
      <b className="hours"> 10:00 - 13:00</b> <i>Kreative Session</i> <br />
      <b className="hours"> 13:00 - 14:00</b> Mittag <br />
      <b className="hours"> 14:00 - 18:00</b> <i>Kreative Session/ freie Gestaltung</i> <br />
      <b className="hours"> ab 18:00</b> gemeinsames Kochen, Essen & Ausklingen des Abends beim Sonnenuntergang :-)
      <div className="subtitle"> TAG 5</div>
      Abschiedsfrühstück und transfer zum Flughafen :-)
    </div>
  );
};
