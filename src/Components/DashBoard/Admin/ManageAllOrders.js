import React from 'react';
import { useQuery } from 'react-query';
import ManageOrderRow from './ManageOrderRow';
import Loading from '../../../Shared/Loading';
import { signOut } from 'firebase/auth';
import auth from '../../../init.firebase';
import { useNavigate } from 'react-router-dom';

const ManageAllOrders = () => {
    const navigate = useNavigate()
    const { data: orders, isLoading, refetch } = useQuery('ordersAll', () => fetch(`https://peaceful-waters-42797.herokuapp.com/orders`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => {
        if (res.status === 401 || res.status === 403) {
            localStorage.removeItem('accessToken')
            signOut(auth)
            navigate('/login');
        }
        return res.json()
    }));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='mt-5 my-12 px-2'>
            <h1 className='text-xl text-primary font-serif text-center'>Manage order</h1>
            <div className=" shadow-2xl">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Email</th>
                            <th>Product Name</th>
                            <th>Paid/Unpaid</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((order, index) => <ManageOrderRow
                                key={order._id}
                                order={order}
                                index={index}
                                refetch={refetch}
                            ></ManageOrderRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllOrders;