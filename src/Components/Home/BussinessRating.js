import React from 'react';
import { FaFlagCheckered } from 'react-icons/fa'
import { BsPeople } from 'react-icons/bs'
import { VscFeedback } from 'react-icons/vsc'
import { GrProjects } from 'react-icons/gr';
import CountUp from 'react-countup';
import Slide from 'react-reveal/Slide';

const BussinessRating = () => {
    let circleClasses = "inline-block  ml-2";

    let iconStyles = { color: "orange", fontSize: "" };
    let iconStyles2 = { color: "green", fontSize: "" };
    let iconStyles3 = { color: "green", fontSize: "" };
    let iconStyles4 = { color: "cyan", fontSize: "" };
    return (
        <div className='px-6 md:px-20 lg:px-40 mt-6'>

            <div className='grid gird-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl '>
                <div className=' border p-6 flex items-center justify-center rounded-[20px]' style={{ backgroundColor: '#D1D5DB' }}>
                    <div>
                        <h1 className='text-2xl  text-center mb-4 font-semibold'>Happy clients <span><FaFlagCheckered className={circleClasses} /></span></h1>
                        <div className="text-4xl font-bold text-center"><CountUp start={0}
                            end={32}
                            duration={2.75}></CountUp> K+</div>
                        <div className="text-center">Jan 1st - Apr 1st</div>
                    </div>
                </div>
                <div className=' border p-6 flex items-center justify-center rounded-[20px]' style={{ backgroundColor: '#D1D5DB' }}>
                    <div>
                        <h1 className='text-2xl  text-center mb-4 font-semibold'>Total Users <span><BsPeople className={circleClasses} /></span></h1>
                        <div className="text-4xl font-bold text-center"><CountUp start={0}
                            end={120}
                            duration={2.75}></CountUp> K+</div>
                        <div className="text-center">Jan 1st - Apr 1st</div>
                    </div>
                </div>
                <div className=' border p-6 flex items-center justify-center rounded-[20px]' style={{ backgroundColor: '#D1D5DB' }}>
                    <div>
                        <h1 className='text-2xl  text-center mb-4 font-semibold'>Reviews <span><VscFeedback className={circleClasses} /></span></h1>
                        <div className="text-4xl font-bold text-center"><CountUp start={0}
                            end={20}
                            duration={3.00}></CountUp> K+</div>
                        <div className="text-center">Jan 1st - Apr 1st</div>
                    </div>
                </div>
                <div className=' border p-6 flex items-center justify-center rounded-[20px]' style={{ backgroundColor: '#D1D5DB' }}>
                    <div>
                        <h1 className='text-2xl  text-center mb-4 font-semibold'>Total products<span><GrProjects className={circleClasses} /></span></h1>
                        <div className="text-4xl font-bold text-center"><CountUp start={0}
                            end={80}
                            duration={2.75}></CountUp> K+</div>
                        <div className="text-center">Jan 1st - Apr 1st</div>
                    </div>
                </div>

            </div>

            {/* <div className="stat-value text-green-300"><CountUp start={0}
                end={32}
                duration={2.75}></CountUp> K+</div>
            <div className="stat-desc ">Jan 1st - Apr 1st</div> */}
        </div >
    );
};

export default BussinessRating;