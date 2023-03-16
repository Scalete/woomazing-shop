import React from 'react';
import { TitleBreadcrumbs } from '../components/TitleBreadcrumbs';
import { Map } from '../components/Map';
import { ContactComponent } from '../components/ContactComponent';
import { HelmetComponent } from '../components/HelmetComponent';

export const Contact: React.FC = () => {
    return (
        <>
            <HelmetComponent title='Контакты' description='Страница контактов'/>
            <TitleBreadcrumbs title='Контакты' breadcrumbs={[{link: `${process.env.REACT_APP_HOME_URL}`, name: 'Главная'}, {link: `${process.env.REACT_APP_HOME_URL}`, name: 'Контакты'}]} />
            <Map/>
            <ContactComponent/>
        </>
    );
};