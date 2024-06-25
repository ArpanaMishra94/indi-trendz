import { useDispatch } from 'react-redux';
import {addProduct, setLoading} from '../utils/productsSlice'
import { useEffect } from 'react';

const useProducts = () => {
    const dispatch = useDispatch();

    const getProducts = async () => {
        const data = await fetch("https://fakestoreapi.com/products");
        const json = await data.json();
        dispatch(addProduct(json));
        dispatch(setLoading(false));
    }

    useEffect(() => {
        getProducts();
    }, []);
}

export default useProducts;