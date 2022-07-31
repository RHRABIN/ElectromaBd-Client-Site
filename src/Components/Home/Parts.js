import React from 'react';
import SingleParts from './SingleParts';
import useAllParts from '../../hooks/UseAllParts';
import Loading from '../../Shared/Loading';

const Parts = () => {
    const [products, loading] = useAllParts()
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div className='mb-12 '>
            <h2 className="text-3xl px-4 lg:px-20 font-bold mt-20 mb-6 "> Our Product Collections (trending)</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-4 lg:px-20'>
                {
                    products.slice().map(product => <SingleParts
                        key={product._id}
                        product={product}
                    ></SingleParts>)
                }
            </div>

        </div>
    );
};

export default Parts;