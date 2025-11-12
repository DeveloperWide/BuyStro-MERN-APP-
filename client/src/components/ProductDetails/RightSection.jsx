import ProductImages from "../ProductImages";
import ProductButtons from "../ProductButtons";

const RightSection = ({ productDetails, setCurrImageIndex }) => {
  return (
    <div className="lg:col-span-2">
      <h2 className="text-2xl text-text font-bold">{productDetails.title}</h2>
      <div className="price w-full flex text-3xl font-bold py-1.5 px-2">
        <span className="text-sm">₹</span>
        {productDetails.price}
      </div>
      <p className="mt-2 text-text ">
        <b>Description : </b>
        <br />
        {productDetails.description}
      </p>

      <div className="images block mt-4">
        <b>Images :</b>
        <br />
        {productDetails.images && (
          <ProductImages
            Images={productDetails.images}
            Title={productDetails.title}
            handleImage={setCurrImageIndex}
          />
        )}
      </div>
      <ProductButtons Details={productDetails} />
    </div>
  );
};

export default RightSection;
