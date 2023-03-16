import React from 'react';
import { NavLink } from 'react-router-dom';

export const Menu: React.FC = () => {
    return (
        <nav>
            <ul className="menu">
                <li><NavLink className='hover-underline-animation' to="/woomazing-shop" end>Главная</NavLink></li>
                <li><NavLink className='hover-underline-animation' to="/woomazing-shop/shop" end>Магазин</NavLink></li>
                <li><NavLink className='hover-underline-animation' to="/woomazing-shop/about" end>О бренде</NavLink></li>
                <li><NavLink className='hover-underline-animation' to="/woomazing-shop/contacts" end>Контакты</NavLink></li>
            </ul>
        </nav>
    );
};