import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import RightSection from "../components/ProductDetails/RightSection";
import LeftSection from "../components/ProductDetails/LeftSection";

const ProductDetails = () => {
  const [productDetails, setProductDetails] = useState({});
  const [currImageIndex, setCurrImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`/api/product/${id}`)
      .then((res) => {
        setProductDetails(res.data.product);
      })
      .catch((err) => {
        console.error("Error while fetching product details:", err);
      })
      .finally(() => setLoading(false));
  }, [id]);

  const handleCurrImage = (idx) => {
    setCurrImageIndex(idx);
  };

  if (loading) return <div className="text-center py-10">Loading...</div>;

  if (!productDetails || !productDetails.title)
    return <div className="errorMsg">No Product Found</div>;

  const imageSrc =
    productDetails.images && productDetails.images[currImageIndex]
      ? productDetails.images[currImageIndex]
      : "https://via.placeholder.com/400?text=No+Image";

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-4">
      {/* Left Section - Images */}
      <LeftSection
        productDetails={productDetails}
        imageSrc={imageSrc}
        handleCurrImage={handleCurrImage}
      />

      {/* Right Section - Details */}
      <RightSection
        productDetails={productDetails}
        setCurrImageIndex={setCurrImageIndex}
      />
    </div>
  );
};

export default ProductDetails;
