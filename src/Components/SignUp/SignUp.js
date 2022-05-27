import React from 'react';
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../init.firebase';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import Loading from '../../Shared/Loading';
import useToken from '../../hooks/useToken'


const SignUp = () => {

    let setError;
    const navigate = useNavigate()
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [createUserWithEmailAndPassword, SignUpUser, loading, error] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    // update user profile
    const [updateProfile, updating, UpdateError] = useUpdateProfile(auth);
    const onSubmit = async (data) => {

        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });


        reset()
    };
    // handle google
    const handleGoogle = async () => {
        await signInWithGoogle();

    }


    if (error || gError) {
        setError = <p className='text-red-400 py-2'>{error?.message}{gError?.message}</p>
    }

    const [token] = useToken(SignUpUser || gUser);
    if (token) {
        navigate('/home')
    }
    return (
        <div className='grid justify-items-center mt-10'>
            <div className='flex flex-col   lg:flex-row'>
                <div className="card lg:w-96    bg-base-100 shadow-2xl">
                    <h1 className='text-center text-2xl text-primary font-bold mt-2'>Sign Up</h1>
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs" {...register("name", {
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
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid email'
                                    }
                                })} />
                                <label className="label">
                                    {errors.email?.type === 'required' && <p className='text-red-500'>{errors.email.message}</p>}
                                    {errors.email?.type === 'pattern' && <p className='text-red-500'>{errors.email.message}</p>}
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="Type password" className="input input-bordered w-full max-w-xs" {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'At least 6 character must'
                                    }
                                })} />
                                <label className="label">
                                    {errors.password?.type === 'required' && <p className='text-red-500'>{errors.password.message}</p>}
                                    {errors.password?.type === 'minLength' && <p className='text-red-500'>{errors.password.message}</p>}
                                </label>
                            </div>
                            {setError}
                            <input type="submit" value={'Sign Up'} className="btn btn-success w-full font-bold text-xl  max-w-xs mb-2" />
                        </form>
                        <p>Already have an account? <Link to='/login' className='text-primary'>Please Login</Link></p>
                    </div>

                </div>
                <div className="divider  lg:hidden lg:divider-horizontal">OR</div>
                <div className="grid flex-grow lg:ml-10 sm:mb-4 card  rounded-box place-items-center"><div className='w-full max-w-xs'>
                    <button onClick={handleGoogle} className='btn btn-outline btn-secondary w-full max-w-xs mb-2'>Continue with google</button>
                    <button className='btn btn-outline btn-primary w-full max-w-xs'>Continue with facebook</button>
                </div></div>
            </div>


        </div>
    );
};

export default SignUp;