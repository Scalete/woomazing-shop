import React from 'react';
import { Promo } from './components/Promo';
import { Header } from './components/Header';
import {TitleProducts} from './components/TitleProducts';

const App: React.FC = () => {
  return (
    <div className="App">
        <Header/>
        <Promo/>
        <TitleProducts/>
    </div>
  );
}

export default App;