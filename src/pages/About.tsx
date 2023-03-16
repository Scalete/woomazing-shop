import React from 'react';
import { Link } from 'react-router-dom';
import { HelmetComponent } from '../components/HelmetComponent';
import { TitleBreadcrumbs } from '../components/TitleBreadcrumbs';

export const About: React.FC = () => {
    return (
        <>
            <HelmetComponent title='О бренде' description='Страница о бренде'/>
            <TitleBreadcrumbs title='О бренде' breadcrumbs={[{link: '/woomazing-shop', name: 'Главная'}, {link: '/woomazing-shop', name: 'О бренде'}]}/>
            <section className="about">
                <div className="container">
                    <div className="about-wrapper">
                        <img src={`${process.env.REACT_APP_PUBLIC_URL}/images/about/red-cloth.jpg`} alt="Woman In Red Clothes" />
                        <div className="about-text">
                            <h3>Идея и женщина</h3>
                            <p>Womazing была основана в 2010-ом и стала одной из самых успешных компаний нашей страны. Как и многие итальянские фирмы, Womazing остаётся семейной компанией, хотя ни один из членов семьи не является модельером.</p>
                            <p>Мы действуем по успешной формуле, прибегая к услугам известных модельеров для создания своих коллекций. Этот метод был описан критиком моды Колином Макдауэллом как форма дизайнерского со-творчества, характерная для ряда итальянских prêt-a-porter компаний. </p>
                        </div>
                    </div>
                    <div className="about-wrapper">
                        <div className="about-text margin">
                            <h3>Магия в деталях</h3>
                            <p>Первый магазин Womazing был открыт в маленьком городке на севере страны в 2010-ом году. Первая коллекция состояла из двух пальто и костюма, которые были копиями парижских моделей.</p>
                            <p>Несмотря на то, что по образованию основательница была адвокатом, ее семья всегда была тесно связана с шитьём (прабабушка основательницы шила одежду для женщин, а мать основала профессиональную школу кроя и шитья). Стремление производить одежду для масс несло в себе большие перспективы, особенно в то время, когда высокая мода по-прежнему доминировала, а рынка качественного prêt-a-porter попросту не существовало.</p>
                        </div>
                        <img src={`${process.env.REACT_APP_PUBLIC_URL}/images/about/white-cloth.jpg`} alt="Woman In White Clothes" />
                    </div>
                    <Link to='/woomazing-shop/shop' className="action main">Перейти в магазин</Link>
                </div>
            </section>
        </>
    );
};