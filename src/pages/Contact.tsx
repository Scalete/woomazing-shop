import React from 'react';
import { TitleBreadcrumbs } from '../components/TitleBreadcrumbs';
import { Map } from '../components/Map';
import { ContactComponent } from '../components/ContactComponent';

export const Contact: React.FC = () => {
    return (
        <>
            <TitleBreadcrumbs title='Контакты' breadcrumbs={[{link: '/', name: 'Главная'}, {link: '/', name: 'Контакты'}]} />
            <Map/>
            <ContactComponent/>
        </>
    );
};