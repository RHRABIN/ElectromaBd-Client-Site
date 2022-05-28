import React, { useState, useEffect } from 'react';
import SingleParts from './SingleParts';
import bg1 from '../../assests/bg1.jpg'
import { useNavigate } from 'react-router-dom';
import useAllParts from '../../hooks/UseAllParts';

const Parts = () => {
    const [products, setProducts] = useAllParts()
    // navigate all items page
    // const navigate = useNavigate()
    // const handleSeeAll = () => {
    //     navigate('/allparts')
    // }
    return (
        <div className='mb-12 '>
            <h2 className="text-3xl text-center mt-20 mb-12 text-purple-500 font-bold ">Our Product Collections</h2>
            <div className='grid sm:grid-cols-1 lg:grid-cols-4 gap-5 px-4 lg:px-20'>
                {
                    products.slice().map(product => <SingleParts
                        key={product._id}
                        product={product}
                    ></SingleParts>)
                }
            </div>
            {/* <div className='text-center m-3 '>
                <button onClick={handleSeeAll} className='btn btn-success bg-gradient-to-r from-primary to-blue-500 px-12'>See ALL</button>
            </div> */}
        </div>
    );
};

export default Parts;