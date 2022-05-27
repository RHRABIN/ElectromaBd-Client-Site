import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading';
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { AiOutlineMinusCircle } from 'react-icons/ai';
import BookinModal from './BookinModal';
import { toast } from 'react-toastify';
import BookingData from './BookingData';
import Footer from '../../Shared/Footer';

const Booking = () => {
    const { id } = useParams();

    const { data: product, isLoading, refetch } = useQuery('service', () => fetch(`https://peaceful-waters-42797.herokuapp.com/service/${id}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    }).then(res => res.json()));


    if (isLoading) {
        return <Loading></Loading>
    }




    return (



        <div>
            <BookingData
                key={product._id}
                product={product}
                id={id}
                refetch={refetch}

            ></BookingData>

            <Footer></Footer>



        </div >

    );
};

export default Booking;