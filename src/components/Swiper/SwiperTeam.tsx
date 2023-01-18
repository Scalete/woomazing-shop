import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';

import 'swiper/scss';
import 'swiper/scss/pagination';

const SwiperTeam = () => {

    return (
        <Swiper 
            modules={[Pagination, Navigation, Autoplay]}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            allowTouchMove={false}
            autoplay={{
                delay: 10000,
                disableOnInteraction: false,
            }}
        >
            <SwiperSlide>
                <img src="/images/slider/team/1.jpg" alt="Team Slide" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/images/slider/team/2.jpg" alt="Team Slide" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/images/slider/team/3.jpg" alt="Team Slide" />
            </SwiperSlide>
        </Swiper>
    )
};

export default SwiperTeam;