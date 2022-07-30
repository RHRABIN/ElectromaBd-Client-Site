import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../init.firebase';
import logo from '../assests/logo.png'
const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        localStorage.removeItem('accessToken');
        signOut(auth)
    }
    const myLink = [
        <li><NavLink to='blogs' className={({ isActive }) => isActive ? 'bg-primary mx-2' : 'none mx-2'}>Blogs</NavLink></li>,
        <li><NavLink to='portfolio' className={({ isActive }) => isActive ? 'bg-primary mx-2' : 'none mx-2'}>Portfolio</NavLink></li>,


        <li>{
            user && <>
                <NavLink to='dashboard' className={({ isActive }) => isActive ? 'bg-primary mx-2' : 'none mx-2'}>Dashboard</NavLink>
            </>



        }</li>,
        <li>{
            user ?
                <button className='mx-2' onClick={handleSignOut}>Logout</button>
                :
                <NavLink to='login' className={({ isActive }) => isActive ? 'bg-primary' : 'none'}>Login</NavLink>

        }</li>

    ]

    return (
        <div>
            <div className="navbar  px-4 lg:px-12">


                <div className="navbar-start">

                    <div className="dropdown ">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2  shadow bg-base-100 rounded-box w-52">
                            {myLink}
                        </ul>

                    </div>

                    <NavLink to='/home' ><img className='h-16 w-32' src={logo} alt="" /> </NavLink>
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