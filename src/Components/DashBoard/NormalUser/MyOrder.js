import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom';
import auth from '../../../init.firebase';
import Loading from '../../../Shared/Loading';
import CancelModal from './CancelModal';
import MyOrders from './MyOrders';
const MyOrder = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate()
    const [deleteOrderData, setDeleteOrderData] = useState(null);
    const { data: orders, isLoading, refetch } = useQuery('order', () => fetch(`https://peaceful-waters-42797.herokuapp.com/order/${user?.email}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        },
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div className='my-10'>
            <h2 className="text-2xl text-orange-400 text-center mt-10 mb-2 ">Total Orders : {orders?.length}</h2>
            <div className="overflow-x-auto shadow-xl">

                {(orders.length > 0) && <table className="table w-full ">

                    <thead>
                        <tr>
                            <th>SL</th>
                            <th className='text-center'>Name</th>
                            <th className='text-center'>Item Name</th>
                            <th className='text-center'>Total Ordes</th>
                            <th className='text-center'>Total Price</th>
                            <th className='text-center'>Status</th>
                            <th className='text-center'>TnxId</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            orders?.map((order, index) => <MyOrders
                                key={order._id}
                                orders={order}
                                index={index}

                                setDeleteOrderData={setDeleteOrderData}
                                refetch={refetch}
                            ></MyOrders>)
                        }

                    </tbody>
                </table>}

            </div>

            {deleteOrderData && <CancelModal
                deleteOrderData={deleteOrderData}
                setDeleteOrderData={setDeleteOrderData}
                refetch={refetch}
            ></CancelModal>}
        </div>
    );
};

export default MyOrder;