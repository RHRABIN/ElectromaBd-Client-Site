import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../init.firebase';
const BookingData = ({ product, id, refetch, }) => {
    const navigate = useNavigate()

    const { picture, quantity, price, name, description, minimumQuantity, _id } = product;

    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth);


    const onSubmit = async (data) => {

        const order = {
            product: product.name,
            name: user?.displayName,
            email: user?.email,
            address: data.address,
            orderQuantity: data.ordered,
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
        const quantity = (previousQuatity - inputQuantity);

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
                refetch()
            })
        reset()
    };

    return (
        <>
            <div className="hero">
                <div className="hero-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-12">
                    <img className=" w-full lg:w-[75%] " src={picture} alt="item" />
                    <div>
                        <h1 className="text-2xl font-bold"> {name?.slice(1, 70)}... </h1>
                        <p className="py-6">{description}</p>
                        <p className="mb-5 font-bold"> Product ID : {_id} </p>
                        <div>
                            <div className="badge  badge-outline">
                                Minimum Order {minimumQuantity} unit
                            </div>
                            <div className="badge  ml-6 badge-outline">
                                Available Stock {quantity} unit
                            </div>
                        </div>
                        <div className="py-4 font-bold my-3 text-primary text-lg">
                            Product Price ${price}/unit
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <div className="flex items-center justify-between flex-col lg:flex-row md:flex-row">
                                    <input
                                        type="text"
                                        value={user.displayName}
                                        readOnly
                                        placeholder="Full Name"
                                        className="input input-bordered w-full mb-5 mr-2 "
                                    />
                                    <input
                                        type="text"
                                        value={user.email}
                                        placeholder="Email Address"
                                        readOnly
                                        className="input input-bordered w-full mb-5 "
                                    />
                                </div>

                                <label className="label">
                                    {errors.address?.type === "required" && (
                                        <span className="label-text-alt text-red-500">
                                            {errors.address.message}
                                        </span>
                                    )}
                                    {errors.apt?.type === "required" && (
                                        <span className="label-text-alt text-red-500">
                                            {errors.apt.message}
                                        </span>
                                    )}
                                </label>
                                <div className="flex items-center justify-between">
                                    <input
                                        type="text"
                                        placeholder="Address"
                                        className="input input-bordered w-[78%] mb-5 "
                                        {...register("address", {
                                            required: {
                                                value: true,
                                                message: "Address is Required",
                                            },
                                        })}
                                    />

                                    <input
                                        type="text"
                                        placeholder="Apt/Suite"
                                        className="input input-bordered w-[20%] mb-5 "
                                        {...register("apt", {
                                            required: {
                                                value: true,
                                                message: "Apt/Suite is Required",
                                            },
                                        })}
                                    />
                                </div>

                                <label className="label">
                                    {errors.state?.type === "required" && (
                                        <span className="label-text-alt text-red-500">
                                            {errors.state.message}
                                        </span>
                                    )}
                                    {errors.zipCode?.type === "required" && (
                                        <span className="label-text-alt text-red-500">
                                            {errors.zipCode.message}
                                        </span>
                                    )}
                                    {errors.zipCode?.type === "pattern" && (
                                        <span className="label-text-alt text-red-500">
                                            {errors.zipCode.message}
                                        </span>
                                    )}
                                </label>
                                <div className="flex items-center justify-between">
                                    <input
                                        type="text"
                                        placeholder="State"
                                        className="input input-bordered w-[78%] mb-5 "
                                        {...register("state", {
                                            required: {
                                                value: true,
                                                message: "State is Required",
                                            },
                                        })}
                                    />

                                    <input
                                        type="text"
                                        placeholder="Zip-Code"
                                        className="input input-bordered w-[20%] mb-5 "
                                        {...register("zipCode", {
                                            required: {
                                                value: true,
                                                message: "Zip-Code is Required",
                                            },
                                            pattern: {
                                                value: /^[0-9]*$/,
                                                message: "Provide a valid Number",
                                            },
                                        })}
                                    />
                                </div>
                                <label className="label">
                                    <span className="label-text">Select Order Quantity</span>
                                </label>
                                <label className="input-group">
                                    <div className="form-control">
                                        <input
                                            {...register("ordered", {
                                                max: {
                                                    value: quantity,
                                                },
                                                min: {
                                                    value: minimumQuantity,
                                                },
                                                required: true,
                                            })}
                                            type="number"
                                            defaultValue={minimumQuantity}
                                            placeholder="Please Enter your quantity"
                                            className="input input-bordered"
                                        />
                                        {errors.ordered?.type === "max" && (
                                            <span className="text-error mt-2">
                                                Please Order less than {quantity}
                                            </span>
                                        )}
                                        {errors.ordered?.type === "min" && (
                                            <span className="text-error mt-2">
                                                Please Order more than {minimumQuantity}
                                            </span>
                                        )}
                                        {errors.ordered?.type === "required" && (
                                            <span className="text-error mt-2">Order Amount Require</span>
                                        )}
                                    </div>
                                </label>
                            </div>

                            {errors.ordered?.type === "max" ||
                                errors.ordered?.type === "min" ||
                                errors.ordered?.type === "required" ? (
                                <input
                                    type="submit"
                                    value="Place Order"
                                    disabled
                                    className={`btn btn-primary mt-5 `}
                                />
                            ) : (
                                <input
                                    type="submit"
                                    value="Place Order"
                                    className={`btn btn-primary mt-5`}
                                />
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookingData;