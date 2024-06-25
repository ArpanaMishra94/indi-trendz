import React from 'react';
import ProductCard from './ProductCard';
import { useSelector } from 'react-redux';

const ProductList = () => {
    const products = useSelector(store => store.products.product);

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