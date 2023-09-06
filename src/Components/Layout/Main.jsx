import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import { Toaster } from 'react-hot-toast';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Toaster />
        </div>
    );
};

export default Home;