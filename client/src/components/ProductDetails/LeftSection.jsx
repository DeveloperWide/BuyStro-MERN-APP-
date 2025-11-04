import ProductImages from "../ProductImages";

const LeftSection = ({ imageSrc, productDetails, handleCurrImage }) => {
  return (
    <div className="selected_img">
      <img
        src={imageSrc}
        alt={productDetails.title}
        className="w-full rounded-lg shadow-md"
      />
      {/* <div className="images hidden md:block mt-4">
        {productDetails.images && (
          <ProductImages
            Images={productDetails.images}
            Title={productDetails.title}
            handleImage={handleCurrImage}
          />
        )}
      </div> */}
    </div>
  );
};

export default LeftSection;
