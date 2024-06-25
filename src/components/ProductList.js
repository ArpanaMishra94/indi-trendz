import React from 'react';
import ProductCard from './ProductCard';
import useProducts from '../hooks/useProducts';
import { useSelector } from 'react-redux';


const ProductList = () => {
    useProducts();
    const products = useSelector(store => store.products);

    return (
        <div className='flex flex-wrap justify-center pt-16'>
            {
                products.map((product) => (
                    <ProductCard
                        key={product.id}
                        title={product.title}
                        description={product.description}
                        image={product.image}
                        price={product.price}
                        rating={product.rating}
                        category={product.category}
                    />
                ))
            }
        </div>
    )
}
export default ProductList;