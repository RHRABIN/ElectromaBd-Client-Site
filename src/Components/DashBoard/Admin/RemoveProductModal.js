import React from 'react';
import { toast } from 'react-toastify';
import Loading from '../../../Shared/Loading';
import { AiOutlineWarning } from 'react-icons/ai'
const RemoveProductModal = ({ modalData, setModalData, refetch, isLoading }) => {
    const { name, _id } = modalData;

    let iconStyles = { color: "red", fontSize: "2.5em" };
    const handleDelete = (id) => {
        fetch(`https://peaceful-waters-42797.herokuapp.com/products/deletes/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json())
            .then(result => {
                if (result.deletedCount > 0) {
                    toast.success('Successfully Delted This Product')
                    setModalData(null);
                    refetch()
                }
                else {
                    toast.error('Failed to remove! Try Agin ')
                    setModalData(null)
                }

            })
    }
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <input type="checkbox" id="removeProductModal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <div className='grid justify-items-center rounded-full my-2'><AiOutlineWarning style={iconStyles} /></div>
                    <label for="removeProductModal" className="btn btn-sm btn-circle  absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg  ">Are You Want Delete : <span className='text-orange-400'> {name}</span></h3>
                    <p className="py-4">If You want Remove Just Clic Remove button, Or cancel click croos button</p>
                    <div className="modal-action">
                        <td><button onClick={() => handleDelete(_id)} className='btn btn-xs  btn-error'>Remove Product</button></td>

                    </div>
                </div>
            </div>
        </div >
    );
};

export default RemoveProductModal;