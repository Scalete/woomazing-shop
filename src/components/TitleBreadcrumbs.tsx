import React from 'react';
import { Link } from 'react-router-dom';

interface TitleBreadcrumbsProps {
    title: string;
}

export const TitleBreadcrumbs: React.FC<TitleBreadcrumbsProps> = ({title}) => {
    return (
        <div className="container">
            <div className='title-breadcumbs'>
                <h2>{title}</h2>
                <div className="title-breadcumbs-wrapper">
                    <Link className='hover-underline-animation' to='/'>Главная</Link>
                    <span> — </span>
                    <Link className='inactive' to='/shop'>Магазин</Link>
                </div>
            </div>
        </div>
    );
};