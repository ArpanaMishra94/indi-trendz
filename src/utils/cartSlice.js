import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const productExists = state.find((item) => item.id === action.payload.id);
            if (productExists) {
              productExists.quantity++;
            } else {
              state.push({ ...action.payload, quantity: 1 });
            }
        }
    }
})

export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;