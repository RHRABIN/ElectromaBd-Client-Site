import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../init.firebase';

const BookinModal = ({ product, refetch, id, quantityOrder, setModalData }) => {
    const navigate = useNavigate()
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth);


    const onSubmit = async (data) => {


        const order = {
            product: product.name,
            name: data.name,
            email: data.email,
            phone: data.phone,
            address: data.address,
            orderQuantity: data.bookQuantity,
            price: product.price
        }
        fetch('https://peaceful-waters-42797.herokuapp.com/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(result => {
                // console.log(result)
            })
        const previousQuatity = parseInt(product.quantity);
        const inputQuantity = parseInt(data.bookQuantity);
        const quantity = (previousQuatity - inputQuantity)
        fetch(`https://peaceful-waters-42797.herokuapp.com/services/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ quantity })
        })
            .then(res => res.json())
            .then(updateResult => {
                if (updateResult.modifiedCount > 0) {
                    toast.success('Your Order Saved')
                    navigate('/home')
                }
                else {
                    toast.error('Failed to order')
                }
                setModalData(null)
                refetch()
            })



        // setQuantityError('')
        reset()
    };
    return (
        <div>


            <input type="checkbox" id="bookingModals" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">



                    <div className='grid justify-items-center mt-6 mb-6'>


                        <div className="card w-96  bg-purple-200 shadow-xl">
                            <div className="card-body">
                                <h2 className="text-2xl mb-2 text-center text-primary font-serif">Booking for : {product?.name}</h2>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-control w-full max-w-xs">

                                        <input type="text" readOnly value={user?.displayName} placeholder="Your Name" className="input input-bordered w-full max-w-xs mb-2" {...register("name")} />
                                    </div>
                                    <div className="form-control w-full max-w-xs">

                                        <input type="text" readOnly value={user?.email} className="input input-bordered w-full max-w-xs mb-2" {...register("email")} />
                                    </div>
                                    <div className="form-control w-full max-w-xs">
                                        <input type="number" value={quantityOrder} placeholder="Your item quantiy" className="input input-bordered w-full my-2 max-w-xs text-indigo-100" {...register("bookQuantity")} />
                                    </div>

                                    <div className="form-control w-full max-w-xs">

                                        <input type="text" placeholder="Your Address" className="text-indigo-100 input input-bordered w-full max-w-xs" {...register("address", {
                                            required: {
                                                value: true,
                                                message: 'Address is Required'
                                            }
                                        })} />
                                        <label className="label">
                                            {errors.address?.type === 'required' && <p className='text-red-500'>{errors.address.message}</p>}

                                        </label>
                                    </div>
                                    <div className="form-control w-full max-w-xs">

                                        <input type="text" placeholder="Your Phone" className="text-indigo-100 input input-bordered w-full max-w-xs" {...register("phone", {
                                            required: {
                                                value: true,
                                                message: 'Phone number is Required'
                                            }
                                        })} />
                                        <label className="label">
                                            {errors.phone?.type === 'required' && <p className='text-red-500'>{errors.phone.message}</p>}

                                        </label>
                                    </div>


                                    <input type="submit" value="Place Order" className=' btn  btn-info  w-full max-w-xs' />
                                </form>
                            </div>
                        </div>

                    </div>

                    <div className="text-center">
                        <label for="bookingModals" className="btn btn-error">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookinModal;