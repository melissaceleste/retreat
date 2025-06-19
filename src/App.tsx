import React from 'react';
import { Element } from 'react-scroll';
import './App.css';

// Komponenten-Imports
import { Program } from './components/sections/Program/program';
import { About } from './components/sections/About/about';
import { AboutMe } from './components/sections/AboutMe/about-me';
import { Accommodation } from './components/sections/Accommodation/accommodation';
import { Food } from './components/sections/Food/food';
import { FAQ } from './components/sections/FAQ/faq';
import { Registration } from './components/sections/Registration/registration';
import { Header } from './components/layout/Header/Header';
import { DatesAndPrices } from './components/sections/DatesAndPrices/dates-and-prices';
import { PicturesOfDiy } from './components/sections/PicturesOfDiy/pictures-of-diy';
import { PicturesOfVibes } from './components/sections/PicturesOfVibes/pictures-of-vibes';
import { ColorPicker } from './components/ColorPicker/ColorPicker';

export const App: React.FC = () => {
  return (
    <div className="App">
      <div className="content">
        <Header />
        <Element name="about" className="marginBottom">
          <About />
        </Element>
        <PicturesOfDiy/>
        <Element name="programm" className="marginBottom">
          <Program />
        </Element>
        <Element name="food" className="marginBottom">
          <Food />
        </Element>
        <Element name="accommodation" className="marginBottom">
          <Accommodation />
        </Element>
        <Element name="datesAndPrices" className="marginBottom">
          <DatesAndPrices />
        </Element>
        <PicturesOfVibes />
        <Element name="registration" className="marginBottom">
          <Registration />
        </Element>
        <Element name="faq" className="marginBottom">
          <FAQ />
        </Element>
        <Element name="aboutMe" className="marginBottom">
          <AboutMe />
        </Element>
      </div>
      <ColorPicker />
    </div>
  );
};


