import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';
import auth from '../../init.firebase';
import Loading from '../../Shared/Loading';
import { AiOutlineMenuFold } from 'react-icons/ai'
import Footer from '../../Shared/Footer';

const DashBoard = () => {
    const [user] = useAuthState(auth);
    const [admin, adminLoad] = useAdmin(user);

    if (adminLoad) {
        <Loading></Loading>
    }
    return (
        <div className="drawer drawer-mobile">

            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

            <div className="drawer-content bg-slate-200 flex flex-col  ">
                <div className="mt-2 ml-2"><label for="my-drawer-2" className="btn btn-outline  btn-info  drawer-button lg:hidden"><AiOutlineMenuFold /></label></div>
                {/* <!-- Page content here --> */}
                <div className=''>
                    <h3 className='text-3xl text-primary mt-4 text-center'>Dashboard</h3>
                    <Outlet></Outlet>
                    <Footer></Footer>
                </div>


            </div>
            <div className="drawer-side">
                <label for="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-60 bg-slate-700 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>My Profile</Link></li>
                    {!admin && <>
                        <li><Link to='myorder'>My Orders</Link></li>
                        <li><Link to='review' >Add Review</Link></li>
                    </>}


                    {admin && <><li><Link to='makeadmin'>Make Admin</Link></li>
                        <li><Link to='addproduct'>Add New Product</Link></li>
                        <li><Link to='manageorder'>Manage All Orders</Link></li>
                        <li><Link to='manageallproduct'>Manage All Products</Link></li></>}
                </ul>

            </div>
        </div>
    );
};

export default DashBoard;