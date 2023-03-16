import React from 'react';
import { NavLink } from 'react-router-dom';

export const Menu: React.FC = () => {
    return (
        <nav>
            <ul className="menu">
                <li><NavLink className='hover-underline-animation' to="woomazing-shop">Главная</NavLink></li>
                <li><NavLink className='hover-underline-animation' to="woomazing-shop/shop">Магазин</NavLink></li>
                <li><NavLink className='hover-underline-animation' to="woomazing-shop/about">О бренде</NavLink></li>
                <li><NavLink className='hover-underline-animation' to="woomazing-shop/contacts">Контакты</NavLink></li>
            </ul>
        </nav>
    );
};