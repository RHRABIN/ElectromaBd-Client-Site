import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../init.firebase';
import avatar from '../../assests/avatar.png'
import { toast } from 'react-toastify';
import { useQuery } from 'react-query'
const MyProfile = () => {
    const [user] = useAuthState(auth);
    // const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const { data, refetch, isLoading } = useQuery('users', () => fetch(`http://localhost:5000/userinfo/${user.email}`).then(res => res.json()))
    const handleSubmit = (event) => {
        event.preventDefault();
        const email = user.email;
        const userProfileInfo = {
            name: user.displayName,
            address: event.target.address?.value || '',
            phone: event.target.phone?.value || '',
            education: event.target.education?.value || '',
            linkdin: event.target.linkdin?.value || ''
        }
        // console.log(userProfileInfo)
        fetch(`https://peaceful-waters-42797.herokuapp.com/user/update/${email}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ userProfileInfo })

        }).then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    toast.success("Your Profile Updated Succesfully");
                    refetch()
                }
                else {
                    toast.error("Sorry! Please try again")
                }
            })
    }
    if (isLoading) {
        // return <Loading></Loading>
    }

    return (
        <div className='flex flex-col items-center'>

            <div className="card lg:w-1/2 w-80  bg-base-300 shadow-xl mt-5 mb-5">

                <figure className="">
                    <div className="avatar mt-4">
                        <div className="w-24  rounded-full">
                            {user.imageUrl ? <img src={user.imageUrl} alt="Shoes" className="rounded-xl" /> : <img src={avatar} alt='abatar' />}
                        </div>
                    </div>

                </figure>
                <div className="card-body ">

                    <h2 className="text-xl text-center">Name: {user.displayName}</h2>
                    <p className='text-center'>Email: {user.email}</p>
                    <p className='text-center'>{data?.phone ? `Phone: ${data.phone}` : ''}</p>
                    <p className='text-center'>{data?.address ? `Address: ${data.address}` : ''}</p>
                    <p className='text-center'>{data?.education ? `Study: ${data.education}` : ''}</p>

                    <small className='text-center text-orange-300'>Update Your Profile</small>



                    <div className='lg:ml-20'>
                        <form className='' onSubmit={handleSubmit}>
                            <div className="form-control w-full max-w-x">
                                <input type='text' className="input input-bordered w-full max-w-xs my-2" placeholder="Your address" name='address' required />

                            </div>
                            <div className="form-control w-full max-w-x">
                                <input type='number' className="input input-bordered w-full max-w-xs  my-2 " placeholder="Your phone number" name='phone' required />
                            </div>
                            <div className="form-control w-full max-w-x">
                                <input className="input input-bordered w-full max-w-xs  my-2" placeholder="Your Education information" name='education' required />
                            </div>


                            <div className="form-control w-full max-w-xs">

                                <input type="url" placeholder="Your Linkdin profile link " className="input input-bordered w-full max-w-xs  my-2" name='linkdin' />
                            </div>
                            <input type="submit" value={'Update'} className="my-2 w-full max-w-xs btn btn-success" />
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default MyProfile;