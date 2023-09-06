import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <h2>Banglar T-Shirt</h2>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/orders">Order Review</Link>
                <Link to="/about">About</Link>
                <Link to="/grandpa">Grandpa</Link>
                <Link to="/contact">contact</Link>
            </nav>
        </div>
    );
};

export default Header;