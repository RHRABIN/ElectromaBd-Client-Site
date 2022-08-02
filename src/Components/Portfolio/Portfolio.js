import React from 'react';
import profile from '../../assests/profile.JPG'
import { FaGraduationCap } from 'react-icons/fa'
import Footer from '../../Shared/Footer';
const Portfolio = () => {
    return (
        <div className=' mt-12'>
            <div className="grid grid-rows-1 lg:grid-cols-2 card  shadow-2xl">
                <figure className="px-2 pt-10">
                    <div className="avatar">
                        <div className="w-full">
                            <img src={profile} alt='profile' />
                        </div>
                    </div>

                </figure>
                <div className="px-2 lg:px-10 ">
                    <div className='flex flex-wrap  gap-4 '>
                        <a href='https://www.facebook.com/rh.rabin.735' className='btn btn-warning btn-sm'>Facebook</a>
                        <a href='https://github.com/RHRABIN' className='btn btn-warning btn-sm'>Github</a>
                        <a href='https://drive.google.com/file/d/15DABSo2WzSWwopCRNTCxzaXZX0LBwIyh/view?usp=sharing' className='btn btn-warning btn-sm'>Resume</a>
                        <a href='https://check-how-firebase--delete.web.app/' className='btn btn-warning btn-sm'>Portfolio</a>
                    </div>
                    <h2 className='mt-5 text-2xl font-bold mb-2 flex items-center gap-2'>Educational Background <FaGraduationCap /> </h2>
                    <div className="">
                        <table className="table ">
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
                        <h1 className=' text-2xl font-bold'>List of Technology <span className='text-green-400'>Comfortable</span></h1><br />
                        <div className='flex gap-2 flex-wrap'>

                            <p className='bg-slate-300  text-center px-4'>HTML-5</p>
                            <p className='bg-slate-300  text-center px-4'>CSS-3</p>
                            <p className='bg-slate-300  text-center px-4'>JavaScript</p>
                            <p className='bg-slate-300  text-center px-4'>React JS</p>
                            <p className='bg-slate-300  text-center px-4'>Tailwind Css</p>
                            <p className='bg-slate-300  text-center px-4'>React Router</p>
                            <p className='bg-slate-300  text-center px-4'>Bootstrap</p>

                        </div>
                        <h1 className=' text-2xl font-bold mt-6'>List of Technology <span className='text-green-400'>Familiar</span></h1><br />
                        <div className='flex gap-2 flex-wrap'>

                            <p className='bg-slate-300  text-center px-4'>Node JS</p>
                            <p className='bg-slate-300  text-center px-4'>Express Js</p>
                            <p className='bg-slate-300  text-center px-4'>MongoDB</p>
                            <p className='bg-slate-300  text-center px-4'>Rest API</p>
                            <p className='bg-slate-300  text-center px-4'>JWT</p>

                        </div>
                        <h1 className=' text-2xl font-bold mt-6'>List of <span className='text-green-400'>Tools and Technology</span></h1><br />
                        <div className='flex gap-2 flex-wrap'>

                            <p className='bg-slate-300  text-center px-4'>Git</p>
                            <p className='bg-slate-300  text-center px-4'>Netlify</p>
                            <p className='bg-slate-300  text-center px-4'>Heroku</p>
                            <p className='bg-slate-300  text-center px-4'>Chrome Dev Tool</p>
                            <p className='bg-slate-300  text-center px-4'>Firebase</p>
                            <p className='bg-slate-300  text-center px-4'>Figma</p>
                            <p className='bg-slate-300  text-center px-4'>Vs Code</p>
                            <p className='bg-slate-300  text-center px-4'>Github</p>

                        </div>
                        <br />
                        <h3 className=" mt-4 font-bold text-2xl">Live Website Link:</h3><br />
                        <div className='pb-12'>
                            1. <a className="link link-secondary" href='https://creative-agency-fire-auth.web.app/'>Creative Agency</a><br />
                            2. <a className="link link-secondary" href='https://immigration-counter.web.app/'>Immigration Counter</a><br />
                            3. <a className="link link-secondary" href='https://smart-furniture2.web.app'>Smart Furniture</a><br />
                        </div>
                    </div>

                </div>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default Portfolio;