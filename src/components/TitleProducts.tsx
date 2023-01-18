import React from 'react';
import { Product } from './Product';

export const TitleProducts = () => {
    return (
        <div className="title-products">
            <div className="container">
                <h2>Новая коллекция</h2>
                <div className="title-products-wrapper">
                    <Product />
                    <Product />
                    <Product />
                </div>
                <a href="#" className="action second">Открыть магазин</a>
            </div>
        </div>
    );
};