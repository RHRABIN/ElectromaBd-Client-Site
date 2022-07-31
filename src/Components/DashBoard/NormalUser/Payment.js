import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Loading from '../../../Shared/Loading'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import { signOut } from 'firebase/auth';
import auth from '../../../init.firebase';


const stripePromise = loadStripe('pk_test_51L1pNWGX8qAA1qto0YzN1ln7hEQQpEGcVq4wyW8TYNQBQngeCcKADhwPIQ9GeIMbL1GF8W6jFHiIuDVuxQM3j43j00Nxr4HWt5');

const Payment = () => {
    const { id } = useParams();
    const navigate = useNavigate()
    const url = `https://peaceful-waters-42797.herokuapp.com/item/${id}`;

    const { data: order, isLoading } = useQuery(['orderData', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }

    }).then(res => {
        if (res.status === 401 || res.status === 403) {

            localStorage.removeItem('accessToken')
            signOut(auth)
            navigate('/login');
        }
        return res.json()
    }))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='flex flex-col items-center'>

            <div className='card w-96 bg-base-100 shadow-xl mb-10'>
                <div className="card-body ">

                    <h2 className=' card-title text-purple-500 text-xl '>Please Pay for: {order?.product}</h2>
                    <p>Your total product: <span className='text-orange-300'>{order?.orderQuantity}</span></p>
                    <p>Your total Payment: <span className='text-orange-700 font-serif font-bold'>{order?.orderQuantity * order?.price}</span></p>

                </div>
            </div>

            <div className="card w-96 bg-sky-100 shadow-xl ">
                <div className="card-body ">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm
                            isLoading={isLoading}
                            order={order} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;