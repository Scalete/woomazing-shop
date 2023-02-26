import React from 'react';
import { Filter } from '../components/Filter';
import { Products } from '../components/Products';
import { TitleBreadcrumbs } from '../components/TitleBreadcrumbs';
import { Pagination } from '../components/Pagination';

export const Shop = () => {
    return (
        <>
            <TitleBreadcrumbs title='Магазин'/>
            <Filter/>
            <Products/>
            <Pagination/>
        </>
    );
};