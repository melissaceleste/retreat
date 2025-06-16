import './App.css';
import { FlexHorizontal } from './components/ui/FlexContainer/flex-horizontal';
import { Tile } from './components/ui/Tile/tile';
import { WaveUp1 } from './components/layout/Waves/waveUp1';
import wave from './components/layout/Waves/schmale.png';
import { Navbar } from './components/layout/Navigation/navbar';
import { Element } from 'react-scroll';
import waveDown from './components/layout/Waves/waveDown.svg';
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
        <Tile backgroundColor="var(--color-beige)" color="var(--color-entspannt-schwarz)">
          <div className="head">
            ARTSY RETREAT
            <div style={{ fontFamily: 'var(--montserrat)' }}><Navbar /></div>
          </div>
        </Tile>
        <img src={waveDown} alt="bla" width="100%" height="auto" />

        <Element name="about">
          <FlexHorizontal>
            <Tile backgroundColor="#FF6230" color="var(--color-hell-orange)">
              <>
                <WaveUp1 color="black" />
                <div className="left">
                  about - kurzer Satz oder Bild
                </div>
              </>
            </Tile>
            <img src={wave} alt="bla" width="auto" height="500px" />
            <Tile backgroundColor="var(--color-normal-lila)" color="var(--color-lila-blau)">
              <div className="right">
                Erklärung about
              </div>
            </Tile>
          </FlexHorizontal>
        </Element>

        <Element name="programm">
          <FlexHorizontal>
            <Tile backgroundColor="var(--color-lila-blau)" color="var(--color-peach)">
              <div className="left">
                Beispiel Programm / oder kurzer Text
              </div>
            </Tile>
            <Tile backgroundColor="var(--color-alt-rosa)" color="var(--color-knall-lila)">
              <div className="right">
                Swipe-Show oder bilder / oder auflistung
              </div>
            </Tile>
          </FlexHorizontal>
        </Element>

        <Element name="living">
          <FlexHorizontal>
            <Tile backgroundColor="var(--color-hell-orange)" color="var(--color-knall-orange)">
              <div className="left">
                Text mit Erklärung
              </div>
            </Tile>
            <Tile backgroundColor="var(--color-lila-dunkelblau)" color="var(--color-rosa)">
              <div className="right">
                Beispiel unterkünfte
              </div>
            </Tile>
          </FlexHorizontal>
        </Element>

        <Element name="booking">
          <FlexHorizontal>
            <Tile backgroundColor="var(--color-yellow)" color="var(--color-blue)">
              <>
                <WaveUp1 color="black" />
                <div className="left">
                  erklärung, Telefonat? Preise
                </div>
              </>
            </Tile>
            <Tile backgroundColor="var(--color-dark-green)" color="var(--color-purple)">
              <div className="right">
                formular oder Kontaktdaten
              </div>
            </Tile>
          </FlexHorizontal>
        </Element>

      </div>
    </div>
  );
};


// scroll  event : einblenden transformation
