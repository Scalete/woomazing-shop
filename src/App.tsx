import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import { Main } from './pages/Main';
import { Shop } from './pages/Shop';

const App: React.FC = () => {

    return (
        <div className="app">
            <Header/>
                <main>
                    <Routes>
                        <Route
                        path="/"
                        element={<Main />}
                        />
                        <Route
                        path="/shop"
                        element={<Shop />}
                        />
                    </Routes>
                </main>
            <Footer/>
        </div>
  );
}

export default App;