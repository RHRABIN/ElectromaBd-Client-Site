import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../init.firebase';
import { toast } from 'react-toastify';
const User = ({ userInfo, refetch, index }) => {
    const [user] = useAuthState(auth);

    const { email, name } = userInfo;

    const handleMakeAdmin = () => {
        fetch(`https://peaceful-waters-42797.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json())
            .then(data => {

                if (data.modifiedCount > 0) {
                    toast.success('Succesfully make admin');
                    refetch()

                }
                else {
                    toast.error('Failed to make admin. try again!!')
                }
            })
    }

    return (
        <tr className=''>
            <th>{index + 1}</th>

            <td>{email}</td>
            <td>{!userInfo.role ? <button onClick={() => handleMakeAdmin(email)} className='btn btn-xs btn-primary'>make admin</button> : <span className='text-green-500 font-bold'>Admin</span>}</td>
        </tr>
    );
};

export default User;