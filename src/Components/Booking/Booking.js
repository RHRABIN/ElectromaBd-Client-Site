import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading';
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { AiOutlineMinusCircle } from 'react-icons/ai';
import BookinModal from './BookinModal';
import { toast } from 'react-toastify';

const Booking = () => {
    const { id } = useParams();
    const [modalData, setModalData] = useState(null);

    let iconStyles = { color: "red", fontSize: "1.5em", marginTop: '5px' };
    const [quantityOrder, setQuantityOrder] = useState(12);

    const { data: product, isLoading, refetch } = useQuery('service', () => fetch(`https://peaceful-waters-42797.herokuapp.com/service/${id}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    }).then(res => res.json()));


    if (isLoading) {
        return <Loading></Loading>
    }

    // console.log(quantityOrder, product?.minimumQuantity)

    // load single service




    const handleMinus = () => {
        setQuantityOrder(quantityOrder - 1);
        if (quantityOrder <= 13) {
            toast.error("You can't book less then 12")
        }
    }
    const handlePlus = () => {
        setQuantityOrder(quantityOrder + 1);
        if (quantityOrder >= product.quantity) {
            toast.error(`You can't book more than ${product.qunatity}`)
        }
    }
    const openModal = () => {
        setModalData(1);
    }


    return (



        <div>
            <div className="overflow-x-auto mt-12 px-1 lg:px-24">
                <table className="table w-full ">

                    <thead className='text-purple-300'>
                        <tr>
                            <th>SL</th>
                            <th>Name</th>
                            <th>Stocks</th>
                            <th>Minumum Order</th>
                            <th>price</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td className='text-red-400 font-bold'>1</td>
                            <td className='text-red-400 font-bold'>{product?.name}</td>
                            <td className='text-red-400 font-bold'>{product?.quantity}</td>
                            <td className='text-red-400 font-bold'><span className='font-bold text-center'>
                                <button disabled={quantityOrder <= 12} className='btn  btn-xs mr-2 btn-success' onClick={handleMinus}> <AiOutlineMinusCircle style={iconStyles} /> </button>

                                <input type="text" name='order' className='w-12 bg-black text-white' value={quantityOrder} />

                                <button disabled={quantityOrder >= product.quantity} className='btn btn-success btn-xs ml-2' onClick={handlePlus}><AiOutlinePlusCircle style={iconStyles} /></button></span></td>

                            <td className='text-red-400 font-bold'>$ {product?.price}</td>
                        </tr>

                    </tbody>
                </table>
            </div>
            {/* <button onClick={handleOrder} className='btn'>click</button> */}
            <div className='text-center mt-10'>
                <label onClick={openModal} for="bookingModals" className="btn  btn-info">Order Now</label>
            </div>

            {
                modalData && <BookinModal
                    key={product._id}
                    product={product}
                    refetch={refetch}
                    id={id}
                    quantityOrder={quantityOrder}
                    setModalData={setModalData}
                ></BookinModal>
            }

        </div >

    );
};

export default Booking;