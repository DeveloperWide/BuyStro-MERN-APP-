import Navbar from "../layouts/Navbar";
import { Outlet, useLocation } from "react-router";
import { getToken } from "../utils/helper";
import ImageSlider from "../components/ImageSlider";

const PrivateLayout = () => {
  const token = getToken();
  const location = useLocation();

  if (!token) return <Navigate to="/login" />;

  return (
    <>
      <Navbar />
      {location.pathname && location.pathname === "/products" && (
        <>
          <h1 className="text-3xl md:text-5xl text-[#D97D55] font-semibold mt-3 text-center">
            Shop on{" "}
            <span className="text-4xl  md:text-6xl text-[#6FA4AF]">
              BuyStro
            </span>
          </h1>
          <ImageSlider />
        </>
      )}
      <Outlet />
    </>
  );
};

export default PrivateLayout;
