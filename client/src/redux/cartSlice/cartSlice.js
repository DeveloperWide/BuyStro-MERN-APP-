import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action) => {
      // action.payload = whole array of cart items from backend
      state.cart = action.payload;
    },

    addItemLocal: (state, action) => {
      // action.payload = product object
      state.cart.items.push(action.payload);
    },

    removeItemLocal: (state, action) => {
      // action.payload = id
      state.cart.items = state.cart.items.filter(
        (item) => item._id !== action.payload
      );
    },

    updateItemLocal: (state, action) => {
      // action.payload = { id, quantity }
      const { id, quantity } = action.payload;

      const index = state.cart.items.findIndex((item) => item._id === id);

      if (index !== -1) {
        state.cart.items[index].quantity = quantity;
      }
    },
  },
});

export const { setCart, addItemLocal, removeItemLocal, updateItemLocal } =
  cartSlice.actions;
export default cartSlice.reducer;
