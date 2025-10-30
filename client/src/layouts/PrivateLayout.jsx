import Navbar from "../layouts/Navbar";
import { Outlet } from "react-router";
import { getToken } from "../utils/helper";
import ImageSlider from "../components/ImageSlider";

const PrivateLayout = () => {
  const token = getToken();

  if (!token) return <Navigate to="/login" />;
  
  return (
    <>
      <Navbar />
      <ImageSlider />
      <Outlet />
    </>
  );
};

export default PrivateLayout;
