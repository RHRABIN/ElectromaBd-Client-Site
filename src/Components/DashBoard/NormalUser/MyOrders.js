import React from 'react';
import { Link } from 'react-router-dom';

const MyOrders = ({ orders, index, setDeleteOrderData }) => {
    const { name, orderQuantity, price, product, _id } = orders;


    return (
        <tr className='hover'>
            <td>{index + 1}</td>
            <td className='text-center'>{name}</td>
            <td className='text-center'>{product}</td>

            <td className='text-center'>{orderQuantity}</td>
            <td className='text-center'>$ {price * orderQuantity}</td>
            <td className='text-center  font-bold'>
                {(orders.price && !orders.paid) && <Link className='btn btn-xs btn-success' to={`/dashboard/payment/${_id}`} >Pay</Link>}
                {(orders.price && orders.paid) && <span className='text-success'  >PAID</span>}
            </td>
            <td className='text-center'>
                {!orders.paid ? <label for="delete-modal" onClick={() => setDeleteOrderData(orders)} className="btn  btn-xs btn-error modal-button">Cancel Order</label> : <small className='text-green-400'>{orders.transactionId}</small>}

            </td>
        </tr >
    );
};

export default MyOrders;