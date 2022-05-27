import React from 'react';
import { useNavigate } from 'react-router-dom';

const AllPart = ({ p }) => {
    const navigate = useNavigate()
    const handleBooking = (id) => {
        navigate(`/booking/${id}`)
    }
    return (
        <div className="card  shadow-xl">

            <figure><img width={200} className='' src={p.picture} alt={p.name} /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {p.name}
                    <div className="badge badge-warning">{p.badge}</div>
                </h2>
                <p>{p.description}</p>
                <div className="card-actions justify-center">
                    <div className="badge badge-outline hover:bg-orange-200 ">Available: {p.quantity}</div>
                    <div className="badge badge-outline hover:bg-orange-200 ">Minimum Order: {p.minimumQuantity}</div>
                    <div className="badge badge-outline sm:bg-slate-300">Price: ${p.price}</div>
                </div>
                <button onClick={() => handleBooking(p._id)} className='btn btn-outline btn-info font-bold'>Book Now</button>
            </div>
        </div>
    );
};

export default AllPart;