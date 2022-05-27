import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../init.firebase';
import Loading from '../Shared/Loading';
import useAdmin from './useAdmin';

const RequireAdmin = ({ children }) => {

    const [user, loading, error] = useAuthState(auth);
    const [admin, adminLoad] = useAdmin(user);
    const location = useLocation();
    if (adminLoad) {
        return <Loading></Loading>
    }


    if (loading) {
        return <Loading></Loading>
    }
    if (!user || !admin) {
        localStorage.removeItem('accessToken')
        signOut(auth)
        return <Navigate to='/login' state={{ from: location }} replace ></Navigate>
    }
    return children;

};

export default RequireAdmin;