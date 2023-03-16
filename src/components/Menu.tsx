import React from 'react';
import { NavLink } from 'react-router-dom';

export const Menu: React.FC = () => {
    return (
        <nav>
            <ul className="menu">
                <li><NavLink className='hover-underline-animation' to={`${process.env.REACT_APP_HOME_URL}`} end>Главная</NavLink></li>
                <li><NavLink className='hover-underline-animation' to={`${process.env.REACT_APP_HOME_URL}shop`} end>Магазин</NavLink></li>
                <li><NavLink className='hover-underline-animation' to={`${process.env.REACT_APP_HOME_URL}about`} end>О бренде</NavLink></li>
                <li><NavLink className='hover-underline-animation' to={`${process.env.REACT_APP_HOME_URL}contacts`} end>Контакты</NavLink></li>
            </ul>
        </nav>
    );
};