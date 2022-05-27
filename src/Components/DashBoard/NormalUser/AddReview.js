import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../init.firebase';
import { toast } from 'react-toastify';
import f1 from '../../../assests/f1.jpeg'
const AddReview = () => {
    const [user] = useAuthState(auth);

    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {

        const review = {
            name: user.displayName,
            comment: data.comment,
            rating: data.rating,
            date: new Date().toISOString().slice(0, 10)
        }

        fetch(`https://peaceful-waters-42797.herokuapp.com/review`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast('Your comment added')
                }
            })

        reset()
    }
    return (
        <div className='flex flex-col items-center'>
            <h2 className="text-2xl text-secondary text-center mt-5 mb-1 underline">Add Review</h2>
            <div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img src={f1} alt="Shoes" /></figure>
                <div className="card-body">

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-x">
                            <textarea className="textarea textarea-bordered my-2 w-full max-w-xs" placeholder="Your comment here" {...register("comment", {
                                required: {
                                    value: true,
                                    message: 'Comment is Required'
                                },
                                minLength: {
                                    value: 20,
                                    message: 'Minimum 20 is Required'
                                },
                            })} />
                            <label className='label'>
                                {errors.comment?.type === 'required' && <p className='text-red-500'>{errors.comment.message}</p>}
                                {errors.comment?.type === 'minLength' && <p className='text-red-500'>{errors.comment.message}</p>}
                            </label>
                        </div>


                        <div className="form-control w-full max-w-xs">

                            <input type="number" placeholder="Your Rating" className="input input-bordered w-full max-w-xs" {...register("rating", {
                                required: {
                                    value: true,
                                    message: 'Rating is Required'
                                },
                                maxLength: {
                                    value: 1,
                                    message: 'Maximum length one'
                                },
                                pattern: {
                                    value: /[1-5]/,
                                    message: 'Please give 1-5 number'
                                }
                            })} />
                            <label className="label">
                                {errors.rating?.type === 'required' && <p className='text-red-500'>{errors.rating.message}</p>}
                                {errors.rating?.type === 'maxLength' && <p className='text-red-500'>{errors.rating.message}</p>}
                                {errors.rating?.type === 'pattern' && <p className='text-red-500'>{errors.rating.message}</p>}
                            </label>
                        </div>
                        <input type="submit" value={'Submit'} className="my-2 w-full mt-20 max-w-xs btn btn-info" />
                    </form>
                </div>
            </div>
        </div >
    );
};

export default AddReview;