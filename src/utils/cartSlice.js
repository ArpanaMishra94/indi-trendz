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
        },
        removeFromCart: (state, action) => {
          return state.filter((item) => item.id !== action.payload.id);
        },
        updateQuantity: (state, action) => {
          const {id, quantity} = action.payload;
          const item = state.find((item) => item.id === id);
          if(item) {
            item.quantity = quantity;
          }
        }
    }
})

export const {addToCart, removeFromCart, updateQuantity} = cartSlice.actions;
export default cartSlice.reducer;