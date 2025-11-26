import { Navigate, Route, Routes } from "react-router";
import AuthLayout from "./layouts/AuthLayout.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import { Products } from "./pages/Products.jsx";
import PrivateLayout from "./layouts/PrivateLayout.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAccessToken, setUser } from "./redux/authSlice/authSlice.js";
import CartItems from "./pages/CartItems.jsx";
import { setCart } from "./redux/cartSlice/cartSlice.js";
import axiosInstance from "./utils/axiosInstance.js";
import Wishlist from "./pages/Wishlist.jsx";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    axiosInstance
      .get("/auth/refresh")
      .then((res) => {
        dispatch(setAccessToken(res.data.accessToken));
        dispatch(setUser(res.data.user));
        dispatch(setCart(res.data.cart));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const auth = useSelector((state) => state.auth);

  const isAuthorized = auth.accessToken !== null && auth.user !== null;

  return (
    <Routes>
      {/* Public Routes */}
      <Route element={isAuthorized ? <Navigate to="/" /> : <AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      {/* Private Routes */}
      <Route
        element={isAuthorized ? <PrivateLayout /> : <Navigate to="/login" />}
      >
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<CartItems />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Route>
    </Routes>
  );
  hello;
};

export default App;
