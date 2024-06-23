import React, { useState } from 'react';
import logo from "../assets/logo.png";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Header = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    const navItems = [
        { id: 1, text: 'Cart', icon: <FaShoppingCart size={25} color='white' />, route: '/cart' },
        { id: 2, text: 'Profile', icon: <FaUser size={25} color='white' />, route: '/' },
    ];

    return (
        <header className='bg-[#7b8a8b] flex justify-between items-center h-24 mx-auto px-4 text-white'>
            <Link to='/' className='flex items-center cursor-pointer'>
                <img src={logo} alt="indiTrendz" />
                <h1 className='text-white w-full text-3xl font-bold'>Indi trendz</h1>
            </Link>

             {/* Desktop Navigation */}
            <ul className='hidden md:flex'>
                {navItems.map(item => (
                    <Link to={item.route}>
                        <li
                            key={item.id}
                            className='p-4 hover:bg-[#b5c0c1] flex gap-1 rounded-xl m-2 cursor-pointer duration-300 hover:text-black'
                        >
                            {item.icon}
                            {item.text}
                        </li>
                    </Link>
                ))}
            </ul>

             {/* Mobile Navigation */}

            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>

            <ul
                className={
                    nav
                        ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#7b8a8b] ease-in-out duration-500'
                        : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
                    }
                >
                <h1 className='w-full text-3xl font-bold text-white m-4'>Cart</h1>

                {navItems.map(item => (
                    <Link to={item.route}>
                        <li
                            key={item.id}
                            className='p-4 flex gap-1 border-b rounded-xl hover:bg-[#b5c0c1] duration-300 hover:text-black cursor-pointer border-gray-600'
                        >
                            {item.icon}
                            {item.text}
                        </li>
                    </Link>
                ))}
            </ul>
        </header>
    )
}

export default Header;