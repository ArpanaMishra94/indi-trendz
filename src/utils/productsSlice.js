import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        product: [],
        loading: true,
    },
    reducers: {
        addProduct: (state, action) => {
            state.product = action.payload;
        },
        setLoading: (state, { payload }) => {
            state.loading = payload;
        }
    }
})

export const {addProduct, setLoading} = productsSlice.actions;
export default productsSlice.reducer;