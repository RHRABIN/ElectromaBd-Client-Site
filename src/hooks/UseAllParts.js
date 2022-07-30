import { signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import auth from '../init.firebase';

const useAllParts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    useEffect(() => {
        fetch('https://peaceful-waters-42797.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setProducts(data)
                setLoading(false)
            })
    }, []);

    return [products, loading]
};

export default useAllParts;