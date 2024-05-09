import './App.css';
import { FlexHorizontal } from './components/flex-horizontal/flex-horizontal';
import { Tile } from './components/tile/tile';
import { WaveUp1 } from './waves/waveUp1';
import wave from  './waves/schmale.png';
import wave2 from  './waves/schmal2.png';


export const App = () => {
  return (
    <div className="App">
      <div className="content">
      <Tile backgroundColor="var(--color-beige)" color="var(--color-entspannt-schwarz)">
        <div className="head">
          ARTSY RETREAT
        </div>
        <div style={{fontFamily:'var(--montserrat)'}}>about</div>
      </Tile>
      <FlexHorizontal>
        <Tile backgroundColor="#FF6230" color="var(--color-hell-orange)">
          <>
            <WaveUp1 color="black" />
            <div className="left">
              hallo
            </div>
          </>
        </Tile>
        <img src={wave} alt="bla" width="auto" height="500px" />
        <Tile backgroundColor="var(--color-normal-lila)" color="var(--color-lila-blau)">
          <div className="right">
            rechts
          </div>
        </Tile>
      </FlexHorizontal>
      <FlexHorizontal>
        <Tile backgroundColor="var(--color-lila-blau)" color="var(--color-peach)">
          <div className="left">
            links
          </div>
        </Tile>
{/*
        <img src={wave2} alt="bla" width="auto" height="500px" />
*/}
        <Tile backgroundColor="var(--color-alt-rosa)" color="var(--color-knall-lila)">

          <div className="right">
            rechts
          </div>
        </Tile>
      </FlexHorizontal>
      <FlexHorizontal>
        <Tile backgroundColor="var(--color-hell-orange)" color='var(--color-knall-orange)'>
          <div className="left">
            links
          </div>
        </Tile>
        <Tile backgroundColor="var(--color-lila-dunkelblau)" color='var(--color-rosa)'>
          <div className="right">
            rechts
          </div>
        </Tile>
      </FlexHorizontal>
      </div>
    </div>
  );
};
// #F4EEB6
