import React from 'react';

export const Filter = () => {
    return (
        <div className='filters'>
            <div className="container">
                <ul className="filters-wrapper">
                    <li className='active'>Все</li>
                    <li>Пальто</li>
                    <li>Свитшоты</li>
                    <li>Кардиганы</li>
                    <li>Толстовки</li>
                </ul>
            </div>
        </div>
    );
};