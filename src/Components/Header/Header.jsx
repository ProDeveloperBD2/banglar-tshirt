import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/orders">Order Review</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">contact</Link>
        </nav>
    );
};

export default Header;