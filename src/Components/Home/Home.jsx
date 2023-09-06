import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import './Home.css'
import Cart from '../Cart/Cart';
import toast from 'react-hot-toast';

const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState([]);
    const handleAddToCart = tshirt => {
        const exists = cart.find(ts => ts._id === tshirt._id);
        if (exists) {
            toast('You Have Already Added This T-Shirt');
        }
        else {
            const newCart = [...cart, tshirt];
            setCart(newCart)
        }
    }
    const handleRemoveToCart = id => {
        const remeinig = cart.filter(ts => ts._id !== id)
        setCart(remeinig)
    }
    return (
        <div className='home-container'>
            <div className='tshirt-container'>
                {
                    tshirts.map(tshirt => <TShirt
                        key={tshirt._id}
                        tshirt={tshirt}
                        handleAddToCart={handleAddToCart}
                    ></TShirt>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart} handleRemoveToCart={handleRemoveToCart}></Cart>
            </div>
        </div>
    );
};

export default Home;