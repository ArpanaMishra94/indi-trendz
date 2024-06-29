import React from 'react';
import { removeFromCart, updateQuantity } from '../utils/cartSlice';
import { useDispatch } from 'react-redux';

const ShoppingCartCard = ({ product }) => {
  const {id, title, quantity, image, price} = product;
  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(product));
  }

  const handleQuantityChange = (id, newQuantity) => {
    if(newQuantity > 0) {
      dispatch(updateQuantity({id, quantity: newQuantity}));
    }
  }

  return (
    <div className="flex items-center py-4 border-b">
      <img src={image} alt={title} className="w-20 h-20 object-cover mr-4" />

      <div className="flex-grow">
        <h3 className="text-lg text-[#636f70] font-semibold">{title}</h3>
        <p className="text-[#636f70]">${price.toFixed(2)}</p>
      </div>

      <div className="flex items-center">
        <input
          type="number"
          value={quantity}
          onChange={(e) => handleQuantityChange(id, parseInt(e.target.value))}
          className="w-16 p-1 mr-2 border rounded text-center"
          min="1"
        />

        <button onClick={handleRemoveFromCart} className="text-gray-600 hover:text-red-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default ShoppingCartCard;