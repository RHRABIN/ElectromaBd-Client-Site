import React from 'react';
import image from '../assests/404.jpg'
const NotFound = () => {
    return (
        <div className='grid justify-items-center '>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-red-700 text-5xl font-extrabold">OPPS!!</h1>
                        <p className="mb-5 text-5xl text-red-600">The Page Not Found. Please Go Back</p>
                        {/* <button className="btn btn-primary">Get Started</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;