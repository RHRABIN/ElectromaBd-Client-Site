import React from 'react';
import homepage from '../../assests/home/hompage.jpg';
import slider1 from '../../assests/slider/Slider1.jpg';
import slider2 from '../../assests/slider/Slider2.jpg';
import slider3 from '../../assests/slider/Slider3.jpg';
import Flip from 'react-reveal/Flip';
import Bounce from 'react-reveal/Bounce';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { useState } from 'react';
import { useEffect } from 'react';

const Heading = () => {
    const [sliders, setSlider] = useState([])
    useEffect(() => {
        fetch('homePageSlider.json').then(res => res.json())
            .then(result => setSlider(result))
    }, [])
    return (
        <div>
            <Swiper
                slidesPerView={10}
                spaceBetween={5}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    "@0.00": {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    "@0.75": {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    "@1.00": {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    "@1.50": {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                {sliders?.map((slider) => (
                    <SwiperSlide key={slider._id}>


                        <div className="hero  min-h-[60vh]" style={{ backgroundImage: `url(${slider.img})` }}>
                            <div className="hero-overlay bg-opacity-60 "></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="">
                                    <h1 className="mb-5 text-5xl font-bold text-white">{slider.heading}</h1>
                                    <p className="mb-5">{slider.Text}</p>
                                    <button

                                        className="btn  btn-warning px-8">Get Started With Us</button>
                                </div>
                            </div>
                        </div>


                    </SwiperSlide>
                ))}
            </Swiper>


        </div>
    );
};

export default Heading;