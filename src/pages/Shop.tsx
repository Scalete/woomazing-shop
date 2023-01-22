import React from 'react';
import { Filter } from '../components/Filter';
import { Products } from '../components/Products';
import { TitleBreadcrumbs } from '../components/TitleBreadcrumbs';

export const Shop = () => {
    return (
        <>
            <TitleBreadcrumbs title='Магазин'/>
            <Filter/>
            <Products/>
        </>
    );
};