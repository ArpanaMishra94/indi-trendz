import React from 'react';
import logo from "../utils/assets/logo.png";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <header className='bg-gray-400 sticky top-0 z-[1] mx-auto flex w-full items-center justify-between flex-wrap p-5'>
            <Link to = '/' className='flex items-center cursor-pointer'>
                <img src={logo} alt="indiTrendz" />
                <span className='text-white text-xl font-bold'>Indi trendz</span>
            </Link>
                <div className='flex items-center justify-end mr-9 gap-8 overflow-hidden'>
                    <Link to = '/cart' className='flex items-center gap-2 cursor-pointer'>
                        <FaShoppingCart size={25} color='white' />
                        <span className='text-white'>Cart</span>
                    </Link>
                    <div className='flex items-center gap-2'>
                        <FaUser size={25} color='white' />
                        <span className='text-white'>Arpana</span>
                    </div>
                </div>
        </header>
    )
}

export default Header;