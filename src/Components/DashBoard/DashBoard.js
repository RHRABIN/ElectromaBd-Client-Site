import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';
import auth from '../../init.firebase';
import Loading from '../../Shared/Loading';
import { FaRegCommentAlt } from 'react-icons/fa';
import { MdOutlineManageAccounts } from 'react-icons/md';
import { BsCartCheck } from 'react-icons/bs'
import { RiAdminLine } from 'react-icons/ri'
import { AiOutlineShopping } from 'react-icons/ai'
import { GiTempleGate } from 'react-icons/gi'
import { GrCart } from 'react-icons/gr'
import { AiOutlineMenuFold } from 'react-icons/ai';

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
                {/* <div className="mt-2 ml-2"><label for="my-drawer-2" className="btn btn-outline  btn-info  drawer-button lg:hidden"><AiOutlineMenuFold /></label></div> */}
                {/* <!-- Page content here --> */}
                <div className=''>

                    <Outlet></Outlet>
                    <Footer></Footer>
                </div>


            </div>
            <div className="drawer-side">
                <label for="my-drawer-2" className="drawer-overlay"></label>
                <ul style={{ backgroundColor: '#F9FBFA' }} className="menu p-4 overflow-y-auto w-60  text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'><span className='flex justify-center items-center gap-2'><MdOutlineManageAccounts /> My Profile</span></Link></li>
                    {!admin && <>
                        <li><Link to='myorder'><span className='flex justify-center items-center gap-2'><BsCartCheck /> My Orders</span></Link></li>
                        <li><Link to='review' ><span className='flex justify-center items-center gap-2'><FaRegCommentAlt /> Add Review</span></Link></li>
                    </>}


                    {admin && <>
                        <li><Link to='addproduct'><span className='flex justify-center items-center gap-2'><AiOutlineShopping /> Add New Product</span></Link></li>
                        <li><Link to='manageorder'><span className='flex justify-center items-center gap-2'><GrCart />Manage All Orders</span></Link></li>
                        <li><Link to='manageallproduct'><span className='flex justify-center items-center gap-2'><GiTempleGate />Manage All Products</span></Link></li>
                        <li><Link to='makeadmin'><span className='flex justify-center items-center gap-2'><RiAdminLine /> Make Admin</span></Link></li></>}

                </ul>

            </div>
        </div>
    );
};

export default DashBoard;