import { useDispatch } from 'react-redux';
import {addProduct} from '../utils/productsSlice'
import { useEffect } from 'react';

const useProducts = () => {
    const dispatch = useDispatch();

    const getProducts = async () => {
        const data = await fetch("https://fakestoreapi.com/products");
        const json = await data.json();
        dispatch(addProduct(json));
    }

    useEffect(() => {
        getProducts();
    }, []);
}

export default useProducts;