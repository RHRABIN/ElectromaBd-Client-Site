import React from 'react';
import { FiPhoneCall } from 'react-icons/fi'
import { GoLocation } from 'react-icons/go'
import { AiOutlineClockCircle } from 'react-icons/ai'
const OurService = () => {
    let iconStyles = { color: "green", fontSize: "2.5em" };
    let iconStyles2 = { color: "cyan", fontSize: "2.5em" };
    let iconStyles3 = { color: "blue", fontSize: "2.5em" };

    return (
        <div className='lg:px-20 mt-20 mb-20'>
            <h1 className='text-4xl font-bold text-center text-secondary mb-4 underline '>Our service</h1>
            <div className='grid lg:grid-cols-3 justify-items-center gap-4 text-white'>
                <div className="card w-80 lg:w-96 bg-gradient-to-t from-primary via-sky-400 to-green-200  shadow-xl">
                    <figure className="px-10 pt-10">
                        <FiPhoneCall style={iconStyles} />
                    </figure>
                    <div className="card-body items-center text-center ">
                        <h2 className="card-title">24 Hours Service</h2>
                        <p>Cell: ++99889-88798 </p>

                    </div>
                </div>
                <div className="card w-80 lg:w-96  bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-300 shadow-xl">
                    <figure className="px-10 pt-10">
                        <GoLocation style={iconStyles2} />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Our Location</h2>
                        <p>Dhaka||Farmgate, Road: 32/A Block: B</p>

                    </div>
                </div>
                <div className="card w-80 lg:w-96 bg-gradient-to-t from-secondary via-blue-400 to-purple-300 shadow-xl">
                    <figure className="px-10 pt-10">
                        <AiOutlineClockCircle style={iconStyles3} />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Frome 2008</h2>
                        <p>We are we are provide service, and take ordered.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurService;