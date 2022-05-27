import { signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import auth from '../init.firebase';

const useAllParts = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate()
    useEffect(() => {
        fetch('https://peaceful-waters-42797.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setProducts(data)
            })
    }, []);
    return [products, setProducts]
};

export default useAllParts;