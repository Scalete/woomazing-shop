import React from 'react';
import SwiperPromo from './Swiper/SwiperPromo';
import { Link } from 'react-router-dom';

export const Promo: React.FC = () => {
    const textContent: string[][] = [
        ['Включай новый сезон с WOMAZING', 'Мы обновили ассортимент - легендарные коллекции и новинки от отечественных дизайнеров'],
        ['Что-то новенькое. Мы заждались тебя.', 'Надоело искать себя в сером городе? Настало время новых идей, свежих красок и вдохновения с Womazing!'],
        ['Новые поступления в этом сезоне', 'Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне. Время исследовать.']
    ];
    const imgContent: string[] = ['/images/slider/1.jpg', '/images/slider/1.jpg', '/images/slider/1.jpg'];

    const [thumbsSwiper, setThumbsSwiper] = React.useState(null);

    return (
        <section className="promo">
            <div className="promo-overlay"></div>
            <div className="container promo-wrapper">
                <div className="promo-content-slider">
                    <SwiperPromo textContent={textContent} text={true} thumbsSwiper={thumbsSwiper}/>
                    <div className="promo-action-container">
                        <a href="#title-products" className="action arrow"><svg width="16" height="29" viewBox="0 0 16 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 0v28m0 0-7-7.19M8 28l7-7.19" stroke="#6E9C9F"/></svg></a>
                        <Link to="/woomazing-shop/shop" className="action main">Открыть магазин</Link>
                    </div>
                </div>
                <div className="promo-image-slider">
                    <img src="/images/promo/decorate-1.jpg" alt="Decorate Promo" className="promo-decorate promo-decorate-first" />
                    <img src="/images/promo/decorate-2.jpg" alt="Decorate Promo" className="promo-decorate promo-decorate-second" />
                    <SwiperPromo imgContent={imgContent} text={false} setThumbsSwiper={setThumbsSwiper}/>
                </div>
            </div>
        </section>
    );
};