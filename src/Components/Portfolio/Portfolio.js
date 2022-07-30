import React from 'react';
import profile from '../../assests/profile.png'
import { FaGraduationCap } from 'react-icons/fa'
import Footer from '../../Shared/Footer';
const Portfolio = () => {
    return (
        <div className=' mt-12'>
            <div className="card  shadow-2xl">
                <figure className="px-10 pt-10">
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={profile} alt='profile' />
                        </div>
                    </div>

                </figure>
                <div className="card-body  ">
                    <h2 className="text-xl text-center">Rafiul Hasan Rabin</h2>
                    <h2 className='mt-5 text-center  text-orange-500'>Educational Background</h2>
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <thead>
                                <tr>

                                    <th>Class</th>
                                    <th>Passing Year</th>
                                    <th>Subject</th>
                                    <th>GPA/CGPA</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr>

                                    <td>SSC</td>
                                    <td>2017</td>
                                    <td>Science</td>
                                    <td>4.45</td>
                                </tr>
                                <tr>

                                    <td>Diplooma</td>
                                    <td>2021</td>
                                    <td>Computer</td>
                                    <td>3.75</td>
                                </tr>

                            </tbody>
                        </table>
                        <br />
                        <h1 className=' text-2xl font-bold'>List of Technology:-</h1><br />
                        <div className='flex  gap-20'>
                            <div>
                                <p>HTML-5</p>
                                <p>CSS-3</p>
                                <p>JavaScript</p>
                                <p>React JS</p>

                                <p>Tailwind Css</p>
                            </div>
                            <div>

                                <p>Node JS</p>
                                <p>Bootstrap</p>
                                <p>Express JS</p>
                                <p>MongoDB</p>
                            </div>
                        </div>
                        <br />
                        <h3 className=" mt-4 font-bold text-2xl">Live Website Link:</h3><br />
                        <div className='pb-12'>
                            1. <a className="link link-secondary" href='https://creative-agency-fire-auth.web.app/'>First Website</a><br />
                            2. <a className="link link-secondary" href='https://immigration-counter.web.app/'>Second Website link</a><br />
                            3. <a className="link link-secondary" href='https://smart-furniture2.web.app'>Third website Link</a><br />
                        </div>
                    </div>

                </div>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default Portfolio;