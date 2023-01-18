import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs, Pagination, Autoplay } from 'swiper';

import 'swiper/scss';
import 'swiper/scss/thumbs';
import 'swiper/scss/pagination';

interface SwiperProps {
    textContent?: string[][];
    imgContent?: string[];
    text: boolean;
    thumbsSwiper?: any;
    setThumbsSwiper?: any;
}

const SwiperPromo = ({textContent, imgContent, text, thumbsSwiper, setThumbsSwiper}: SwiperProps) => {

    const renderElements = () => {
        
        if (text) {
            return textContent?.map((textArr: string[], i: number) => (
                <SwiperSlide key={i}>
                    <div className="slider-item-content">
                        <h1>{textArr[0]}</h1>
                        <p>{textArr[1]}</p>
                    </div>
                </SwiperSlide>
                
            ));
        }

        return imgContent?.map((link: string, i: number) => (
            <SwiperSlide key={i}>
                <div className="slider-item-image">
                    <img src={link} alt="Slider Item" />
                </div>
            </SwiperSlide>
            
        ));
    }

    return text? (
        <Swiper 
            modules={[Thumbs, Pagination, Autoplay]}
            thumbs={{ swiper: thumbsSwiper }}
            slidesPerView={1}
            pagination={{ clickable: true }}
            allowTouchMove={false}
            autoplay={{
                delay: 10000,
                disableOnInteraction: false,
            }}
        >
            {renderElements()}
        </Swiper>
    ): (
        <Swiper 
            modules={[Thumbs]}
            onSwiper={setThumbsSwiper}
            watchSlidesProgress
            allowTouchMove={false}
            slidesPerView={1}
        >
            {renderElements()}
        </Swiper>
    )
};

export default SwiperPromo;