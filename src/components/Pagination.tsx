import React from 'react';
import { useSelector } from 'react-redux';
import { fetchProducts } from '../redux/product/asyncActions';
import { setPagination, useProducts } from '../redux/product/selectors';
import { useAppDispatch } from '../redux/store';

export const Pagination: React.FC = () => {

    const { status, page, totalPages } = useSelector(useProducts);
    const dispatch = useAppDispatch();

    function isCategoryInLocalStorage() {
        return localStorage.getItem('category-name') && localStorage.getItem('category-id')? true: false;
    }

    const onChangePage = (page: number) => {
        dispatch(fetchProducts(isCategoryInLocalStorage() ? {category: localStorage.getItem('category-name'), page}: {category: 'Все', page}));
        dispatch(setPagination(page));
    }

    const renderPages = () => {
        return new Array(totalPages).fill(0).map((__, i) => <li key={i} onClick={() => onChangePage(i + 1)} className={i + 1 === Number(page) ? 'active': ''}>{i + 1}</li>);
    }

    return (
        <div className='pagination'>
            <div className="container">
                <ul>
                    {status !== 'loading' ? renderPages(): ''}
                </ul>
            </div>
        </div>
    );
};