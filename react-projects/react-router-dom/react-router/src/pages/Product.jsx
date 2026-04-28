import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Product = () => {
    return (
        <div className='text-white flex justify-center items-center min-h-screen text-6xl flex-col'>
            <div className='flex gap-x-10'>
                <Link to="/products/men">men</Link>
                <Link to="/products/women">Women</Link>
            </div>
            <Outlet />
        </div>
    );
}

export default Product;
