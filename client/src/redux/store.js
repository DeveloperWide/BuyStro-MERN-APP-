import { configureStore } from "@reduxjs/toolkit";
import authReducers from "./authSlice/authSlice";
import cartReducers from "./cartSlice/cartSlice";

export const store = configureStore({
  reducer: {
    auth: authReducers,
    cart: cartReducers,
  },
});
