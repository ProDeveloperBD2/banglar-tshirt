import React from 'react';

const Cart = ({ cart, handleRemoveToCart }) => {
    let massege;
    if (cart.length === 0) {
        massege = <p>Please Add Some Product...</p>
    }
    else {
        massege = <h2>Borolooxxxx</h2>
    }
    return (
        <div>
            <h2>Order Summary: {cart.length}</h2>
            {cart.length > 2 ? <span>Aro kino</span> : <span>Fokira</span>}
            {massege}
            {
                cart.map(tshirt => <p key={tshirt._id}>
                    {tshirt.name}
                    <button onClick={() => handleRemoveToCart(tshirt._id)}>X</button>
                </p>)
            }
        </div>
    );
};

export default Cart;