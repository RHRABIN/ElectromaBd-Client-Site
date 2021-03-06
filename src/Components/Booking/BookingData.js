import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiOutlinePlusCircle } from 'react-icons/ai'
import { AiOutlineMinusCircle } from 'react-icons/ai';
import BookinModal from './BookinModal';
const BookingData = ({ product, id, refetch, }) => {
    const { picture, quantity, price, name, description, minimumQuantity, } = product;
    const [inputQuantity, setInputQuantity] = useState(minimumQuantity);
    const [totalPrice, setTotalPrice] = useState(minimumQuantity * price);
    const [modalData, setModalData] = useState(null);
    const openModal = () => {
        setModalData(1);
    }

    return (
        <div>

            <div className="hero min-h-screen bg-base-200 shadow-xl px-4">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={picture} className="lg:max-w-sm w-60  rounded-lg lg:shadow-2xl" alt='pictures' />
                    <div>
                        <h1 className="text-5xl font-bold">{name}</h1>
                        <p className="py-6">{description}</p>
                        <div className='lg:flex lg:mt-6'>
                            <p className='bg-cyan-200 mb-1 text-center lg:p-2 p-1 lg:px-6  text-red-400' >Total Stocks: {quantity}</p>
                            <p className='lg:ml-4 ml:1 text-center bg-cyan-200 p-1  lg:p-2 text-red-400' >Minimum Order Quantity: {minimumQuantity}</p>

                        </div>
                        <div className='lg:flex'>
                            <p className='bg-sky-100 lg:p-2 p-1 text-red-400 mt-2 text-center font-bold mr-2'>Price Per Product: ${price}</p>
                            <p className='bg-sky-100 lg:p-2 p-1 text-red-400 mt-2 text-center font-bold lg:ml-2'>Total Price: ${totalPrice}</p>

                        </div>

                        <div className='flex justify-center items-center'>
                            <button disabled={inputQuantity <= minimumQuantity} onClick={() => {
                                setInputQuantity(inputQuantity - 1)
                                setTotalPrice(inputQuantity * price)
                            }} className='btn mt-4 btn-sm btn-outline btn-info mr-4' ><AiOutlineMinus style={{ fontSize: '2.0em', }} /></button>

                            <input className='mt-4 w-20 text-center text-xl text-red-500' value={inputQuantity} type="text" name="quantity" id="quantity" />

                            <button onClick={() => {
                                setInputQuantity(inputQuantity + 1)
                                setTotalPrice(inputQuantity * price)
                            }} className='btn mt-4 btn-sm btn-outline btn-info ml-4'><AiOutlinePlus style={{ fontSize: '2.0em' }} /></button>
                        </div>

                        {
                            modalData && <BookinModal
                                key={product._id}
                                product={product}
                                refetch={refetch}
                                id={id}
                                quantityOrder={inputQuantity}
                                setModalData={setModalData}
                            ></BookinModal>
                        }
                    </div>

                </div>
            </div>
            <div className='text-center mt-10'>
                <label onClick={openModal} for="bookingModals" className="btn  btn-info">Order Now</label>
            </div>
        </div>
    );
};

export default BookingData;