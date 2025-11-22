import axios from "axios";
import { setAccessToken, setUser } from "../redux/authSlice/authSlice";
import { setCart } from "../redux/cartSlice/cartSlice";

export const login = (formData) => async (dispatch) => {
  axios
    .post("/api/auth/login", formData)
    .then((res) => {
      console.log("Signup : ", res.data);
      dispatch(setAccessToken(res.data.accessToken));
      dispatch(setUser(res.data.user));
      dispatch(setCart(res.data.cart));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const signup = (formData) => async (dispatch) => {
  axios
    .post("/api/auth/signup", formData)
    .then((res) => {
      console.log("Signup : ", res.data);
      dispatch(setAccessToken(res.data.accessToken));
      dispatch(setUser(res.data.user));
      dispatch(setCart(res.data.cart));
    })
    .catch((err) => {
      console.log(err);
    });
};
