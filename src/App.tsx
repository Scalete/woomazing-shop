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
                    path="/woomazing-shop"
                    element={<Main />}
                    />
                    <Route
                    path="/woomazing-shop/shop"
                    element={<Shop />}
                    />
                    <Route
                    path="/woomazing-shop/product"
                    element={<FullProduct />}
                    />
                    <Route
                    path="/woomazing-shop/about"
                    element={<About />}
                    />
                    <Route
                    path="/woomazing-shop/contacts"
                    element={<Contact />}
                    />
                    <Route
                    path="/woomazing-shop/cart"
                    element={<Cart />}
                    />
                    <Route
                    path="/woomazing-shop/checkout"
                    element={<Checkout />}
                    />
                    <Route path="/woomazing-shop/*" element={<NotFoundPage />} />
                </Routes>
            </main>
            <Footer/>
            <ToastContainer position="bottom-right" autoClose={3000}/>

            <ContactForm activeForm={activeForm} setActiveForm={setActiveForm}/>
        </div>
  );
}

export default App;