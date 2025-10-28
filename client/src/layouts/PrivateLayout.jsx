import Navbar from "../layouts/Navbar";
import { Outlet } from "react-router";
import { getToken } from "../utils/helper";

const PrivateLayout = () => {
  const token = getToken();

  if (!token) return <Navigate to="/login" />;
  
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default PrivateLayout;
