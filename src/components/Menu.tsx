import React from 'react';

export const Menu = () => {
    return (
        <nav>
            <ul className="menu">
                <li><a className='hover-underline-animation active' href="#">Главная</a></li>
                <li><a className='hover-underline-animation' href="#">Магазин</a></li>
                <li><a className='hover-underline-animation' href="#">О бренде</a></li>
                <li><a className='hover-underline-animation' href="#">Контакты</a></li>
            </ul>
        </nav>
    );
};