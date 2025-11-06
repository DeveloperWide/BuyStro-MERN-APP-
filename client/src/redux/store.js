import { configureStore } from "@reduxjs/toolkit";
import authReducers from "./authSlice/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducers,
  },
});
