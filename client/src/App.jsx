import { Navigate, Route, Routes } from "react-router";
import AuthLayout from "./layouts/AuthLayout.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import { Products } from "./pages/Products.jsx";
import PrivateLayout from "./layouts/PrivateLayout.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setAccessToken, setUser } from "./redux/authSlice/authSlice.js";
import CartItems from "./pages/CartItems.jsx";
import { setCart } from "./redux/cartSlice/cartSlice.js";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("/api/auth/refresh", { withCredentials: true })
      .then((res) => {
        dispatch(setAccessToken(res.data.accessToken));
        dispatch(setUser(res.data.user));
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
        <Route path="/cartItems" element={<CartItems />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Route>
    </Routes>
  );
};

export default App;
