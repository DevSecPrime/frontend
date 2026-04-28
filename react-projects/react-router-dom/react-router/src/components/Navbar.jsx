import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='text-white flex text-center justify-between px-5 bg-amber-950'>
            <span className='text-3xl '>Prime ka dhaba</span>
            <ul className='flex items-center gap-2.5 '>
                <li className='cursor-pointer'> <Link to='/'>Home</Link></li>
                <li className='cursor-pointer'><Link to='/aboutUs'>About</Link></li>
                <li className='cursor-pointer'><Link to='/contactUs'>Contact</Link></li>
                <li className='cursor-pointer'><Link to='/products'>Products</Link></li>
                <li className='cursor-pointer'><Link to="/courses">Courses</Link></li>
            </ul>
        </div>
    );
}

export default Navbar;
