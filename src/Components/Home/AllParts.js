import React from 'react';
import useAllParts from '../../hooks/UseAllParts';
import Loading from '../../Shared/Loading';
import AllPart from './AllPart';

const AllParts = () => {
    const [products, loading] = useAllParts();
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-12'>
            {
                products.map(p => <AllPart key={p._id} p={p}></AllPart>)
            }
        </div>
    );
};

export default AllParts;