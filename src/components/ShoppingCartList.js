import React from 'react';
import ShoppingCartCard from './ShoppingCartCard';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ShoppingCartList = () => {
    const cartItems = useSelector(store => store.cart);

    if (cartItems.length === 0) {
        return (
          <div className="container mx-auto px-4 py-8  pt-28">
            <div className="bg-[#e4f8fa] rounded border-t border-b border-[#7b8a8b] text-[#505a5b] px-4 py-3">
              <p className="text-sm">Your cart is empty <Link to="/" className="underline font-semibold">Go Back</Link></p>
            </div>
          </div>
        );
      }

    return (
        <div className="container mx-auto px-4 py-8 pt-16">
            <h1 className="text-3xl pt-8 font-bold mb-6">Shopping Cart</h1>
            <div className="bg-white rounded-lg shadow-md p-6">
                {cartItems.map((item) => (
                    <ShoppingCartCard
                        key={item.id}
                        product={item}
                    />
                ))}
            </div>
        </div>
    )
}

export default ShoppingCartList;