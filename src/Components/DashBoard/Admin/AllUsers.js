import { signOut } from 'firebase/auth';
import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../../init.firebase';
import Loading from '../../../Shared/Loading';
import User from './User';

const AllUsers = () => {
    const navigate = useNavigate()
    const { data, isLoading, refetch } = useQuery('users', () => fetch('https://peaceful-waters-42797.herokuapp.com/users', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => {
        if (res.status === 401 || res.status === 403) {

            localStorage.removeItem('accessToken')
            signOut(auth)
            navigate('/login');
        }
        return res.json()
    }));
    if (isLoading) {
        return <Loading ></Loading>
    }
    return (
        <div >
            <h1 className='text-center text-xl text-orange-400 mt-4'>Total user {data?.length}</h1>
            <div className="overflow-x-auto shadow-2xl px-2">
                <table className="table w-full ">

                    <thead>
                        <tr>
                            <th>SL</th>

                            <th>Email</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            (data ? data?.map((user, index) => <User
                                key={user._id}
                                userInfo={user}
                                refetch={refetch}
                                index={index}
                            ></User>) : '')
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;