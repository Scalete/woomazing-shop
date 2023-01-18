import React from 'react';
import { Promo } from './components/Promo';
import { Header } from './components/Header';
import { TitleProducts } from './components/TitleProducts';
import { Functions } from './components/Functions';

const App: React.FC = () => {
  return (
    <div className="App">
        <Header/>
        <Promo/>
        <TitleProducts/>
        <Functions/>
    </div>
  );
}

export default App;