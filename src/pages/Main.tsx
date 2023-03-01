import React from 'react';
import { ContactForm } from '../components/ContactForm';
import { Functions } from '../components/Functions';
import { Promo } from '../components/Promo';
import { Team } from '../components/Team';
import { TitleProducts } from '../components/TitleProducts';

export const Main = () => {
    return (
        <>
            <Promo/>
            <TitleProducts/>
            <Functions/>
            <Team/>
            <ContactForm/>
        </>
    );
};