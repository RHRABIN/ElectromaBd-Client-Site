import React from 'react';
import { toast } from 'react-toastify';

const ManageOrderRow = ({ order, index, refetch }) => {
    const { name, email, product } = order;
    const handleShift = (id) => {
        fetch(`https://peaceful-waters-42797.herokuapp.com/order/paid/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json())
            .then(result => {
                if (result.modifiedCount > 0) {
                    toast.success('This order Shifted Successfully!');
                    refetch()
                }
                else {
                    toast.error("Failed to Shifted! Try again Later")
                }
            })
    }
    return (
        <tr>
            <td>{index + 1}</td>

            <td>{email}</td>
            <td>{product}</td>
            <td>{order.paid ? <p className='text-green-500 font-bold'>Paid</p> : <p className='text-red-400 font-bold'>Unpaid</p>}</td>

            <td>{(order.paid && !order.shift) ? <button onClick={() => handleShift(order._id)} className='btn btn-xs btn-info'>Shift</button> : <span>{order.shift ? <span className='text-primary font-semibold'>Pending</span> : ''}</span>}</td>

        </tr>
    );
};


export default ManageOrderRow;