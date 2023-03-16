import React from 'react';
import { Filter } from '../components/Filter';
import { Products } from '../components/Products';
import { TitleBreadcrumbs } from '../components/TitleBreadcrumbs';
import { Pagination } from '../components/Pagination';
import { HelmetComponent } from '../components/HelmetComponent';

export const Shop = () => {
    return (
        <>
            <HelmetComponent title='Магазин' description='Страница магазина'/>
            <TitleBreadcrumbs title='Магазин' breadcrumbs={[{link: '/woomazing-shop', name: 'Главная'}, {link: '/woomazing-shop/shop', name: 'Магазин'}]}/>
            <Filter/>
            <Products/>
            <Pagination/>
        </>
    );
};