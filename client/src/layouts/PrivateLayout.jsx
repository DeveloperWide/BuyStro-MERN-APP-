import Navbar from "../layouts/Navbar";
import { Outlet } from "react-router";

const PrivateLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default PrivateLayout;
