import { createSlice } from "@reduxjs/toolkit";

// Helper function to recalc total
const calculateTotal = (items) => {
  return items.reduce((prev, item) => prev + item.price * item.quantity, 0);
};

const initialState = {
  cart: {
    user: null,
    items: [],
    totalPrice: 0,
  },
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action) => {
      // Full cart from backend
      state.cart = action.payload;
    },

    addItemLocal: (state, action) => {
      // Add new product
      state.cart.items.push(action.payload);
      state.cart.totalPrice = calculateTotal(state.cart.items);
    },

    removeItemLocal: (state, action) => {
      // Remove by id
      state.cart.items = state.cart.items.filter(
        (item) => item._id !== action.payload
      );
      state.cart.totalPrice = calculateTotal(state.cart.items);
    },

    updateItemLocal: (state, action) => {
      // Update quantity
      const { id, quantity } = action.payload;
      const index = state.cart.items.findIndex((item) => item._id === id);
      if (index !== -1) {
        state.cart.items[index].quantity = quantity;
      }
      state.cart.totalPrice = calculateTotal(state.cart.items);
    },
  },
});

export const { setCart, addItemLocal, removeItemLocal, updateItemLocal } =
  cartSlice.actions;

export default cartSlice.reducer;
