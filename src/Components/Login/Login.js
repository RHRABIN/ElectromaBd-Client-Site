import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useToken from '../../hooks/useToken';
import auth from '../../init.firebase';
import Loading from '../../Shared/Loading';
const Login = () => {
    let setError;
    const navigate = useNavigate();
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/';
    const [email, setEmail] = useState('');
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    // handle google 
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [sendPasswordResetEmail, sending, errorReset] = useSendPasswordResetEmail(auth);

    // handle submit by email and password
    const onSubmit = async (data) => {
        await signInWithEmailAndPassword(data.email, data.password);
        reset()
    };
    // handle google sign in
    const handleGoogle = () => {
        signInWithGoogle()
    }
    // handle reset password
    const handleForgetPassword = async (email) => {
        console.log(email)
        if (email) {
            await sendPasswordResetEmail(email)
            toast("Verification Email Send")
        }
        else {
            toast.warning("Enter a Valid Email")
        }
    }
    const [token] = useToken(user || gUser);

    // handle loadin error and navigate
    if (loading || gLoading || sending) {
        return <Loading></Loading>
    }
    if (error || gError || errorReset) {
        setError = <p className='text-red-400 py-2'>{error?.message}{gError?.message}{errorReset?.message}</p>
    }
    if (token) {
        navigate(from, { replace: true });
    }


    return (
        <div className='grid  justify-items-center mt-10 mb-10'>
            <div className="card lg:w-96   bg-base-100 shadow-2xl">
                <h1 className='text-center text-2xl text-primary font-bold mt-2'>Login</h1>
                <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="Your email" className="input input-bordered w-full max-w-xs" {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is Required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid email'
                                }
                            })} onChange={(e) => setEmail(e.target.value)} />
                            <label className="label">
                                {errors.email?.type === 'required' && <p className='text-red-500'>{errors.email.message}</p>}
                                {errors.email?.type === 'pattern' && <p className='text-red-500'>{errors.email.message}</p>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Your password" className="input input-bordered w-full max-w-xs" {...register("password", {
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
                        <input type="submit" value={'Login'} className="btn w-full font-bold text-xl  max-w-xs mb-2" />
                    </form>
                    <p>New to Electroma? <Link to='/signup' className='text-primary font-semibold'>Please Sign Up</Link></p>
                    <p><button onlClick onClick={() => handleForgetPassword(email)} className='text-primary font-semibold'>Forget Password?</button></p>
                </div>
                <div className="divider  px-6">OR</div>

                <div className=" lg:ml-10  mb-4  rounded-box place-items-center">
                    <div className=' max-w-xs flex justify-center'>
                        <button onClick={handleGoogle} className='btn btn-outline btn-secondary  max-w-xs mr-4'>google</button>
                        <button className='btn btn-outline btn-primary  max-w-xs'>facebook</button>
                    </div>
                </div>
            </div>
        </div>




    );
};

export default Login;