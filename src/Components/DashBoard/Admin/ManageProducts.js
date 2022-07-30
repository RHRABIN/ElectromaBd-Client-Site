import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../../init.firebase';
import Loading from '../../../Shared/Loading';
import ManageProductsRow from './ManageProductsRow';
import RemoveProductModal from './RemoveProductModal';

const ManageProducts = () => {
    const navigate = useNavigate()
    const [modalData, setModalData] = useState(null);
    const { data: products, isLoading, refetch } = useQuery('productsAll', () => fetch(`https://peaceful-waters-42797.herokuapp.com/allproducts`, {
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
        return <Loading></Loading>
    }
    return (
        <div className='px-2'>
            <h1 className="text-xl text-center text-primary">Manage All Products</h1>
            <div className="overflow-x-auto shadow-2xl">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Total Stock</th>
                            <th>Status</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => <ManageProductsRow
                                key={product._id}
                                product={product}
                                index={index}

                                setModalData={setModalData}
                            ></ManageProductsRow>)
                        }
                    </tbody>
                </table>
            </div>
            {
                modalData && <RemoveProductModal
                    modalData={modalData}
                    setModalData={setModalData}
                    refetch={refetch}
                    isLoading={isLoading}
                ></RemoveProductModal>
            }
        </div>
    );
};

export default ManageProducts;