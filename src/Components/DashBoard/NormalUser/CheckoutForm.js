import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../init.firebase';
import Loading from '../../../Shared/Loading';
const CheckoutForm = ({ order, isLoading }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('')
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const navigate = useNavigate()
    // const price = order.price;

    const { price, name, email, _id } = order;
    // fetch to receive client secreat from server
    useEffect(() => {
        fetch(`https://peaceful-waters-42797.herokuapp.com/create-payment-intent`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`

            },
            body: JSON.stringify({ price })

        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {

                    localStorage.removeItem('accessToken')
                    signOut(auth)
                    navigate('/login');
                }
                return res.json()
            })
            .then(result => {

                if (result.clientSecret) {
                    setClientSecret(result.clientSecret)
                }
            })

    }, [price])
    if (isLoading) {
        return <Loading></Loading>
    }

    // console.log(order)

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        })

        setCardError(error?.message || '')
        setSuccess('');
        setProcessing(true);
        (processing && <Loading></Loading>)

        // confirm card request
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: email,
                    },
                },
            },
        );
        if (intentError) {
            setCardError(intentError.message);
            setSuccess('')
        }
        else {
            setTransactionId(paymentIntent.id)
            setCardError('');
            setSuccess('Congress Your Pament completed');

            // stroe in database 
            const paymentInfo = {
                id: _id,
                transactionId: paymentIntent.id,
            }
            fetch(`https://peaceful-waters-42797.herokuapp.com/orderbooking/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(paymentInfo)
            }).then(res => res.json())
                .then(data => {
                    if (data.modifiedCount) {
                        navigate('/dashboard/myorder')
                        toast(<p>Congress! Your Tnx id <span className='text-green-400 font-serif'>${paymentIntent.id}</span></p>)
                    }
                    setProcessing(false)
                })
        }


    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <div className='text-center mt-8'>
                    <button className='btn btn-xs btn-info ' type="submit" disabled={!stripe || !clientSecret}>
                        Pay Now
                    </button>
                </div>
            </form>
            {
                cardError && <p className='text-red-400'>{cardError}</p>
            }
            {
                success && <p className='text-green-400'>{success}</p>
            }
        </div>
    );
};

export default CheckoutForm;