import React from "react";
import { Heart, ShoppingCart, Zap } from "lucide-react";

const ProductButtons = () => {
  return (
    <div className="btns  flex flex-col px-3 py-3 justify-center items-center">
      {/* Buy Now Button */}
      <button className="buy-now-btn my-2 bg-primary">
        <Zap size={24} strokeWidth={1} absoluteStrokeWidth /> Buy Now
      </button>

      {/* Cart & Wishlist Buttons */}
      <div className="flex justify-center items-center gap-2 px-2 w-full">
        <button className="add-cart-btn bg-text hove">
          <ShoppingCart size={18} />
          Cart
        </button>

        <button className="add-wishlist-btn bg-[#dc2626] ">
          <Heart size={18} />
          Wishlist
        </button>
      </div>
    </div>
  );
};

export default ProductButtons;
