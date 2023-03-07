import React from 'react';
import { Link } from 'react-router-dom';
import SwiperTeam from './Swiper/SwiperTeam';

export const Team: React.FC = () => {
    return (
        <section className="team">
            <div className="container">
                <h2 className='second-title'>Команда мечты Womazing</h2>
                <div className="team-wrapper">
                    <div className="team-slider">
                        <SwiperTeam/>
                    </div>
                    <div className="team-content">
                        <h3>Для каждой</h3>
                        <p>Каждая девушка уникальна. Однако, мы схожи в миллионе мелочей.</p>
                        <p>Womazing ищет эти мелочи и создает прекрасные вещи, которые выгодно подчеркивают достоинства каждой девушки.</p>
                        <Link to='/about' className='hover-underline-animation'>Подробнее о бренде</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};