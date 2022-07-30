import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import avatar from '../../assests/avatar.png'
import Loading from '../../Shared/Loading'
import auth from '../../init.firebase';
import 'react-multi-carousel/lib/styles.css';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const Review = () => {
    const [review, setReview] = useState([]);
    const [user] = useAuthState(auth);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://peaceful-waters-42797.herokuapp.com/review')
            .then(res => res.json())
            .then(data => {
                setReview(data)
                setLoading(false);
            })
    }, [])

    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div className='lg:px-24 lg:p-12'>
            <h1 className="text-4xl text-center mt-10 lg:mt-20 font-bold  mb-10">They all loves our products</h1>

            <Swiper
                slidesPerView={10}
                spaceBetween={5}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    "@0.00": {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    "@0.75": {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    "@1.00": {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    "@1.50": {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                {
                    review.map(r => <SwiperSlide key={r._id} >
                        <div className="card max-w-lg     gap-4 ">
                            <div className="card-body ">
                                <div className='flex items-center'>
                                    <div className="avatar ">
                                        <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                            {user?.photoURL ? <img src={avatar} alt='profile' /> : <img src={user} alt={r.name} />}
                                        </div>
                                    </div>
                                    <div className='p-6'>
                                        {r.date}<br></br>
                                        <div className="rating rating-xs">

                                            <p>Rating: {r?.rating}</p>
                                        </div>
                                    </div>
                                </div>
                                <h2 className="card-title">{r.name}</h2>
                                <p>{r.comment}</p>

                            </div>
                        </div>
                    </SwiperSlide>)
                }

            </Swiper>





        </div>
    );
};

export default Review;