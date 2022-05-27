import React from 'react';

const ManageProductsRow = ({ product, index, setModalData }) => {
    const { name, picture, quantity } = product;


    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <span className="avatar">
                    <div className="lg:w-20 sm:w-12 rounded-xl">
                        <img src={picture} alt={name} />
                    </div>
                </span>
            </td>
            <td>{name}</td>
            <td>{quantity}</td>
            <td>
                <label for="removeProductModal" onClick={() => setModalData(product)} className="btn  btn-xs btn-error">Remove Product</label>
            </td>





        </tr>
    );
};

export default ManageProductsRow;