import React from 'react';
import homepage from '../../assests/home/hompage.jpg';
import slider1 from '../../assests/slider/Slider1.jpg';
import slider2 from '../../assests/slider/Slider2.jpg';
import slider3 from '../../assests/slider/Slider3.jpg';
const Heading = () => {

    return (
        <div>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <div className="hero  min-h-screen" style={{ backgroundImage: `url(${homepage})` }}>
                        <div className="hero-overlay bg-opacity-60 "></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Our Product Store Demo</h1>
                                <p className="mb-5">Please Get Started Click to connected with us .And see update product and also get notification for every new product. If your want to get started</p>
                                <button className="btn btn-outline btn-primary px-8">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="item2" className="carousel-item w-full">
                    <div className="hero min-h-screen" style={{ backgroundImage: `url(${slider1})` }}>
                        <div className="hero-overlay bg-opacity-60 "></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Stocked Product to See</h1>
                                <p className="mb-5">Please Get Started Click to connected with us .And see update product and also get notification for every new product. If your want to get started</p>
                                <button className="btn btn-outline btn-info px-8">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="item3" className="carousel-item w-full">
                    <div className="hero min-h-screen" style={{ backgroundImage: `url(${slider2})` }}>
                        <div className="hero-overlay bg-opacity-60 "></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Our Product Store Demo</h1>
                                <p className="mb-5">Please Get Started Click to connected with us .And see update product and also get notification for every new product. If your want to get started</p>
                                <button className="btn btn-outline btn-info px-8">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="item4" className="carousel-item w-full">
                    <div className="hero min-h-screen" style={{ backgroundImage: `url(${slider3})` }}>
                        <div className="hero-overlay bg-opacity-60 "></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Stocked Product to See</h1>
                                <p className="mb-5">Please Get Started Click to connected with us .And see update product and also get notification for every new product. If your want to get started</p>
                                <button className="btn btn-outline btn-info px-8">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>

        </div>
    );
};

export default Heading;