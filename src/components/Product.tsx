import React from 'react';

export const Product = () => {
    return (
        <a href="#" className="title-products-item">
            <div className="title-products-img">
                <div className="product-hover-overlay"></div>
                <img src="/images/products/1.jpg" alt="Product Item" />
                <svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 12h31m0 0L20.186 1M31 12 20.186 23" stroke="#fff"/></svg>
            </div>
            <h4>Футболка USA</h4>
            <p><span>$229</span>$129</p>
        </a>
    );
};