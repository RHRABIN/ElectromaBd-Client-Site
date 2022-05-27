import React from 'react';
import { FaFlagCheckered } from 'react-icons/fa'
import { BsPeople } from 'react-icons/bs'
import { VscFeedback } from 'react-icons/vsc'
import { GrProjects } from 'react-icons/gr';
import footer from '../../assests/footer.png'

const BussinessRating = () => {
    let circleClasses = "inline-block p-7 rounded-full w-20 mx-auto";

    let iconStyles = { color: "orange", fontSize: "3.5em" };
    let iconStyles2 = { color: "green", fontSize: "3.5em" };
    let iconStyles3 = { color: "green", fontSize: "3.5em" };
    let iconStyles4 = { color: "cyan", fontSize: "3.5em" };
    return (
        <div className='grid justify-items-center w-full mb-12 text-center'
            style={{
                backgroundImage: `url(${footer})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <h1 className="text-4xl mb-4 text-cyan-400 p-2 font-bold border-b-4 border-red-200">Total Bussiness Summery</h1>
            <div className="card  grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-2  ">

                <div className="card-body lg:w-60">
                    <div className={`state-figure `}>
                        <span className={`${circleClasses}`}>< FaFlagCheckered style={iconStyles} /></span>

                    </div>
                    <div className="stat-title text-xl text-white">Our happy clients</div>
                    <div className="stat-value text-green-300">31K+</div>
                    <div className="stat-desc text-white">Jan 1st - Apr 1st</div>
                </div>

                <div className="card-body  lg:w-60 ">
                    <div className="stat-figure">
                        <span className={`${circleClasses}`}><BsPeople style={iconStyles2} /></span>
                    </div>
                    <div className="stat-title text-xl text-white">New Users</div>
                    <div className="stat-value text-purple-300">4,200+</div>
                    <div className="stat-desc text-white">↗︎ 400 (22%)</div>
                </div>

                <div className="card-body lg:w-60">
                    <div className="stat-figure">
                        <span className={`${circleClasses}`}><GrProjects style={iconStyles3} /></span>
                    </div>
                    <div className="stat-title text-xl text-white">Our Products</div>
                    <div className="stat-value text-lime-400">1,600+</div>
                    <div className="stat-desc text-white">↘︎ 90 (14%)</div>
                </div>
                <div className="card-body lg:w-60">
                    <div className="stat-figure">
                        <span className={`${circleClasses}`}><VscFeedback style={iconStyles4} /></span>
                    </div>
                    <div className="stat-title text-xl text-white">Feedbacks</div>
                    <div className="stat-value text-primary">1,200+</div>
                    <div className="stat-desc text-white">↘︎ 90 (14%)</div>
                </div>

            </div>
        </div >
    );
};

export default BussinessRating;