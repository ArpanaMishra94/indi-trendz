import React from 'react';
import { useDispatch } from 'react-redux';
import {addToCart} from '../utils/cartSlice';
import { toast } from 'react-toastify';

const ProductCard = ({ product }) => {
    const {title, description, image, price, rating, category} = product;
    const dispatch = useDispatch();

    const CloseButton = ({ closeToast }) => (
        <button onClick={closeToast} className="text-[#7b8a8b] hover:text-gray-600 transition-colors duration-200">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      );

    const handleAddToCart = () => {
        dispatch(addToCart(product));
        toast(
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-[#7b8a8b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">
                  Added to cart
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  {product.title}
                </p>
              </div>
            </div>,
            {
              position:"top-center",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              className: 'bg-white shadow-md rounded-md',
                progressClassName: 'bg-[#7b8a8b]',
                bodyClassName: 'text-gray-800',
                closeButton: CloseButton,
            }
        );
    }

    return (
        <div className="max-w-xs rounded overflow-hidden shadow-lg m-4 bg-white">
            <img className="w-full rounded-md p-4 h-64 object-contain" src={image} alt={title} />

            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 truncate">{title}</div>
                <p className="text-gray-700 text-base mb-2 truncate">{description}</p>
                <p className="text-gray-600 text-sm">{category}</p>
            </div>

            <div className="px-6 pt-4 pb-2 flex justify-between items-center">
                <span className="text-xl font-bold text-gray-900">${price.toFixed(2)}</span>

                <div className="flex items-center">
                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="ml-1 text-sm text-gray-600">{rating.rate} ({rating.count})</span>
                </div>

                <div className="py-4">
                    <button
                        onClick={handleAddToCart}
                        className="w-full bg-[#7b8a8b] text-white py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        Add
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;