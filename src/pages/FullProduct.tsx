import React from 'react';
import { TitleBreadcrumbs } from '../components/TitleBreadcrumbs';
import { FullProductComponent } from '../components/FullProductComponent';

export const FullProduct: React.FC = () => {
    return (
        <>
            <TitleBreadcrumbs title='Свитшот Sweet Shot' breadcrumbs={[{link: '/', name: 'Главная'}, {link: '/shop', name: 'Магазин'}, {link: '/', name: 'Свитшот Sweet Shot'}]}/>
            <FullProductComponent />
        </>
    );
};