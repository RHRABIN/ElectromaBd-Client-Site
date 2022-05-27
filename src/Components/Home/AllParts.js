import React from 'react';
import useAllParts from '../../hooks/UseAllParts';
import AllPart from './AllPart';

const AllParts = () => {
    const [products] = useAllParts();


    return (
        <div className='grid sm:grid-cols-1 lg:grid-cols-4 gap-5 px-12'>
            {
                products.map(p => <AllPart key={p._id} p={p}></AllPart>)
            }
        </div>
    );
};

export default AllParts;