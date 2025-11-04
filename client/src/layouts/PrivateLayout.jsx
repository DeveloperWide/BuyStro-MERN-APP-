import Navbar from "../layouts/Navbar";
import { Outlet, useLocation } from "react-router";
import { getToken } from "../utils/helper";

const PrivateLayout = () => {
  const token = getToken();
  const location = useLocation();
  console.log(location.pathname)

  if (!token) return <Navigate to="/login" />;

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default PrivateLayout;
