import React from 'react';
import './TShirt.css'
import { Link } from 'react-router-dom';

const TShirt = ({ tshirt, handleAddToCart }) => {
    const { picture, name, price, _id } = tshirt;
    return (
        <div className='tshirt-compo'>
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <h4>Price <span>${price}</span></h4>
            <Link>
                <button onClick={() => handleAddToCart(tshirt)}>
                Buy Now
            </button>
        </Link>
        </div >
    );
};

export default TShirt;