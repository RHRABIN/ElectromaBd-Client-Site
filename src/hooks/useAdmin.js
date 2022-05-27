import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import auth from "../init.firebase";
import Loading from "../Shared/Loading";

const useAdmin = (user) => {
    const [admin, setAdmin] = useState(false);
    const [adminLoad, setAdminLoad] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        const email = user?.email;
        if (email) {
            fetch(`https://peaceful-waters-42797.herokuapp.com/user/admin/${email}`, {
                method: 'GET',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {

                        localStorage.removeItem('accessToken')
                        signOut(auth)
                        navigate('/login');
                    }
                    return res.json()
                })
                .then(data => {
                    if (data.admin) {
                        setAdmin(data.admin)
                        setAdminLoad(false)
                    }


                })
        }
    }, [user, navigate])
    return [admin, adminLoad]
};

export default useAdmin;