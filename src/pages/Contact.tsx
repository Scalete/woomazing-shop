import React from 'react';
import { TitleBreadcrumbs } from '../components/TitleBreadcrumbs';
import { Map } from '../components/Map';
import { ContactComponent } from '../components/ContactComponent';
import { HelmetComponent } from '../components/HelmetComponent';

export const Contact: React.FC = () => {
    return (
        <>
            <HelmetComponent title='Контакты' description='Страница контактов'/>
            <TitleBreadcrumbs title='Контакты' breadcrumbs={[{link: '/woomazing-shop', name: 'Главная'}, {link: '/woomazing-shop', name: 'Контакты'}]} />
            <Map/>
            <ContactComponent/>
        </>
    );
};