import React from 'react';
import { FaFlagCheckered } from 'react-icons/fa'
import { BsPeople } from 'react-icons/bs'
import { VscFeedback } from 'react-icons/vsc'
import { GrProjects } from 'react-icons/gr';
import footer from '../../assests/footer.png'
import CountUp from 'react-countup';
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
                    <div className="stat-title text-xl ">Our happy clients</div>
                    <div className="stat-value text-green-300"><CountUp start={0}
                        end={31}
                        duration={2.75}></CountUp> K+</div>
                    <div className="stat-desc ">Jan 1st - Apr 1st</div>
                </div>

                <div className="card-body  lg:w-60 ">
                    <div className="stat-figure">
                        <span className={`${circleClasses}`}><BsPeople style={iconStyles2} /></span>
                    </div>
                    <div className="stat-title text-xl ">New Users</div>
                    <div className="stat-value text-purple-300"><CountUp start={0} end={4200} duration={3.75}></CountUp>+</div>
                    <div className="stat-desc ">↗︎ 400 (22%)</div>
                </div>

                <div className="card-body lg:w-60">
                    <div className="stat-figure">
                        <span className={`${circleClasses}`}><GrProjects style={iconStyles3} /></span>
                    </div>
                    <div className="stat-title text-xl ">Our Products</div>
                    <div className="stat-value text-lime-400"><CountUp start={0} end={1600} duration={2.85}></CountUp>+</div>
                    <div className="stat-desc ">↘︎ 90 (14%)</div>
                </div>
                <div className="card-body lg:w-60">
                    <div className="stat-figure">
                        <span className={`${circleClasses}`}><VscFeedback style={iconStyles4} /></span>
                    </div>
                    <div className="stat-title text-xl ">Feedbacks</div>
                    <div className="stat-value text-primary"><CountUp start={0} end={1200} duration={2.75}></CountUp>+</div>
                    <div className="stat-desc ">↘︎ 90 (14%)</div>
                </div>

            </div>
        </div >
    );
};

export default BussinessRating;