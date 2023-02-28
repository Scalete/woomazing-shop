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
                <svg onClick={() => onChangePage(page - 1)} className={`arrow-btn left ${page <= 1 ? 'hide': ''}`} width="21" height="11" viewBox="0 0 21 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 5.5h20m0 0-5.135 5M20 5.5l-5.135-5" stroke="#000"/></svg>
                <ul>
                    {status !== 'loading' ? renderPages(): ''}
                </ul>
                <svg onClick={() => onChangePage(Number(page) + 1)} className={`arrow-btn right ${page >= totalPages ? 'hide': ''}`} width="21" height="11" viewBox="0 0 21 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 5.5h20m0 0-5.135 5M20 5.5l-5.135-5" stroke="#000"/></svg>
            </div>
        </div>
    );
};