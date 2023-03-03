import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import { Main } from './pages/Main';
import { Shop } from './pages/Shop';
import { ContactForm } from './components/ContactForm';
import { FullProduct } from './pages/FullProduct';

const App: React.FC = () => {

    const [activeForm, setActiveForm] = useState<boolean>(false);

    React.useEffect(() => {
        if (activeForm) {
            document.body.classList.add('scrollStop');
        } else {
            document.body.classList.remove('scrollStop');
        }
    }, [activeForm]);

    return (
        <div className="app">
            <Header setActiveForm={setActiveForm}/>
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
                    <Route
                    path="/product"
                    element={<FullProduct />}
                    />
                </Routes>
            </main>
            <Footer/>

            <ContactForm activeForm={activeForm} setActiveForm={setActiveForm}/>
        </div>
  );
}

export default App;