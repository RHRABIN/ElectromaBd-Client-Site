import React from 'react';
import { useNavigate } from 'react-router-dom';
import bg1 from '../../assests/bg1.jpg'
const SingleParts = ({ product }) => {
    const { name, quantity, minimumQuantity, price, description, picture, _id, badge } = product;
    const navigate = useNavigate()
    const handleBooking = (id) => {
        navigate(`/booking/${id}`)
    }
    return (
        <div className="card  shadow-2xl ">
            <figure><img className='object-cover h-40 ' src={picture} alt={name} /></figure>
            <div className="card-body " >
                <h2 className="card-title">
                    {name}
                    {/* <div className="badge badge-warning">{badge}</div> */}
                </h2>
                <p>{description}</p>
                <div className="card-actions justify-center">
                    <div className="badge badge-outline bg-red-600 text-white">Available: {quantity}</div>
                    <div className="badge badge-outline bg-red-600 text-white ">Minimum Order: {minimumQuantity}</div>
                    <div className="badge badge-outline bg-red-500 text-white">Price: ${price}</div>
                </div>
                <button onClick={() => handleBooking(_id)} className='btn btn-outline btn-info font-bold'>Book Now</button>
            </div>
        </div>
    );
};

export default SingleParts;