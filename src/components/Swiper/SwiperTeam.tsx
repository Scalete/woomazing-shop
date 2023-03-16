import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay, Lazy } from 'swiper';

import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/lazy';

const SwiperTeam = () => {

    return (
        <Swiper 
            modules={[Pagination, Navigation, Autoplay, Lazy]}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            allowTouchMove={false}
            autoplay={{
                delay: 10000,
                disableOnInteraction: false,
            }}
            lazy
        >
            <SwiperSlide>
                <img className="swiper-lazy" data-src={`${process.env.REACT_APP_PUBLIC_URL}images/slider/team/1.jpg`} alt="Team Slide" />
                <div className="swiper-lazy-preloader"></div>
            </SwiperSlide>
            <SwiperSlide>
                <img className="swiper-lazy" data-src={`${process.env.REACT_APP_PUBLIC_URL}images/slider/team/2.jpg`} alt="Team Slide" />
                <div className="swiper-lazy-preloader"></div>
            </SwiperSlide>
            <SwiperSlide>
                <img className="swiper-lazy" data-src={`${process.env.REACT_APP_PUBLIC_URL}images/slider/team/3.jpg`} alt="Team Slide" />
                <div className="swiper-lazy-preloader"></div>
            </SwiperSlide>
        </Swiper>
    )
};

export default SwiperTeam;