import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import avatar from '../../assests/avatar.png'
import auth from '../../init.firebase';
import daisybg from '../../assests/daisybg.png'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Review = () => {
    const [review, setReview] = useState([]);
    const [user] = useAuthState(auth)
    useEffect(() => {
        fetch('https://peaceful-waters-42797.herokuapp.com/review')
            .then(res => res.json())
            .then(data => {
                setReview(data)
            })
    }, [])
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className='lg:px-24 lg:p-12 '
            style={{
                backgroundImage: `url(${daisybg})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                opacity: '60'

            }}
        >
            <h1 className="text-4xl text-center lg:mt-8 font-bold text-red-400 underline mb-10">They all loves our products</h1>
            <Carousel
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >

                {
                    review.map(r => <div key={r._id} className="card max-w-lg lg:w-96 h-80 bg-green-100 p-2 shadow-2xl ml-4  mr-4 gap-4 ">
                        <div className="card-body ">
                            <div className='flex items-center'>
                                <div className="avatar ">
                                    <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        {user?.photoURL ? <img src={user.photoURL} alt={r.name} /> : <img src={avatar} alt='profile' />}
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
                    </div>)
                }

            </Carousel>
            {/* 
                {
                    review.map(r => <div key={r._id} className="card max-w-lg  shadow-2xl">
                        <div className="card-body">
                            <div className='flex items-center'>
                                <div className="avatar ">
                                    <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        {user?.photoURL ? <img src={user.photoURL} alt={r.name} /> : <img src={avatar} alt='profile' />}
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
                            <div className="card-actions justify-end">

                            </div>
                        </div>
                    </div>)
                }
            </div> */}
        </div>
    );
};

export default Review;