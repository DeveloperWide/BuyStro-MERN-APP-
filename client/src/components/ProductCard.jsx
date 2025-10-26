import React from "react";
import {Link} from "react-router"

const ProductCard = ({ Title, Description, ImageSrc, productId, Price }) => {
  return (
    <div className="card bg-base-100 w-96 sm:w-64 md:w-72 shadow-sm rounded-lg overflow-hidden">
      <Link to={`/product/${productId}`}>
       <figure className="h-48 overflow-hidden">
        <img src={ImageSrc} alt={Title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
      </figure>
      {/* Price */}
      <h2 className="px-3 pt-2 text-2xl font-bold"><span className="text-sm pr-0.5">₹</span>{Price}</h2>

      {/* Title & Description */}
      <div className="px-2 py-1">
        <h2 className="card-title text-lg font-semibold hover:text-amber-600 py-1 text-gray-700">{Title}</h2>
        <p className="text-sm text-gray-600 py-1">{Description}</p>
      </div>
      </Link>

      <button
        className="w-full py-3 bg-blue-500 text-white font-medium hover:bg-blue-600 cursor-pointer active:scale-95 transition-all duration-200"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
