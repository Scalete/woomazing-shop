import React from 'react';

export const Pagination: React.FC = () => {
    return (
        <div className='pagination'>
            <div className="container">
                <ul>
                    <li className='active'>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </div>
        </div>
    );
};