import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import { Main } from './pages/Main';
import { Shop } from './pages/Shop';
import { DataFormContext } from './context/Contex';

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
            <DataFormContext.Provider value={{activeForm, setActiveForm}} >

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

            </DataFormContext.Provider>
            
        </div>
  );
}

export default App;