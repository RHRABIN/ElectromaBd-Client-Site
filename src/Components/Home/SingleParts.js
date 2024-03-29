import React from 'react';
import { useNavigate } from 'react-router-dom';
import bg1 from '../../assests/bg1.jpg'
import Fade from 'react-reveal/Fade'
const SingleParts = ({ product }) => {
    const { name, quantity, minimumQuantity, price, description, picture, _id, badge } = product;
    const navigate = useNavigate()
    const handleBooking = (id) => {
        navigate(`/booking/${id}`)
    }
    return (
        <Fade bottom >
            <div className="card w-80  shadow-xl ">
                <figure><img className='object-cover h-40 ' src={picture} alt={name} /></figure>
                <div className="card-body " >
                    <h2 className="card-title">
                        {name}
                        {/* <div className="badge badge-warning">{badge}</div> */}
                    </h2>
                    <p>{description.slice(0, 150)}...</p>
                    <div className="card-actions justify-center">
                        <div className="badge badge-outline bg-red-600 text-white">Available: {quantity}</div>
                        <div className="badge badge-outline bg-red-600 text-white ">Minimum Order: {minimumQuantity}</div>
                        <div className="badge badge-outline bg-red-600 text-white">Price: ${price}</div>
                    </div>
                    <button onClick={() => handleBooking(_id)} className='btn font-bold'>Book Now</button>
                </div>
            </div>
        </Fade>
    );
};

export default SingleParts;