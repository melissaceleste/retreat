import { FlexHorizontal } from '../../ui/FlexContainer/flex-horizontal';
import { Tile } from '../../ui/Tile/tile';
import './accommodation.css';

export const Accommodation = () => {
  return (
    <div className="unterkunft">
      <div className="title">Unterkunft</div>
      <FlexHorizontal>
        <Tile backgroundColor="var(--color-yellow)" color="var(--color-blue)">
          <div>
            Bei den Unterkünften handelt es sich immer um schöne Villen mit ausreichend Platz für alle, sodass man auch mal
            Ruhe für sich genießen kann.
            <br /><br />
            Garten bla bla <br/>
            Pool bla bla <br/>
            Meer bla bla <br/>
            Zimmer bla bla <br/>
            Je nach Unterkunft werden sich Zweibett-Zimmer geteilt. Es gibt auch die Möglichkeit auf Einzelzimmer.
          </div>
        </Tile>
        <Tile backgroundColor="var(--color-dark-green)" color="var(--color-purple)">
          <div>
            Swipeshow mit Bildern von den Zimmern oder noch ausführlicher?
          </div>
        </Tile>
      </FlexHorizontal>
    </div>
  );
};
