import React from 'react';
import profile from '../../assests/profile.png'
import { FaGraduationCap } from 'react-icons/fa'
import Footer from '../../Shared/Footer';
const Portfolio = () => {
    return (
        <div className='grid justify-items-center mt-12'>
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
                    <h2 className='mt-5 text-center underline text-orange-300'>Educational Background</h2>
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
                                    <td>2022</td>
                                    <td>Computer</td>
                                    <td>3.70</td>
                                </tr>

                            </tbody>
                        </table>
                        <br />
                        <h1 className='text-red-400 underline text-center'>List of Technology:-</h1><br />
                        <div className='grid grid-cols-2 ml-5'>
                            <div>
                                <p>HTML-5</p>
                                <p>CSS-3</p>
                                <p>JavaScript</p>
                                <p>React JS</p>
                            </div>
                            <div>
                                <p>CSS Framework, Bootstrap, Tailwind</p>
                                <p>Node JS</p>
                                <p>Express JS</p>
                                <p>MongoDB</p>
                            </div>
                        </div>
                        <br />
                        <h3 className="text-center underline text-green-400">Live Website Link:</h3><br />
                        <div className='text-center'>
                            1. <a className="link link-secondary" href='https://smart-furniture2.web.app'>First Website</a><br />
                            2. <a className="link link-secondary" href='https://immigration-counter.web.app/'>Second Website link</a><br />
                            3. <a className="link link-secondary" href='https://precious-torrone-48e981.netlify.app'>Third website Link</a><br />
                        </div>
                    </div>

                </div>
                <Footer></Footer>
            </div>

        </div>
    );
};

export default Portfolio;