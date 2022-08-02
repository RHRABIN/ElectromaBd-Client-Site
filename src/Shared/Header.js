import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, useLocation } from 'react-router-dom';
import auth from '../init.firebase';
import { AiOutlineMenuFold } from 'react-icons/ai';
import { IoLogoElectron } from 'react-icons/io5'
const Header = () => {

    const location = useLocation();
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        localStorage.removeItem('accessToken');
        signOut(auth)
    }
    const myLink = [
        <li><NavLink to='home' className={({ isActive }) => isActive ? 'bg-primary mx-2' : 'none mx-2'}>Home</NavLink></li>,
        <li><NavLink to='blogs' className={({ isActive }) => isActive ? 'bg-primary mx-2' : 'none mx-2'}>Blogs</NavLink></li>,
        <li><NavLink to='portfolio' className={({ isActive }) => isActive ? 'bg-primary mx-2' : 'none mx-2'}>Portfolio</NavLink></li>,


        <li>{
            user && <>
                <NavLink to='dashboard' className={({ isActive }) => isActive ? 'bg-primary mx-2' : 'none mx-2'}>Dashboard</NavLink>
            </>



        }</li>,
        <li>{
            user ?
                <button className='mx-2  bg-gradient-to-r from-orange-600 to-orange-700 text-center text-white' onClick={handleSignOut}>Logout</button>
                :
                <NavLink to='login' className={({ isActive }) => isActive ? 'bg-primary' : 'none'}>Login</NavLink>

        }</li>

    ]

    return (
        <div className='border bg-white sticky top-0 z-50 '>
            <div className="navbar  justify-between  px-4 lg:px-12  relative">


                <div className="navbar-start">

                    <div className="dropdown ">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2  shadow bg-base-100 rounded-box w-52">
                            {myLink}
                        </ul>

                    </div>

                    <NavLink to='/home' ><h1 className=' flex items-center gap-1'> <IoLogoElectron style={{ fontSize: '1.5em', color: 'red' }} /> <span className='text-xl font-bold text-red-400'>Electroma</span> </h1> </NavLink>

                </div>
                <div>
                    {location.pathname === '/dashboard' ? <label for="my-drawer-2" className="btn btn-outline  btn-info  drawer-button lg:hidden"><AiOutlineMenuFold /> </label> : ''}

                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {myLink}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Header;