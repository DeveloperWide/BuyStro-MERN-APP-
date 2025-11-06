const ProductImages = ({ Images, Title, handleImage }) => {
  return (
    <div className="images flex gap-3 items-center">
      {Images && Images.length > 0 ? (
        Images.map((img, idx) => {
          return (
            <img
              src={img}
              alt={Title}
              className="h-20 w-20 rounded"
              onClick={() => Images && handleImage(idx)}
              key={idx}
            />
          );
        })
      ) : (
        <div>No Images Provided</div>
      )}
    </div>
  );
};

export default ProductImages;
