import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from './Product';

export const TitleProducts: React.FC = () => {
    return (
        <section className="title-products">
            <div className="container">
                <h2 className='second-title'>Новая коллекция</h2>
                <ul className="title-products-wrapper">
                    <Product imgUrl='/images/products/1.jpg' title='Футболка USA' price={229} discount={50}/>
                    <Product imgUrl='/images/products/2.jpg' title='Купальник Glow' price={129} discount={0}/>
                    <Product imgUrl='/images/products/3.jpg' title='Свитшот Sweet Shot' price={129} discount={0}/>
                </ul>
                <Link to="/shop" className="action second">Открыть магазин</Link>
            </div>
        </section>
    );
};