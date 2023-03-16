import React from 'react';
import { Link } from 'react-router-dom';
import { ProductItem } from '../redux/product/interfaces';
import { calculateDiscount } from '../utils/helperFunctions';

export const Product: React.FC<ProductItem> = ({_id, imgUrl, title, price, discount}) => {

    return (
        <li className='product'>
            <Link to={`/woomazing-shop/product?_id=${_id}`} className="product-item">
                <div className="product-img">
                    <div className="product-hover-overlay"></div>
                    <img loading="lazy" src={imgUrl} alt="Product Item" />
                    <svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 12h31m0 0L20.186 1M31 12 20.186 23" stroke="#fff"/></svg>
                </div>
                <h4>{title}</h4>
                <p><span style={discount? {}: {display: 'none'}}>{'$' + price}</span>{'$' + calculateDiscount(price, discount)}</p>
            </Link>
        </li>
    );
};