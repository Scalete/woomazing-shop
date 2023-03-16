import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import { Main } from './pages/Main';
import { Shop } from './pages/Shop';
import { ContactForm } from './components/ContactForm';
import { FullProduct } from './pages/FullProduct';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Cart } from './pages/Cart';
import { ScrollToTop } from './utils/helperFunctions';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Checkout } from './pages/Checkout';
import NotFoundPage from './pages/NotFoundPage';

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
            <ScrollToTop />
            <main>
                <Routes>
                    <Route
                    path={`${process.env.REACT_APP_HOME_URL}`}
                    element={<Main />}
                    />
                    <Route
                    path={`${process.env.REACT_APP_HOME_URL}shop`}
                    element={<Shop />}
                    />
                    <Route
                    path={`${process.env.REACT_APP_HOME_URL}product`}
                    element={<FullProduct />}
                    />
                    <Route
                    path={`${process.env.REACT_APP_HOME_URL}about`}
                    element={<About />}
                    />
                    <Route
                    path={`${process.env.REACT_APP_HOME_URL}contacts`}
                    element={<Contact />}
                    />
                    <Route
                    path={`${process.env.REACT_APP_HOME_URL}cart`}
                    element={<Cart />}
                    />
                    <Route
                    path={`${process.env.REACT_APP_HOME_URL}checkout`}
                    element={<Checkout />}
                    />
                    <Route element={<NotFoundPage />} />
                </Routes>
            </main>
            <Footer/>
            <ToastContainer position="bottom-right" autoClose={3000}/>

            <ContactForm activeForm={activeForm} setActiveForm={setActiveForm}/>
        </div>
  );
}

export default App;