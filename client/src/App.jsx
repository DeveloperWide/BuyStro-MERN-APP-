import { Route, Routes } from "react-router";
import AuthLayout from "./layouts/AuthLayout.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import GetMe from "./pages/GetMe.jsx";
import { Products } from "./pages/Products.jsx";
import PrivateLayout from "./layouts/PrivateLayout.jsx";

const App = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      {/* Private Routes */}
      <Route element={<PrivateLayout />}>
        <Route path="/me" element={<GetMe />} />
        <Route path="/products" element={<Products />} />
      </Route>
    </Routes>
  );
};

export default App;
