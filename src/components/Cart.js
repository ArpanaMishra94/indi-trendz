import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ShoppingCartList from './ShoppingCartList';

const Cart = () => {

    return (
        <div className="bg-gray-100 min-h-screen">
            <Header />
            <ShoppingCartList/>
            <Footer />
        </div>
    );
};

export default Cart;