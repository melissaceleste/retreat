import './App.css';
import { Element } from 'react-scroll';
import { Program } from './components/sections/Program/program';
import { About } from './components/sections/About/about';
import { Accommodation } from './components/sections/Accommodation/accommodation';
import { Verpflegung } from './components/sections/Food/food';
import { FAQ } from './components/sections/FAQ/faq';
import { Registration } from './components/sections/Registration/registration';
import { Header } from './components/layout/Header/Header';
import { DatesAndPrices } from './components/sections/DatesAndPrices/dates-and-prices';

export const App = () => {
  return (
    <div className="App">
      <div className="content">
        <Header />
        <Element name="about" className="marginBottom">
          <About />
        </Element>
        <Element name="programm" className="marginBottom">
          <Program />
        </Element>
        <Element name="living" className="marginBottom">
          <Verpflegung />
        </Element>
        <Element name="booking" className="marginBottom">
          <Accommodation />
        </Element>
        <Element name="booking" className="marginBottom">
          <DatesAndPrices />
        </Element>
        <Element name="faq" className="marginBottom">
          <FAQ />
        </Element>
        <Element name="faq" className="marginBottom">
          <Registration />
        </Element>
        <div className="p-1 fill-pink-400 font-extrabold">
          Hallo
        </div>
      </div>
    </div>
  );
};

