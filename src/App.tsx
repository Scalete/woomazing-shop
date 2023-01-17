import React from 'react';
import { Promo } from './components/Promo';
import { Header } from './components/Header';

const App: React.FC = () => {
  return (
    <div className="App">
        <Header/>
        <Promo/>
    </div>
  );
}

export default App;