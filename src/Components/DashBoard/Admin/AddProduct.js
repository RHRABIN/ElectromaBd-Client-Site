import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
    // const [user] = useAuthState(auth);

    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const imageStorageKey = "b4c116253bc813b71c0b6c9cfa8a03e9";

    const onSubmit = (data) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                // console.log('imgbb', result)
                if (result.success) {
                    const img = result.data.url;
                    const product = {
                        name: data.name,
                        minimumQuantity: data.minimumQuantity,
                        quantity: data.quantity,
                        price: data.price,
                        description: data.description,
                        picture: img,
                    }
                    fetch('https://peaceful-waters-42797.herokuapp.com/product', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(inserted => {

                            if (inserted.insertedId) {
                                toast.success('Added Product succesfully')
                                reset()
                            }
                            else {
                                toast.error('Failed to add the product')
                                reset()
                            }
                        })
                }

            })

        // console.log(data)

    }






    return (
        <div className='flex flex-col items-center'>
            <h2 className="text-2xl text-secondary text-center mt-5">Add New Product</h2>
            <div className="card w-80 lg:w-96  shadow">

                <div className="card-body">

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">

                            <input type="text" placeholder="Product name" className="input input-bordered w-full max-w-xs" {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is Required'
                                }
                            })} />
                            <label className="label">
                                {errors.name?.type === 'required' && <p className='text-red-500'>{errors.name.message}</p>}
                            </label>
                        </div>


                        <div className="form-control w-full max-w-xs">

                            <input type="number" placeholder="Total Quantity" className="input input-bordered w-full max-w-xs" {...register("quantity", {
                                required: {
                                    value: true,
                                    message: 'Quantity is Required'
                                }
                            })} />
                            <label className="label">
                                {errors.quantity?.type === 'required' && <p className='text-red-500'>{errors.quantity.message}</p>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">

                            <input type="number" placeholder="Minumum Quantity" className="input input-bordered w-full max-w-xs" {...register("minimumQuantity", {
                                required: {
                                    value: true,
                                    message: 'Minimum Quantity is Required'
                                }
                            })} />
                            <label className="label">
                                {errors.minimumQuantity?.type === 'required' && <p className='text-red-500'>{errors.minimumQuantity.message}</p>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">

                            <input type="number" placeholder="Per product price" className="input input-bordered w-full max-w-xs" {...register("price", {
                                required: {
                                    value: true,
                                    message: 'Price is Required'
                                }
                            })} />
                            <label className="label">
                                {errors.price?.type === 'required' && <p className='text-red-500'>{errors.price.message}</p>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">

                            <input type="file" className="input input-bordered w-full pt-2 max-w-xs" {...register("image", {
                                required: {
                                    value: true,
                                    message: 'Image is Required'
                                }
                            })} />
                            <label className="label">
                                {errors.image?.type === 'required' && <p className='text-red-500'>{errors.image.message}</p>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-x">
                            <textarea className="textarea textarea-bordered my-2 w-full max-w-xs" placeholder="Add description" {...register("description", {
                                required: {
                                    value: true,
                                    message: 'Description is Required'
                                }
                            })} />
                            <label className='label'>
                                {errors.description?.type === 'required' && <p className='text-red-500'>{errors.description.message}</p>}
                            </label>
                        </div>
                        <input type="submit" value={'Submit'} className="my-2 w-full max-w-xs btn btn-info" />
                    </form>
                </div>
            </div>
        </div >
    );
};

export default AddProduct;