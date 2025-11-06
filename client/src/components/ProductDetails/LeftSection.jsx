const LeftSection = ({ imageSrc, productDetails }) => {
  return (
    <div className="selected_img">
      <img
        src={imageSrc}
        alt={productDetails.title}
        className="w-full rounded-lg shadow-md"
      />
    </div>
  );
};

export default LeftSection;
