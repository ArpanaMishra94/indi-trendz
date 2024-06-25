import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ProductList from './ProductList';
import useProducts from '../hooks/useProducts';
import { useSelector } from 'react-redux';
import { Shimmer } from "./Shimmer";

const Hero = () => {
    useProducts();
    const loading = useSelector(store => store.products.loading);
 
    return (
        <div>
            <Header />
            {loading? <Shimmer/> : <ProductList/>}
            <Footer />
        </div>
    )
}

export default Hero;