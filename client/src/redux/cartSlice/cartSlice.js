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

    addItem: (state, action) => {
      // action.payload = product object
      state.cart.items.push(action.payload);
    },

    removeItem: (state, action) => {
      // action.payload = id
      state.cart.items = state.items.filter(
        (item) => item._id !== action.payload
      );
    },

    updateItem: (state, action) => {
      // action.payload = { id, updates }
      const { id, updates } = action.payload;
      const index = state.cart.items.findIndex((item) => item._id === id);

      if (index !== -1) {
        state.cart.items[index] = { ...state.items[index], ...updates };
      }
    },
  },
});

export const { setCart, addItem, removeItem, updateItem } = cartSlice.actions;
export default cartSlice.reducer;
