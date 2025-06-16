import './App.css';
import { FlexHorizontal } from './components/ui/FlexContainer/flex-horizontal';
import { Tile } from './components/ui/Tile/tile';
import { Navbar } from './components/layout/Navigation/navbar';
import { Element } from 'react-scroll';
import { Wave } from './components/layout/Waves/wave';
import beach from './pictures/vibe/strand1.jpg';
import { Program } from './components/sections/Program/program';
import { KreativeSession } from './components/sections/CreativeSession/kreative-session';
import { About } from './components/sections/About/about';
import food from './pictures/vibe/food.jpg';
import { Unterkunft } from './components/sections/Accommodation/unterkunft';
import { Verpflegung } from './components/sections/Food/verpflegung';
import { TermineUndKosten } from './components/sections/Dates/termineUndKosten';
import { FAQ } from './components/sections/FAQ/faq';
import { Anmeldung } from './components/sections/Registration/anmeldung';

export const App = () => {
  return (
    <div className="App">
      <div className="content">
        <Tile backgroundColor="var(--color-entspannt-beige)" color="var(--color-knall-pink)">
          <div className="head">
            <div className="navBar"><Navbar /></div>
            <div className="headline">Zusammenkunst</div>
            <div className="wave">
              <Wave color="var(--color-entspannt-beige)" />
            </div>
          </div>
        </Tile>
        {/*<Element name="about" className="marginBottom">
          <FlexHorizontal marginTop="350px">
            <Tile backgroundColor="var(--color-entspannt-beige)" color="var(--color-knall-pink)" fontSize="22px">
              <p>
                about -
                <br />
                Stell dir vor:
                <br />
                Eine Woche an einem sonnigen Ort, umgeben von lieben Menschen, die Lust auf Malen, Basteln & Tonen
                haben.
                <br />
                Du musst kein*e wild*e Künstler*in sein, nur Spaß daran haben, neue Menschen kennen- und voneinander zu
                lernen.
                <br />
              </p>
            </Tile>
          </FlexHorizontal>
        </Element>*/}
        <Element name="about" className="marginBottom">
          <FlexHorizontal marginTop="350px">
            <Tile backgroundColor="var(--color-entspannt-beige)" color="var(--color-knall-pink)" fontSize="22px">
              <FlexHorizontal>
                <Tile backgroundColor="var(--color-entspannt-beige)" color="var(--color-peach)">
                  <div className="imageBorder">
                    <img src={beach} width="450px" height="auto" />
                  </div>
                </Tile>
                <Tile backgroundColor="var(--color-entspannt-beige)" color="var(--color-knall-pink)">
                  <div className="right">
                    <About />
                  </div>
                </Tile>
              </FlexHorizontal>
            </Tile>
          </FlexHorizontal>
        </Element>
        <Element name="programm" className="marginBottom">
          <FlexHorizontal>
            <Tile backgroundColor="var(--color-entspannt-beige)" color="var(--color-knall-pink)">
              <div className="left">
                <Program />
              </div>
            </Tile>
            <Tile backgroundColor="var(--color-dark-green)" color="var(--color-purple)">
              <div className="right">
                <KreativeSession />
              </div>
            </Tile>
          </FlexHorizontal>
        </Element>

        <Element name="living" className="marginBottom">
          <img src={food} width="100%" height="auto" />

          <FlexHorizontal>
            <Tile backgroundColor="var(--color-green)" color="var(--color-lila-blau)">
              <div className="left">
                <Verpflegung />
              </div>
            </Tile>
            <Tile backgroundColor="var(--color-lila-dunkelblau)" color="var(--color-rosa)">
              <div className="right">
                Swipeshow mit Bildern vom Food
              </div>
            </Tile>
          </FlexHorizontal>
        </Element>
        <Element name="booking" className="marginBottom">
          <FlexHorizontal>
            <Tile backgroundColor="var(--color-yellow)" color="var(--color-blue)">
              <div className="left"><Unterkunft />
              </div>
            </Tile>
            <Tile backgroundColor="var(--color-dark-green)" color="var(--color-purple)">
              <div className="right">
                Swipeshow mit Bildern von den Zimmern oder noch ausführlicher?
              </div>
            </Tile>
          </FlexHorizontal>
        </Element>
        <Element name="booking" className="marginBottom">
          <FlexHorizontal>
            <Tile backgroundColor="var(--color-yellow)" color="var(--color-blue)">
              <div className="left"><TermineUndKosten /></div>
            </Tile>
            <Tile backgroundColor="var(--color-dark-green)" color="var(--color-purple)">
              <div className="right">
                formular oder Kontaktdaten
              </div>
            </Tile>
          </FlexHorizontal>
        </Element>
        <Element name="faq" className="marginBottom">
          <FlexHorizontal>
            <Tile backgroundColor="var(--color-yellow)" color="var(--color-blue)">
<FAQ />
            </Tile>
          </FlexHorizontal>
        </Element>
        <Element name="faq" className="marginBottom">
          <FlexHorizontal>
            <Tile backgroundColor="var(--color-blue)" color="var(--color-entspannt-beige)">
              <Anmeldung />
            </Tile>
          </FlexHorizontal>
        </Element>

        <div className="p-1 fill-pink-400 font-extrabold">
          Hallo
        </div>

      </div>
    </div>
  );
};

