import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface ITitleBreadcrumbsProps {
    title: string;
    breadcrumbs: {
        link: string;
        name: string;
    }[];
}

const renderBreadcrumbs = (breadcrumbs: ITitleBreadcrumbsProps['breadcrumbs']) => {
    return breadcrumbs.map((item, index, currArr) => {
        if (index !== currArr.length - 1) {
            return (
                <React.Fragment key={index}>
                    <Link className='hover-underline-animation' to={item.link}>{item.name}</Link>
                    <span> — </span>
                </React.Fragment>
            )
        }
        return <Link key={index} className='inactive' to={item.link}>{item.name}</Link>
    });
}

export const TitleBreadcrumbs: React.FC<ITitleBreadcrumbsProps> = ({title, breadcrumbs}) => {

    const location = useLocation();
    
    return (
        <div className="container">
            <div className='title-breadcumbs' style={location.pathname === '/product' ? {margin: '189px 0 102px 0'}: {} }>
                <h2>{title}</h2>
                <div className="title-breadcumbs-wrapper">
                    {renderBreadcrumbs(breadcrumbs)}
                </div>
            </div>
        </div>
    );
};