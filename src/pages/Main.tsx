import React from 'react';
import { fetchNewCollectionsProducts } from '../redux/product/asyncActions';
import { Functions } from '../components/Functions';
import { Promo } from '../components/Promo';
import { Team } from '../components/Team';
import { TitleProducts } from '../components/TitleProducts';
import { Link } from 'react-router-dom';
import { HelmetComponent } from '../components/HelmetComponent';

export const Main: React.FC = () => {
    return (
        <>
            <HelmetComponent title='Главная' description='Главная страница'/>
            <Promo/>
            <TitleProducts title='Новая коллекция' asyncFunc={fetchNewCollectionsProducts} button={<Link to={`${process.env.REACT_APP_HOME_URL}shop`} className="action second">Открыть магазин</Link>}/>
            <Functions/>
            <Team/>
        </>
    );
};