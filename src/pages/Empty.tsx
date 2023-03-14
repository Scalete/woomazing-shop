import React from 'react';

export const Empty: React.FC<{text: string}> = ({text}) => {
    return (
        <div className='empty-page'>
            <h1>{text}</h1>
        </div>
    );
};