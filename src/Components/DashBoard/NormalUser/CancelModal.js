import React from 'react';
import { toast } from 'react-toastify';
import { AiOutlineWarning } from 'react-icons/ai'

const CancelModal = ({ deleteOrderData, setDeleteOrderData, refetch }) => {
    const { _id, product } = deleteOrderData;
    let iconStyles = { color: "red", fontSize: "2.5em" };

    // console.log(deleteOrderData)
    const handleDelete = () => {

        fetch(`https://peaceful-waters-42797.herokuapp.com/order/${_id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(result => {

                setDeleteOrderData(null)
                toast.success('This Order is canceled')
                refetch()
            })
    }
    return (
        <div>
            <input type="checkbox" id="delete-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <div className='grid justify-items-center rounded-full my-2'><AiOutlineWarning style={iconStyles} /></div>
                    <h3 className="font-bold text-lg text-red-300 text-center">Are you want to Cancel : {product}</h3>
                    <p className="py-4">If you delte confirm just click Delte, Or Cancel for Close the modal.</p>
                    <div className="modal-action">
                        <button onClick={handleDelete} className='btn btn-xs btn-error'>Delete</button>
                        <label for="delete-modal" className="btn btn-xs  btn-outline">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default CancelModal;