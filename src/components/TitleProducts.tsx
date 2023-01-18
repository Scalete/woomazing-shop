import React from 'react';
import { Product } from './Product';

export const TitleProducts = () => {
    return (
        <section className="title-products">
            <div className="container">
                <h2 className='second-title'>Новая коллекция</h2>
                <ul className="title-products-wrapper">
                    <Product />
                    <Product />
                    <Product />
                </ul>
                <a href="#" className="action second">Открыть магазин</a>
            </div>
        </section>
    );
};