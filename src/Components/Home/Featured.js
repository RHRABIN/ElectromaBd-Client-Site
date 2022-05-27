import React from 'react';
import f1 from '../../assests/f1.jpeg'
import f2 from '../../assests/f2.jpeg'
import f3 from '../../assests/f3.jpeg'
import f4 from '../../assests/f4.jpeg'
import star1 from '../../assests/star1.jpg'
const Featured = () => {
    return (
        <div className=' bg-base-300'>
            <div className='flex float-right'>
                <img className="mask mask-star w-20" src={star1} alt='start' />
                <img className="mask mask-star w-20" src={star1} alt='start' />
                <img className="mask mask-star w-20" src={star1} alt='start' />

            </div>
            <div className="hero lg:h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='lg:w-1/2 w-1/1'>
                        <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
                            <div className="carousel-item">
                                <img className='lg:w-48 w-40 h-48' src={f1} alt='feature' />
                            </div>
                            <div className="carousel-item">
                                <img className='lg:w-48 w-40 h-48' src={f2} alt='feature' />
                            </div>
                            <div className="carousel-item">
                                <img className='lg:w-48 w-40 h-48' src={f3} alt='feature' />
                            </div>
                            <div className="carousel-item">
                                <img className='lg:w-48 w-40 h-48' src={f4} alt='feature' />
                            </div>
                            <div className="carousel-item">
                                <img className='lg:w-48 w-40 h-48' src={f1} alt='feature' />
                            </div>
                            <div className="carousel-item">
                                <img className='lg:w-48 h-48' src={f2} alt='feature' />
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-1/2'>

                        <h1 className="text-5xl font-bold">Our Featured Collections!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">See Featured</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Featured;