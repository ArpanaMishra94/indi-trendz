import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: 'products',
    initialState: null,
    reducers: {
        addProduct: (state, action) => {
            return action.payload;
        }
    }
})

export const {addProduct} = productsSlice.actions;
export default productsSlice.reducer;