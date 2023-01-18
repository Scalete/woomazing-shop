import React from 'react';
import { Promo } from './components/Promo';
import { Header } from './components/Header';
import { TitleProducts } from './components/TitleProducts';
import { Functions } from './components/Functions';
import { Team } from './components/Team';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="App">
        <Header/>
        <Promo/>
        <TitleProducts/>
        <Functions/>
        <Team/>
        <Footer/>
    </div>
  );
}

export default App;