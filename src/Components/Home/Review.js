import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import avatar from '../../assests/avatar.png'
import auth from '../../init.firebase';
import bgrating from '../../assests/bg-rating.jpeg'
const Review = () => {
    const [review, setReview] = useState([]);
    const [user] = useAuthState(auth)
    useEffect(() => {
        fetch('https://peaceful-waters-42797.herokuapp.com/review')
            .then(res => res.json())
            .then(data => {
                setReview(data)
            })
    }, [])
    return (
        <div className='lg:px-24 lg:p-12'
            style={{
                backgroundImage: `url(${''})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                opacity: '60'

            }}
        >
            <h1 className="text-4xl text-center lg:mt-8 font-bold text-red-400 underline ">They all loves our products</h1>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-5 lg:px-12 px-4 mt-12 mb-20'>
                {
                    review.map(r => <div key={r._id} className="card max-w-lg  shadow-2xl">
                        <div className="card-body">
                            <div className='flex items-center'>
                                <div className="avatar ">
                                    <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        {user?.photoURL ? <img src={user.photoURL} alt={r.name} /> : <img src={avatar} alt='profile' />}
                                    </div>
                                </div>
                                <div className='p-6'>
                                    {r.date}<br></br>
                                    <div className="rating rating-xs">

                                        <p>Rating: {r?.rating}</p>
                                    </div>
                                </div>
                            </div>
                            <h2 className="card-title">{r.name}</h2>
                            <p>{r.comment}</p>
                            <div className="card-actions justify-end">

                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Review;